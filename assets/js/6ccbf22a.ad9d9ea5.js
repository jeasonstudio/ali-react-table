(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3739],{30876:function(e,n,r){"use strict";r.d(n,{Zo:function(){return p},kt:function(){return m}});var t=r(2784);function o(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function a(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function i(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?a(Object(r),!0).forEach((function(n){o(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function u(e,n){if(null==e)return{};var r,t,o=function(e,n){if(null==e)return{};var r,t,o={},a=Object.keys(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||(o[r]=e[r]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=t.createContext({}),l=function(e){var n=t.useContext(c),r=n;return e&&(r="function"==typeof e?e(n):i(i({},n),e)),r},p=function(e){var n=l(e.components);return t.createElement(c.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},f=t.forwardRef((function(e,n){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,p=u(e,["components","mdxType","originalType","parentName"]),f=l(r),m=o,d=f["".concat(c,".").concat(m)]||f[m]||s[m]||a;return r?t.createElement(d,i(i({ref:n},p),{},{components:r})):t.createElement(d,i({ref:n},p))}));function m(e,n){var r=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=f;var u={};for(var c in n)hasOwnProperty.call(n,c)&&(u[c]=n[c]);u.originalType=e,u.mdxType="string"==typeof e?e:o,i[1]=u;for(var l=2;l<a;l++)i[l]=r[l];return t.createElement.apply(null,i)}return t.createElement.apply(null,r)}f.displayName="MDXCreateElement"},30089:function(e,n,r){"use strict";r.r(n),r.d(n,{frontMatter:function(){return u},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return p},default:function(){return f}});var t=r(7560),o=r(98283),a=(r(2784),r(30876)),i=["components"],u={id:"column-range-hover",title:"\u5217\u8303\u56f4\u9ad8\u4eae"},c=void 0,l={unversionedId:"pipeline/features/column-range-hover",id:"pipeline/features/column-range-hover",isDocsHomePage:!1,title:"\u5217\u8303\u56f4\u9ad8\u4eae",description:"\u9f20\u6807\u60ac\u505c\u5728\u8868\u683c\u4e0a\u65f6\uff0c\u9ad8\u4eae\u5355\u5143\u683c\u6240\u5728\u7684\u5217\u4e0e\u76f8\u5e94\u7684\u8868\u5934\u3002",source:"@site/docs/pipeline/features/column-range-hover.mdx",sourceDirName:"pipeline/features",slug:"/pipeline/features/column-range-hover",permalink:"/docs/pipeline/features/column-range-hover",editUrl:"https://github.com/alibaba/ali-react-table/edit/master/packages/website/docs/pipeline/features/column-range-hover.mdx",version:"current",frontMatter:{id:"column-range-hover",title:"\u5217\u8303\u56f4\u9ad8\u4eae"},sidebar:"sidebar",previous:{title:"\u5217\u9ad8\u4eae",permalink:"/docs/pipeline/features/column-hover"},next:{title:"\u81ea\u52a8\u5408\u5e76\u591a\u884c",permalink:"/docs/pipeline/features/auto-row-span"}},p=[{value:"\u793a\u4f8b",id:"\u793a\u4f8b",children:[]},{value:"\u4f7f\u7528\u65b9\u5f0f",id:"\u4f7f\u7528\u65b9\u5f0f",children:[]}],s={toc:p};function f(e){var n=e.components,r=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,t.Z)({},s,r,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u9f20\u6807\u60ac\u505c\u5728\u8868\u683c\u4e0a\u65f6\uff0c\u9ad8\u4eae\u5355\u5143\u683c\u6240\u5728\u7684\u5217\u4e0e\u76f8\u5e94\u7684\u8868\u5934\u3002"),(0,a.kt)("h3",{id:"\u793a\u4f8b"},"\u793a\u4f8b"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"function \u5217\u9ad8\u4eae() {\n  const dataSource = assets.biz.dataSource6\n  const columns = assets.biz.columns6\n  const pipeline = useTablePipeline({ components: fusion })\n    .input({ dataSource, columns })\n    .use(features.columnRangeHover())\n\n  return <BaseTable {...pipeline.getProps()} />\n}\n")),(0,a.kt)("h3",{id:"\u4f7f\u7528\u65b9\u5f0f"},"\u4f7f\u7528\u65b9\u5f0f"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"pipeline.use(features.columnRangeHover(options))\n")),(0,a.kt)("p",null,"options \u7ed3\u6784\u5982\u4e0b\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"export interface ColumnRangeHoverFeatureOptions {\n  /** \u9f20\u6807\u60ac\u505c\u65f6\u5355\u5143\u683c\u7684\u80cc\u666f\u8272\uff0c\u9ed8\u8ba4\u4e3a 'var(--hover-bgcolor)' */\n  hoverColor?: string\n\n  /** \u9f20\u6807\u60ac\u505c\u65f6\u8868\u5934\u7684\u80cc\u666f\u8272\uff0c\u9ed8\u8ba4\u4e3a 'var(--header-hover-bgcolor)' */\n  headerHoverColor?: string\n\n  /** \u975e\u53d7\u63a7\u7528\u6cd5\uff1a\u9ed8\u8ba4\u7684\u60ac\u505c\u8303\u56f4 */\n  defaultHoverRange?: HoverRange\n\n  /** \u53d7\u63a7\u7528\u6cd5\uff1a\u5f53\u524d\u60ac\u505c\u8303\u56f4 */\n  hoverRange?: HoverRange\n\n  /** \u53d7\u63a7\u7528\u6cd5\uff1a\u60ac\u505c\u6e32\u67d3\u6539\u53d8\u7684\u56de\u8c03 */\n  onChangeHoverRange?(nextColIndexRange: HoverRange): void\n}\n\nexport type HoverRange = {\n  start: number\n  end: number\n}\n")))}f.isMDXComponent=!0}}]);