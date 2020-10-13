import cx from 'classnames'
import React, { ReactNode } from 'react'
import { ExpansionCell, icons, InlineFlexCell } from '../../common-views'
import { ArtColumn } from '../../interfaces'
import { internals } from '../../internals'
import { collectNodes, mergeCellProps } from '../../utils'
import { flatMap } from '../../utils/others'
import { TablePipeline } from '../pipeline'

export interface RowDetailFeatureOptions {
  /** 非受控用法：是否默认展开所有详情单元格 */
  defaultOpenAll?: boolean

  /** 非受控用法：默认展开的 keys */
  defaultOpenKeys?: string[]

  /** 受控用法：当前展开的 keys */
  openKeys?: string[]

  /** 受控用法：openKeys 改变的回调 */
  onChangeOpenKeys?(nextKeys: string[], key: string, action: 'expand' | 'collapse'): void

  /** 详情单元格的渲染方法 */
  renderDetail?(row: any, rowIndex: number): ReactNode

  /** 是否包含详情单元格 */
  hasDetail?(row: any, rowIndex: number): ReactNode

  /** 获取详情单元格所在行的 key，默认为 `(row) => row[primaryKey] + '_detail'` */
  getDetailKey?(row: any, rowIndex: number): string

  /** 详情单元格 td 的额外样式 */
  detailCellStyle?: React.CSSProperties
}

const rowDetailSymbol = Symbol('row-detail')

const fallbackRenderDetail = (row: any) => (
  <div>
    <b style={{ color: 'indianred' }}>
      设置 <code>rowDetail.renderDetail</code> 来自定义详情内容
    </b>
    <br />
    <span style={{ wordBreak: 'break-all' }}>ROW DETAIL of {JSON.stringify(row)}</span>
  </div>
)

export function rowDetail(opts: RowDetailFeatureOptions = {}) {
  return function rowDetailStep<P extends TablePipeline>(pipeline: P) {
    const stateKey = 'rowDetail'

    const primaryKey = pipeline.ensurePrimaryKey('rowDetail') as string
    if (typeof primaryKey !== 'string') {
      throw new Error('rowDetail 仅支持字符串作为 primaryKey')
    }

    const indents = pipeline.ctx.indents
    const textOffset = indents.iconIndent + indents.iconWidth + indents.iconGap

    const getDetailKey = opts.getDetailKey ?? ((row) => row[primaryKey] + '_detail')
    const renderDetail = opts.renderDetail ?? fallbackRenderDetail
    const hasDetail = opts.hasDetail ?? (() => true)

    const openKeys: string[] =
      opts.openKeys ??
      pipeline.state[stateKey] ??
      (opts.defaultOpenAll
        ? pipeline
            .getDataSource()
            .filter(hasDetail)
            .map((row) => row[primaryKey])
        : opts.defaultOpenKeys) ??
      []
    const onChangeOpenKeys: RowDetailFeatureOptions['onChangeOpenKeys'] = (nextKeys, key, action) => {
      opts.onChangeOpenKeys?.(nextKeys, key, action)
      pipeline.setStateAtKey(stateKey, nextKeys, { key, action })
    }

    const openKeySet = new Set(openKeys)

    return pipeline
      .dataSource(
        flatMap(pipeline.getDataSource(), (row, rowIndex) => {
          if (openKeySet.has(row[primaryKey])) {
            return [row, { [rowDetailSymbol]: true, ...row, [primaryKey]: getDetailKey(row, rowIndex) }]
          } else {
            return [row]
          }
        }),
      )
      .columns(processColumns(pipeline.getColumns()))
      .appendRowPropsGetter((row) => {
        if (row[rowDetailSymbol]) {
          return { className: 'no-hover' }
        }
      })

    function processColumns(columns: ArtColumn[]) {
      if (columns.length === 0) {
        return columns
      }
      const columnFlatCount = collectNodes(columns, 'leaf-only').length
      const [firstCol, ...others] = columns

      const render = (value: any, row: any, rowIndex: number) => {
        if (row[rowDetailSymbol]) {
          return renderDetail(row, rowIndex)
        }

        const content = internals.safeRender(firstCol, row, rowIndex)
        if (!hasDetail(row, rowIndex)) {
          return <InlineFlexCell style={{ marginLeft: textOffset }}>{content}</InlineFlexCell>
        }

        const expanded = openKeySet.has(row[primaryKey])

        const expandCls = expanded ? 'expanded' : 'collapsed'
        return (
          <ExpansionCell className={cx('expansion-cell', expandCls)}>
            <icons.CaretRight
              className={cx('expansion-icon', expandCls)}
              style={{
                marginLeft: indents.iconIndent,
                marginRight: indents.iconGap,
              }}
            />
            {content}
          </ExpansionCell>
        )
      }

      const getCellProps = (value: any, row: any, rowIndex: number) => {
        if (row[rowDetailSymbol]) {
          return {
            style: {
              '--cell-padding': '0',
              overflow: 'hidden',
              ...opts.detailCellStyle,
            } as any,
          }
        }

        const prevProps = firstCol.getCellProps?.(value, row, rowIndex)

        if (!hasDetail(row, rowIndex)) {
          return prevProps
        }

        const rowKey = row[primaryKey]
        const expanded = openKeySet.has(rowKey)

        let onClick: any
        if (expanded) {
          onClick = () => {
            onChangeOpenKeys(
              openKeys.filter((key) => key !== rowKey),
              rowKey,
              'collapse',
            )
          }
        } else {
          onClick = () => {
            onChangeOpenKeys([...openKeys, rowKey], rowKey, 'expand')
          }
        }
        return mergeCellProps(prevProps, { onClick, style: { cursor: 'pointer' } })
      }

      return [
        {
          ...firstCol,
          title: (
            <div style={{ display: 'inline-block', marginLeft: textOffset }}>
              {internals.safeRenderHeader(firstCol)}
            </div>
          ),
          render,
          getCellProps,
          getSpanRect(value: any, row: any, rowIndex: number) {
            if (row[rowDetailSymbol]) {
              // detail 总是成一行
              return { top: rowIndex, bottom: rowIndex + 1, left: 0, right: columnFlatCount }
            }
          },
        },
        ...others,
      ]
    }
  }
}