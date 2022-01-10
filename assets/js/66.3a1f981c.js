(window.webpackJsonp=window.webpackJsonp||[]).push([[66],{470:function(t,a,s){"use strict";s.r(a);var e=s(52),n=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"抵御分布式-cc-攻击-分布式-http-洪水"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#抵御分布式-cc-攻击-分布式-http-洪水"}},[t._v("#")]),t._v(" 抵御分布式 CC 攻击（分布式 HTTP 洪水）")]),t._v(" "),s("p",[t._v("CC 攻击（HTTP 洪水）是指发送大量的 HTTP 请求来耗尽服务器的资源。")]),t._v(" "),s("p",[t._v("如果攻击者使用的 IP 较少则防御较为简单，因为只需要限制 IP 的请求频率，\n但是如果攻击者使用大量的 IP 进行攻击，仅仅限制 IP 的请求频率是无济于事的。\n这种使用大量 IP 进行 CC 攻击的方式称为分布式 CC 攻击或分布式 HTTP 洪水。")]),t._v(" "),s("p",[t._v("本模块提供了一些缓解方式。")]),t._v(" "),s("h2",{attrs:{id:"开启验证码"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#开启验证码"}},[t._v("#")]),t._v(" 开启验证码")]),t._v(" "),s("p",[t._v("详见"),s("RouterLink",{attrs:{to:"/zh-cn/practice/enable-captcha.html"}},[t._v("开启验证码")]),t._v("。")],1),t._v(" "),s("h2",{attrs:{id:"使用五秒盾"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#使用五秒盾"}},[t._v("#")]),t._v(" 使用五秒盾")]),t._v(" "),s("p",[t._v("你可能听说过 Cloudflare 的五秒盾，本模块的五秒盾和 Cloudflare 的完全不同。 它的功能是检测客户端是否能够正确地支持 Cookie，比如发送 Cookie 和正确地处理 "),s("code",[t._v("Set-Cookie")]),t._v(" 响应头。")]),t._v(" "),s("p",[t._v("你可以从本项目的 "),s("code",[t._v("assets/")]),t._v(" 目录下找到 "),s("code",[t._v("under-attack.html")]),t._v(" 并将其拷贝到某个路径下，然后通过修改 nginx 的配置文件来开启五秒盾。")]),t._v(" "),s("h3",{attrs:{id:"lts-版本"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#lts-版本"}},[t._v("#")]),t._v(" LTS 版本")]),t._v(" "),s("ul",[s("li",[t._v("为整个网站开启五秒盾"),s("div",{staticClass:"language-nginx extra-class"},[s("pre",{pre:!0,attrs:{class:"language-nginx"}},[s("code",[s("span",{pre:!0,attrs:{class:"token directive"}},[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("server")])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token directive"}},[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("waf_under_attack")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("on")]),t._v(" file=/path/to/under_attack.html")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])]),t._v(" "),s("li",[t._v("为某个路径开启五秒盾"),s("div",{staticClass:"language-nginx extra-class"},[s("pre",{pre:!0,attrs:{class:"language-nginx"}},[s("code",[s("span",{pre:!0,attrs:{class:"token directive"}},[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("location")]),t._v(" /path")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token directive"}},[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("waf_under_attack")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("on")]),t._v(" file=/path/to/under_attack.html")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])])]),t._v(" "),s("h3",{attrs:{id:"current-版本"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#current-版本"}},[t._v("#")]),t._v(" Current 版本")]),t._v(" "),s("ul",[s("li",[t._v("为整个网站开启五秒盾"),s("div",{staticClass:"language-nginx extra-class"},[s("pre",{pre:!0,attrs:{class:"language-nginx"}},[s("code",[s("span",{pre:!0,attrs:{class:"token directive"}},[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("server")])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token directive"}},[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("waf_under_attack")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("on")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])]),t._v(" "),s("li",[t._v("为某个路径开启五秒盾"),s("div",{staticClass:"language-nginx extra-class"},[s("pre",{pre:!0,attrs:{class:"language-nginx"}},[s("code",[s("span",{pre:!0,attrs:{class:"token directive"}},[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("location")]),t._v(" /path")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token directive"}},[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("waf_under_attack")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("on")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])])]),t._v(" "),s("h2",{attrs:{id:"降低带宽占用"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#降低带宽占用"}},[t._v("#")]),t._v(" 降低带宽占用")]),t._v(" "),s("p",[t._v("详见"),s("RouterLink",{attrs:{to:"/zh-cn/practice/reduce-bandwidth-usage-when-attacked.html"}},[t._v("被攻击时降低带宽占用")]),t._v("。")],1)])}),[],!1,null,null,null);a.default=n.exports}}]);