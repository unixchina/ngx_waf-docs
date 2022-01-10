(window.webpackJsonp=window.webpackJsonp||[]).push([[54],{474:function(t,e,r){"use strict";r.r(e);var a=r(52),s=Object(a.a)({},(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h1",{attrs:{id:"兼容性说明"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#兼容性说明"}},[t._v("#")]),t._v(" 兼容性说明")]),t._v(" "),r("h2",{attrs:{id:"操作系统兼容性"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#操作系统兼容性"}},[t._v("#")]),t._v(" 操作系统兼容性")]),t._v(" "),r("p",[t._v("不保证与Linux以外的操作系统的兼容性。")]),t._v(" "),r("h2",{attrs:{id:"nginx-兼容性"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#nginx-兼容性"}},[t._v("#")]),t._v(" nginx 兼容性")]),t._v(" "),r("p",[t._v("本模块只保证对 "),r("code",[t._v("nginx-1.18.0")]),t._v(" 或更新的版本的兼容性。")]),t._v(" "),r("h2",{attrs:{id:"模块兼容性"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#模块兼容性"}},[t._v("#")]),t._v(" 模块兼容性")]),t._v(" "),r("h3",{attrs:{id:"ngx-http-rewrite-module"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#ngx-http-rewrite-module"}},[t._v("#")]),t._v(" ngx_http_rewrite_module")]),t._v(" "),r("p",[t._v("本模块与 "),r("a",{attrs:{href:"https://nginx.org/en/docs/http/ngx_http_rewrite_module.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("ngx_http_rewrite_module"),r("OutboundLink")],1),t._v("\n存在兼容性问题。")]),t._v(" "),r("ul",[r("li",[t._v("当 "),r("code",[t._v("return")]),t._v(" 指令生效时模块不会生效。")]),t._v(" "),r("li",[t._v("当 "),r("code",[t._v("rewrite")]),t._v(" 指令造成了返回（如 302 重定向）时模块不会生效。")])]),t._v(" "),r("div",{staticClass:"custom-block tip"},[r("p",{staticClass:"custom-block-title"},[t._v("使用 try_files 代替 rewrite")]),t._v(" "),r("p",[t._v("你可能会有下列的配置。")]),t._v(" "),r("div",{staticClass:"language-nginx extra-class"},[r("pre",{pre:!0,attrs:{class:"language-nginx"}},[r("code",[r("span",{pre:!0,attrs:{class:"token directive"}},[r("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" (!-e "),r("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$request_filename")]),t._v(")")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    rewrite (.*) /index.php\n"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),r("p",[t._v("你可以用下面的配置来替换。")]),t._v(" "),r("div",{staticClass:"language-nginx extra-class"},[r("pre",{pre:!0,attrs:{class:"language-nginx"}},[r("code",[r("span",{pre:!0,attrs:{class:"token directive"}},[r("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("try_files")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$uri")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$uri")]),t._v("/ /index.php")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),r("p",[t._v("详情见 "),r("a",{attrs:{href:"https://nginx.org/en/docs/http/ngx_http_rewrite_module.html#rewrite",target:"_blank",rel:"noopener noreferrer"}},[t._v("rewrite"),r("OutboundLink")],1),t._v(" 和 "),r("a",{attrs:{href:"https://nginx.org/en/docs/http/ngx_http_core_module.html#try_files",target:"_blank",rel:"noopener noreferrer"}},[t._v("try_files"),r("OutboundLink")],1),t._v("。")])])])}),[],!1,null,null,null);e.default=s.exports}}]);