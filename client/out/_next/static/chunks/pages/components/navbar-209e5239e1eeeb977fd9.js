_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[15],{"+Cyc":function(e,t,r){"use strict";var n=r("5D9J"),o=r("OJSm"),a=r("BMxC"),i=r("QdyT"),c=Object(n.a)(a.a)((function(e){var t,r=e._after,n=e._focus,a=e._selected,c=e._focusWithin,s=e._hover,u=e._invalid,f=e._active,l=e._disabled,d=e._grabbed,b=e._pressed,p=e._expanded,v=e._visited,h=e._before,O=e._readOnly,y=e._first,j=e._notFirst,_=e._notLast,g=e._last,w=e._placeholder,m=e._checked,x=e._groupHover,E=e._mixed,k=e._odd,L=e._even;return Object(o.a)(((t={})["&:hover"]=Object(i.b)(s),t["&:focus"]=Object(i.b)(n),t["&:active, &[data-active=true]"]=Object(i.b)(f),t["&:visited"]=Object(i.b)(v),t["&:disabled, &:disabled:focus, &:disabled:hover, &[aria-disabled=true], &[aria-disabled=true]:focus, &[aria-disabled=true]:hover"]=Object(i.b)(l),t["&[aria-selected=true]"]=Object(i.b)(a),t["&[aria-invalid=true]"]=Object(i.b)(u),t["&[aria-expanded=true]"]=Object(i.b)(p),t["&[aria-grabbed=true]"]=Object(i.b)(d),t["&[aria-readonly=true], &[readonly]"]=Object(i.b)(O),t["&:first-of-type"]=Object(i.b)(y),t["&:not(:first-of-type)"]=Object(i.b)(j),t["&:not(:last-of-type)"]=Object(i.b)(_),t["&:last-of-type"]=Object(i.b)(g),t["&:nth-of-type(odd)"]=Object(i.b)(k),t["&:nth-of-type(even)"]=Object(i.b)(L),t["&[aria-checked=mixed]"]=Object(i.b)(E),t["&[aria-checked=true]"]=Object(i.b)(m),t["&[aria-pressed=true]"]=Object(i.b)(b),t["[role=group]:hover &"]=Object(i.b)(x),t["&:before"]=Object(i.b)(h),t["&:after"]=Object(i.b)(r),t["&:focus-within"]=Object(i.b)(c),t["&::placeholder"]=w,t))}));c.displayName="PseudoBox",t.a=c},Weur:function(e,t,r){"use strict";var n=r("pVnL"),o=r.n(n),a=r("8OQS"),i=r.n(a),c=r("q1tI"),s=r.n(c),u=r("BMxC"),f=Object(c.forwardRef)((function(e,t){var r=e.align,n=e.justify,a=e.wrap,c=e.direction,f=i()(e,["align","justify","wrap","direction"]);return s.a.createElement(u.a,o()({ref:t,display:"flex",flexDirection:c,alignItems:r,justifyContent:n,flexWrap:a},f))}));f.displayName="Flex",t.a=f},YFqc:function(e,t,r){e.exports=r("cTJO")},bQFp:function(e,t,r){"use strict";var n=r("pVnL"),o=r.n(n),a=r("8OQS"),i=r.n(a),c=r("qKvR"),s=r("q1tI"),u=r("BMxC");var f=Object(s.forwardRef)((function(e,t){var r=e.htmlWidth,n=e.htmlHeight,a=e.alt,s=i()(e,["htmlWidth","htmlHeight","alt"]);return Object(c.d)("img",o()({width:r,height:n,ref:t,alt:a},s))})),l=Object(s.forwardRef)((function(e,t){var r=e.src,n=e.fallbackSrc,a=e.onError,l=e.onLoad,d=e.ignoreFallback,b=i()(e,["src","fallbackSrc","onError","onLoad","ignoreFallback"]),p=function(e){var t=e.src,r=e.onLoad,n=e.onError,o=e.enabled,a=void 0===o||o,i=Object(s.useRef)(!0),c=Object(s.useState)(!1),u=c[0],f=c[1];return Object(s.useEffect)((function(){if(t&&a){var e=new window.Image;e.src=t,e.onload=function(e){i.current&&(f(!0),r&&r(e))},e.onerror=function(e){i.current&&(f(!1),n&&n(e))}}}),[t,r,n,a]),Object(s.useEffect)((function(){return function(){i.current=!1}}),[]),u}({src:r,onLoad:l,onError:a,enabled:!Boolean(d)}),v=d?{src:r,onLoad:l,onError:a}:{src:p?r:n};return Object(c.d)(u.a,o()({as:f,ref:t},v,b))}));l.displayName="Image",t.a=l},cTJO:function(e,t,r){"use strict";var n=r("J4zp"),o=r("284h");t.__esModule=!0,t.default=void 0;var a,i=o(r("q1tI")),c=r("elyg"),s=r("nOHt"),u=new Map,f=window.IntersectionObserver,l={};var d=function(e,t){var r=a||(f?a=new f((function(e){e.forEach((function(e){if(u.has(e.target)){var t=u.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(a.unobserve(e.target),u.delete(e.target),t())}}))}),{rootMargin:"200px"}):void 0);return r?(r.observe(e),u.set(e,t),function(){try{r.unobserve(e)}catch(t){console.error(t)}u.delete(e)}):function(){}};function b(e,t,r,n){(0,c.isLocalURL)(t)&&(e.prefetch(t,r,n).catch((function(e){0})),l[t+"%"+r]=!0)}var p=function(e){var t=!1!==e.prefetch,r=i.default.useState(),o=n(r,2),a=o[0],u=o[1],p=(0,s.useRouter)(),v=p&&p.pathname||"/",h=i.default.useMemo((function(){var t=(0,c.resolveHref)(v,e.href);return{href:t,as:e.as?(0,c.resolveHref)(v,e.as):t}}),[v,e.href,e.as]),O=h.href,y=h.as;i.default.useEffect((function(){if(t&&f&&a&&a.tagName&&(0,c.isLocalURL)(O)&&!l[O+"%"+y])return d(a,(function(){b(p,O,y)}))}),[t,a,O,y,p]);var j=e.children,_=e.replace,g=e.shallow,w=e.scroll;"string"===typeof j&&(j=i.default.createElement("a",null,j));var m=i.Children.only(j),x={ref:function(e){e&&u(e),m&&"object"===typeof m&&m.ref&&("function"===typeof m.ref?m.ref(e):"object"===typeof m.ref&&(m.ref.current=e))},onClick:function(e){m.props&&"function"===typeof m.props.onClick&&m.props.onClick(e),e.defaultPrevented||function(e,t,r,n,o,a,i){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,c.isLocalURL)(r))&&(e.preventDefault(),null==i&&(i=n.indexOf("#")<0),t[o?"replace":"push"](r,n,{shallow:a}).then((function(e){e&&i&&(window.scrollTo(0,0),document.body.focus())})))}(e,p,O,y,_,g,w)}};return t&&(x.onMouseEnter=function(e){(0,c.isLocalURL)(O)&&(m.props&&"function"===typeof m.props.onMouseEnter&&m.props.onMouseEnter(e),b(p,O,y,{priority:!0}))}),(e.passHref||"a"===m.type&&!("href"in m.props))&&(x.href=(0,c.addBasePath)(y)),i.default.cloneElement(m,x)};t.default=p},pSy7:function(e,t,r){"use strict";function n(){return(n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function o(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}r.r(t);var a=r("q1tI"),i=r.n(a),c=r("YFqc"),s=r.n(c),u=r("pVnL"),f=r.n(u),l=r("8OQS"),d=r.n(l),b=r("qKvR"),p=r("+Cyc"),v={transition:"all 0.15s ease-out",cursor:"pointer",textDecoration:"none",outline:"none",_focus:{boxShadow:"outline"},_disabled:{opacity:"0.4",cursor:"not-allowed",textDecoration:"none"}},h=Object(a.forwardRef)((function(e,t){var r=e.isDisabled,n=e.isExternal,o=e.onClick,a=d()(e,["isDisabled","isExternal","onClick"]),i=n?{target:"_blank",rel:"noopener noreferrer"}:null;return Object(b.d)(p.a,f()({as:"a",ref:t,tabIndex:r?-1:void 0,"aria-disabled":r,onClick:r?function(e){return e.preventDefault()}:o,_hover:{textDecoration:"underline"}},i,v,a))}));h.displayName="Link";var O=h,y=r("Weur"),j=r("bQFp"),_=r("sK1y"),g=r("BMxC"),w=i.a.createElement,m=function(e){var t=e.children,r=o(e,["children"]);return w(O,n({px:2,color:"white"},r),t)};t.default=function(){return w("div",{style:{position:"fixed",width:"100%"}},w(y.a,{bg:"#2F2E41",w:"100%",px:3,py:4,justifyContent:"space-between",alignItems:"center"},w(y.a,{flexDirection:"row",justifyContent:"center",alignItems:"center"},w(j.a,{src:"chuck.png",size:30,ml:{base:"12px"}}),w(_.a,{pl:3,color:"white",visibility:{base:"hidden",md:"visible"}},"ChuckNorris")),w(g.a,{marginRight:"10em"},w(s.a,{href:"/",passHref:!0},w(m,null,"Home")),w(s.a,{href:"/about",passHref:!0},w(m,{ml:"5em"},"About")))))}},sj2S:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/navbar",function(){return r("pSy7")}])}},[["sj2S",0,1,2,3,4]]]);