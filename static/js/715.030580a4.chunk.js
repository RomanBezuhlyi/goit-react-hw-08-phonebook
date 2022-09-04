"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[715],{2715:function(r,t,o){o.r(t),o.d(t,{default:function(){return u}});var n=o(4320),a=o(5048),e=o(2824),i=o(8928),s=o(5194),c=o(4565),p=o(3329),u=function(){var r=(0,a.v9)(e.Nh),t=(0,a.v9)(e.vW);return(0,p.jsx)(n.Main,{children:(0,p.jsx)(i.Z,{raised:!0,sx:{mt:2},children:(0,p.jsxs)(s.Z,{children:[(0,p.jsxs)(c.Z,{sx:{fontSize:"2em",fontWeight:500},align:"center",color:"primary",gutterBottom:!0,children:["Welcome",r&&", ".concat(t,",")," to Phonebook - your application to manage contacts."]}),!r&&(0,p.jsxs)(p.Fragment,{children:[(0,p.jsxs)(c.Z,{sx:{fontSize:24},color:"text.secondary",align:"center",children:["Please,"," ",(0,p.jsx)(n.AppLink,{to:"login",contrast:(!0).toString(),children:"sign in"})," ","to access your personal phonebook."]}),(0,p.jsxs)(c.Z,{sx:{fontSize:24},color:"text.secondary",align:"center",children:["If You don't have a phonebook yet, please,"," ",(0,p.jsx)(n.AppLink,{to:"register",contrast:(!0).toString(),children:"register"}),"."]})]})]})})})}},8928:function(r,t,o){o.d(t,{Z:function(){return f}});var n=o(7462),a=o(3366),e=o(2791),i=o(8182),s=o(4419),c=o(1574),p=o(5873),u=o(6650),l=o(1217);function h(r){return(0,l.Z)("MuiCard",r)}(0,o(5878).Z)("MuiCard",["root"]);var d=o(3329),g=["className","raised"],v=(0,c.ZP)(u.Z,{name:"MuiCard",slot:"Root",overridesResolver:function(r,t){return t.root}})((function(){return{overflow:"hidden"}})),f=e.forwardRef((function(r,t){var o=(0,p.Z)({props:r,name:"MuiCard"}),e=o.className,c=o.raised,u=void 0!==c&&c,l=(0,a.Z)(o,g),f=(0,n.Z)({},o,{raised:u}),m=function(r){var t=r.classes;return(0,s.Z)({root:["root"]},h,t)}(f);return(0,d.jsx)(v,(0,n.Z)({className:(0,i.Z)(m.root,e),elevation:u?8:void 0,ref:t,ownerState:f},l))}))},5194:function(r,t,o){o.d(t,{Z:function(){return v}});var n=o(7462),a=o(3366),e=o(2791),i=o(8182),s=o(4419),c=o(1574),p=o(5873),u=o(1217);function l(r){return(0,u.Z)("MuiCardContent",r)}(0,o(5878).Z)("MuiCardContent",["root"]);var h=o(3329),d=["className","component"],g=(0,c.ZP)("div",{name:"MuiCardContent",slot:"Root",overridesResolver:function(r,t){return t.root}})((function(){return{padding:16,"&:last-child":{paddingBottom:24}}})),v=e.forwardRef((function(r,t){var o=(0,p.Z)({props:r,name:"MuiCardContent"}),e=o.className,c=o.component,u=void 0===c?"div":c,v=(0,a.Z)(o,d),f=(0,n.Z)({},o,{component:u}),m=function(r){var t=r.classes;return(0,s.Z)({root:["root"]},l,t)}(f);return(0,h.jsx)(g,(0,n.Z)({as:u,className:(0,i.Z)(m.root,e),ownerState:f,ref:t},v))}))},4565:function(r,t,o){o.d(t,{Z:function(){return y}});var n=o(3366),a=o(7462),e=o(2791),i=o(8182),s=o(8519),c=o(4419),p=o(1574),u=o(5873),l=o(9853),h=o(1217);function d(r){return(0,h.Z)("MuiTypography",r)}(0,o(5878).Z)("MuiTypography",["root","h1","h2","h3","h4","h5","h6","subtitle1","subtitle2","body1","body2","inherit","button","caption","overline","alignLeft","alignRight","alignCenter","alignJustify","noWrap","gutterBottom","paragraph"]);var g=o(3329),v=["align","className","component","gutterBottom","noWrap","paragraph","variant","variantMapping"],f=(0,p.ZP)("span",{name:"MuiTypography",slot:"Root",overridesResolver:function(r,t){var o=r.ownerState;return[t.root,o.variant&&t[o.variant],"inherit"!==o.align&&t["align".concat((0,l.Z)(o.align))],o.noWrap&&t.noWrap,o.gutterBottom&&t.gutterBottom,o.paragraph&&t.paragraph]}})((function(r){var t=r.theme,o=r.ownerState;return(0,a.Z)({margin:0},o.variant&&t.typography[o.variant],"inherit"!==o.align&&{textAlign:o.align},o.noWrap&&{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},o.gutterBottom&&{marginBottom:"0.35em"},o.paragraph&&{marginBottom:16})})),m={h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",subtitle1:"h6",subtitle2:"h6",body1:"p",body2:"p",inherit:"p"},Z={primary:"primary.main",textPrimary:"text.primary",secondary:"secondary.main",textSecondary:"text.secondary",error:"error.main"},y=e.forwardRef((function(r,t){var o=(0,u.Z)({props:r,name:"MuiTypography"}),e=function(r){return Z[r]||r}(o.color),p=(0,s.Z)((0,a.Z)({},o,{color:e})),h=p.align,y=void 0===h?"inherit":h,x=p.className,b=p.component,w=p.gutterBottom,M=void 0!==w&&w,C=p.noWrap,j=void 0!==C&&C,B=p.paragraph,P=void 0!==B&&B,k=p.variant,S=void 0===k?"body1":k,W=p.variantMapping,N=void 0===W?m:W,R=(0,n.Z)(p,v),_=(0,a.Z)({},p,{align:y,color:e,className:x,component:b,gutterBottom:M,noWrap:j,paragraph:P,variant:S,variantMapping:N}),A=b||(P?"p":N[S]||m[S])||"span",T=function(r){var t=r.align,o=r.gutterBottom,n=r.noWrap,a=r.paragraph,e=r.variant,i=r.classes,s={root:["root",e,"inherit"!==r.align&&"align".concat((0,l.Z)(t)),o&&"gutterBottom",n&&"noWrap",a&&"paragraph"]};return(0,c.Z)(s,d,i)}(_);return(0,g.jsx)(f,(0,a.Z)({as:A,ref:t,ownerState:_,className:(0,i.Z)(T.root,x)},R))}))},9853:function(r,t,o){var n=o(7312);t.Z=n.Z},8519:function(r,t,o){o.d(t,{Z:function(){return p}});var n=o(2982),a=o(7462),e=o(3366),i=o(2466),s=o(114),c=["sx"];function p(r){var t,o=r.sx,p=function(r){var t={systemProps:{},otherProps:{}};return Object.keys(r).forEach((function(o){s.Gc[o]?t.systemProps[o]=r[o]:t.otherProps[o]=r[o]})),t}((0,e.Z)(r,c)),u=p.systemProps,l=p.otherProps;return t=Array.isArray(o)?[u].concat((0,n.Z)(o)):"function"===typeof o?function(){var r=o.apply(void 0,arguments);return(0,i.P)(r)?(0,a.Z)({},u,r):u}:(0,a.Z)({},u,o),(0,a.Z)({},l,{sx:t})}}}]);
//# sourceMappingURL=715.030580a4.chunk.js.map