(window.webpackJsonp=window.webpackJsonp||[]).push([[51],{458:function(_,v,a){"use strict";a.r(v);var t=a(52),r=Object(t.a)({},(function(){var _=this,v=_.$createElement,a=_._self._c||v;return a("ContentSlotsDistributor",{attrs:{"slot-key":_.$parent.slotKey}},[a("h1",{attrs:{id:"更新日志-current"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#更新日志-current"}},[_._v("#")]),_._v(" 更新日志（Current）")]),_._v(" "),a("p",[_._v("本文件的格式基于"),a("a",{attrs:{href:"https://keepachangelog.com/zh-CN/1.0.0",target:"_blank",rel:"noopener noreferrer"}},[_._v("如何维护更新日志"),a("OutboundLink")],1),_._v("，\n并且本项目遵守"),a("a",{attrs:{href:"https://semver.org/lang/zh-CN/spec/v2.0.0.html",target:"_blank",rel:"noopener noreferrer"}},[_._v("语义化版本"),a("OutboundLink")],1),_._v("。")]),_._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[_._v("何为「不兼容的修改」？")]),_._v(" "),a("ul",[a("li",[_._v("原有的配置文件可能无法使用，比如删除或者重命名了某个配置项。")]),_._v(" "),a("li",[_._v("可能需要更新编译环境，比如安装新的依赖。")])])]),_._v(" "),a("h2",{attrs:{id:"未发布"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#未发布"}},[_._v("#")]),_._v(" [未发布]")]),_._v(" "),a("h3",{attrs:{id:"新增"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#新增"}},[_._v("#")]),_._v(" 新增")]),_._v(" "),a("h3",{attrs:{id:"移除"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#移除"}},[_._v("#")]),_._v(" 移除")]),_._v(" "),a("h3",{attrs:{id:"变动"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#变动"}},[_._v("#")]),_._v(" 变动")]),_._v(" "),a("h3",{attrs:{id:"修复"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#修复"}},[_._v("#")]),_._v(" 修复")]),_._v(" "),a("hr"),_._v(" "),a("h2",{attrs:{id:"_10-1-1-2022-01-07-utc-0800"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_10-1-1-2022-01-07-utc-0800"}},[_._v("#")]),_._v(" [10.1.1] - 2022-01-07 UTC+0800")]),_._v(" "),a("h3",{attrs:{id:"新增-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#新增-2"}},[_._v("#")]),_._v(" 新增")]),_._v(" "),a("ul",[a("li",[_._v("支持 PCRE2。")])]),_._v(" "),a("h3",{attrs:{id:"修复-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#修复-2"}},[_._v("#")]),_._v(" 修复")]),_._v(" "),a("ul",[a("li",[a("p",[_._v("内存泄漏。")])]),_._v(" "),a("li",[a("p",[_._v("验证码和 Under Attack Mode（五秒盾）有时会无限刷新。")])])]),_._v(" "),a("hr"),_._v(" "),a("h2",{attrs:{id:"_10-1-0-2021-12-14-utc-0800"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_10-1-0-2021-12-14-utc-0800"}},[_._v("#")]),_._v(" [10.1.0] - 2021-12-14 UTC+0800")]),_._v(" "),a("h3",{attrs:{id:"新增-3"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#新增-3"}},[_._v("#")]),_._v(" 新增")]),_._v(" "),a("ul",[a("li",[a("p",[_._v("指令 "),a("code",[_._v("waf")]),_._v(" 可以设置为 "),a("code",[_._v("bypass")]),_._v(" 模式，即仅检测并记录日志，但不会拦截任何请求。")])]),_._v(" "),a("li",[a("p",[_._v("指令 "),a("code",[_._v("waf_verify_bot")]),_._v(" 新增了参数 "),a("code",[_._v("SogouSpider")]),_._v("，用于验证是否为搜狗爬虫。")])])]),_._v(" "),a("h3",{attrs:{id:"修复-3"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#修复-3"}},[_._v("#")]),_._v(" 修复")]),_._v(" "),a("ul",[a("li",[a("p",[_._v("内存回收机制并未正常运行，这虽然不会造成内存泄漏，但会导致内存占用居高不下，并引发性能问题。")])]),_._v(" "),a("li",[a("p",[_._v("友好爬虫验证功能会错误地打印拦截日志。")])])]),_._v(" "),a("hr"),_._v(" "),a("h2",{attrs:{id:"_10-0-1-2021-12-05-utc-0800"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_10-0-1-2021-12-05-utc-0800"}},[_._v("#")]),_._v(" [10.0.1] - 2021-12-05 UTC+0800")]),_._v(" "),a("h3",{attrs:{id:"新增-4"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#新增-4"}},[_._v("#")]),_._v(" 新增")]),_._v(" "),a("ul",[a("li",[_._v("添加了两个彩蛋，你可以在文档中找到相关的线索。这两个彩蛋不会自动触发，所以不会影响正常使用。")])]),_._v(" "),a("h3",{attrs:{id:"修复-4"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#修复-4"}},[_._v("#")]),_._v(" 修复")]),_._v(" "),a("ul",[a("li",[_._v("指令 "),a("code",[_._v("waf_mode")]),_._v(" 中所有与请求方法对应的参数均失效。")])]),_._v(" "),a("hr"),_._v(" "),a("h2",{attrs:{id:"_10-0-0-2021-11-30-utc-0800"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_10-0-0-2021-11-30-utc-0800"}},[_._v("#")]),_._v(" [10.0.0] - 2021-11-30 UTC+0800")]),_._v(" "),a("h3",{attrs:{id:"新增-5"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#新增-5"}},[_._v("#")]),_._v(" 新增")]),_._v(" "),a("ul",[a("li",[a("p",[_._v("新指令 "),a("code",[_._v("waf_zone")]),_._v("，用来声明一块共享内存，这块内存将被用于其他的指令，比如 "),a("code",[_._v("waf_cc_deny")]),_._v("。")])]),_._v(" "),a("li",[a("p",[_._v("新指令 "),a("code",[_._v("waf_action")]),_._v("，用于设置拦截请求后的动作，比如返回特定的状态码或者使用验证码对客户端做人机认证。")])]),_._v(" "),a("li",[a("p",[_._v("新指令 "),a("code",[_._v("waf_block_page")]),_._v("，用于设置拦截页面，当请求被拦截后将指定的 HTML 文件返回。")])]),_._v(" "),a("li",[a("p",[_._v("新内置变量 "),a("code",[_._v("$waf_rate")]),_._v("，用来表示一个统计周期内当前 IP 的访问次数。统计周期由指令 "),a("code",[_._v("waf_cc_deny")]),_._v(" 的参数 "),a("code",[_._v("rate")]),_._v(" 决定，如果 IP 已经被拉黑，则由参数 "),a("code",[_._v("duration")]),_._v(" 决定。")])]),_._v(" "),a("li",[a("p",[_._v("指令 "),a("code",[_._v("waf_captcha")]),_._v(" 增加了一个参数 "),a("code",[_._v("max_fails")]),_._v("，用来设置验证码最大试错次数和超出后的拉黑时间。")])]),_._v(" "),a("li",[a("p",[_._v("指令 "),a("code",[_._v("waf_captcha")]),_._v(" 增加了一个参数 "),a("code",[_._v("zone")]),_._v("，用来指定一块共享内存，当且仅当设置了参数 "),a("code",[_._v("max_fails")]),_._v(" 时才需要设置。")])]),_._v(" "),a("li",[a("p",[_._v("指令 "),a("code",[_._v("waf_captcha")]),_._v(" 增加了一个参数 "),a("code",[_._v("sitekey")]),_._v("，当且仅当省略了参数 "),a("code",[_._v("file")]),_._v(" 时才需要设置。")])]),_._v(" "),a("li",[a("p",[_._v("当你重载 nginx 时，模块会尽可能地保留共享内存中的信息，使其不被清空，比如 CC 防护的拉黑列表。")])])]),_._v(" "),a("h3",{attrs:{id:"移除-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#移除-2"}},[_._v("#")]),_._v(" 移除")]),_._v(" "),a("ul",[a("li",[a("p",[_._v("移除了指令 "),a("code",[_._v("waf_http_status")]),_._v("，相关的功能合并到指令 "),a("code",[_._v("waf_action")]),_._v("。")])]),_._v(" "),a("li",[a("p",[_._v("移除了指令 "),a("code",[_._v("waf_cc_deny")]),_._v(" 的参数 "),a("code",[_._v("size")]),_._v("，现在使用 "),a("code",[_._v("zone")]),_._v(" 代替。")])])]),_._v(" "),a("h3",{attrs:{id:"变动-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#变动-2"}},[_._v("#")]),_._v(" 变动")]),_._v(" "),a("ul",[a("li",[a("p",[_._v("允许省略指令 "),a("code",[_._v("waf_under_attack")]),_._v(" 的参数 "),a("code",[_._v("file")]),_._v("，省略此参数时将使用一个内置的文件，它来自 "),a("code",[_._v("assets/under_attack.html")]),_._v("。")])]),_._v(" "),a("li",[a("p",[_._v("允许省略指令 "),a("code",[_._v("waf_captcha")]),_._v(" 的参数 "),a("code",[_._v("file")]),_._v("，省略此参数时将根据参数 "),a("code",[_._v("prov")]),_._v(" 的值使用一个内置的文件，这些文件来自目录 "),a("code",[_._v("assets/")]),_._v("。")])]),_._v(" "),a("li",[a("p",[_._v("更多的调试日志。")])])]),_._v(" "),a("hr"),_._v(" "),a("h2",{attrs:{id:"_9-0-6-2021-10-10-utc-0800"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_9-0-6-2021-10-10-utc-0800"}},[_._v("#")]),_._v(" [9.0.6] - 2021-10-10 UTC+0800")]),_._v(" "),a("h3",{attrs:{id:"修复-5"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#修复-5"}},[_._v("#")]),_._v(" 修复")]),_._v(" "),a("ul",[a("li",[_._v("当指令 "),a("code",[_._v("try_files")]),_._v(" 生效时无法完成 CAPTCHA 的验证。")])]),_._v(" "),a("hr"),_._v(" "),a("h2",{attrs:{id:"_9-0-5-2021-10-09-utc-0800"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_9-0-5-2021-10-09-utc-0800"}},[_._v("#")]),_._v(" [9.0.5] - 2021-10-09 UTC+0800")]),_._v(" "),a("h3",{attrs:{id:"新的测试套件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#新的测试套件"}},[_._v("#")]),_._v(" 新的测试套件")]),_._v(" "),a("p",[_._v("偶然间看到了一个测试套件："),a("a",{attrs:{href:"https://github.com/openresty/test-nginx",target:"_blank",rel:"noopener noreferrer"}},[_._v("test-nginx"),a("OutboundLink")],1),_._v("。\n看完之后感觉很好便拿来测试，编了不少测试用例，果不其然发现了一大堆 Bug，不愧是我。")]),_._v(" "),a("h3",{attrs:{id:"变动-3"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#变动-3"}},[_._v("#")]),_._v(" 变动")]),_._v(" "),a("ul",[a("li",[a("p",[_._v("删除了无用的调试日志。")])]),_._v(" "),a("li",[a("p",[_._v("更多的调试日志。")])])]),_._v(" "),a("h3",{attrs:{id:"修复-6"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#修复-6"}},[_._v("#")]),_._v(" 修复")]),_._v(" "),a("ul",[a("li",[a("p",[_._v("有时连接会被过早地关闭。")])]),_._v(" "),a("li",[a("p",[_._v("启用 CAPTCHA 后请求体的检测结果可能会出错。")])]),_._v(" "),a("li",[a("p",[_._v("CAPTCHA 可能会因为 HTTP 缓存而失败。")])]),_._v(" "),a("li",[a("p",[_._v("重载 nginx 时存在内存泄露。")])]),_._v(" "),a("li",[a("p",[_._v("未能正确合并上层配置块的 "),a("code",[_._v("waf_cache")]),_._v(" 指令。")])]),_._v(" "),a("li",[a("p",[_._v("未能正确合并上层配置块的 "),a("code",[_._v("waf_cc_deny")]),_._v(" 指令。")])]),_._v(" "),a("li",[a("p",[_._v("未能正确继承上层配置块的 Referer 黑名单。")])]),_._v(" "),a("li",[a("p",[_._v("未能正确识别一些错误的配置。")])]),_._v(" "),a("li",[a("p",[_._v("修复了一条默认的 URL 黑名单规则。")])]),_._v(" "),a("li",[a("p",[_._v("修复了下列文件，使得验证码完成后可以自动刷新网页。")]),_._v(" "),a("ul",[a("li",[a("code",[_._v("assets/hCaptcha.html")])]),_._v(" "),a("li",[a("code",[_._v("assets/reCAPTCHAv2_Checkbox.html")])]),_._v(" "),a("li",[a("code",[_._v("assets/reCAPTCHAv2_Invisible.html")])]),_._v(" "),a("li",[a("code",[_._v("assets/reCAPTCHAv3.html")])])])])]),_._v(" "),a("hr"),_._v(" "),a("h2",{attrs:{id:"_9-0-4-2021-09-29-utc-0800"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_9-0-4-2021-09-29-utc-0800"}},[_._v("#")]),_._v(" [9.0.4] - 2021-09-29 UTC+0800")]),_._v(" "),a("h3",{attrs:{id:"修复-7"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#修复-7"}},[_._v("#")]),_._v(" 修复")]),_._v(" "),a("ul",[a("li",[_._v("当指令 "),a("code",[_._v("rewrite")]),_._v(" 造成内部重定向时会错误地跳过所有检测。")])]),_._v(" "),a("hr"),_._v(" "),a("h2",{attrs:{id:"_9-0-3-2021-09-28-utc-0800"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_9-0-3-2021-09-28-utc-0800"}},[_._v("#")]),_._v(" [9.0.3] - 2021-09-28 UTC+0800")]),_._v(" "),a("h3",{attrs:{id:"变动-4"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#变动-4"}},[_._v("#")]),_._v(" 变动")]),_._v(" "),a("ul",[a("li",[_._v("更多的调试日志。")])]),_._v(" "),a("h3",{attrs:{id:"修复-8"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#修复-8"}},[_._v("#")]),_._v(" 修复")]),_._v(" "),a("ul",[a("li",[_._v("验证码页面不能正常显示。")])]),_._v(" "),a("hr"),_._v(" "),a("h2",{attrs:{id:"_9-0-2-2021-09-25-utc-0800"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_9-0-2-2021-09-25-utc-0800"}},[_._v("#")]),_._v(" [9.0.2] - 2021-09-25 UTC+0800")]),_._v(" "),a("h3",{attrs:{id:"修复-9"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#修复-9"}},[_._v("#")]),_._v(" 修复")]),_._v(" "),a("ul",[a("li",[_._v("内置变量 "),a("code",[_._v("$waf_blocking_log")]),_._v(" 的值有时会出错。")])]),_._v(" "),a("hr"),_._v(" "),a("h2",{attrs:{id:"_9-0-1-2021-09-24-utc-0800"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_9-0-1-2021-09-24-utc-0800"}},[_._v("#")]),_._v(" [9.0.1] - 2021-09-24 UTC+0800")]),_._v(" "),a("h3",{attrs:{id:"修复-10"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#修复-10"}},[_._v("#")]),_._v(" 修复")]),_._v(" "),a("ul",[a("li",[_._v("未能正确读取 ModSecurity 的规则。")])]),_._v(" "),a("hr"),_._v(" "),a("h2",{attrs:{id:"_9-0-0-2021-09-23-utc-0800"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_9-0-0-2021-09-23-utc-0800"}},[_._v("#")]),_._v(" [9.0.0] - 2021-09-23 UTC+0800")]),_._v(" "),a("h3",{attrs:{id:"注意"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#注意"}},[_._v("#")]),_._v(" "),a("strong",[_._v("注意")])]),_._v(" "),a("p",[_._v("如果您想要升级到此版本，请查看文档中的跨版本升级的指南。")]),_._v(" "),a("h3",{attrs:{id:"新增-6"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#新增-6"}},[_._v("#")]),_._v(" 新增")]),_._v(" "),a("ul",[a("li",[a("p",[_._v("兼容了"),a("a",{attrs:{href:"https://github.com/SpiderLabs/ModSecurity",target:"_blank",rel:"noopener noreferrer"}},[_._v("ModSecurity"),a("OutboundLink")],1),_._v(" 的规则。")])]),_._v(" "),a("li",[a("p",[_._v("增加了两个指令："),a("code",[_._v("waf_modsecurity")]),_._v(" 和 "),a("code",[_._v("waf_modsecurity_transaction_id")]),_._v("。")])]),_._v(" "),a("li",[a("p",[_._v("为指令 "),a("code",[_._v("waf_priority")]),_._v(" 增加了参数 "),a("code",[_._v("MODSECURITY")]),_._v("。")])])]),_._v(" "),a("h3",{attrs:{id:"移除-3"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#移除-3"}},[_._v("#")]),_._v(" 移除")]),_._v(" "),a("ul",[a("li",[a("p",[_._v("删除了指令 "),a("code",[_._v("waf_mode")]),_._v(" 的一些参数："),a("code",[_._v("LIBINJECTION")]),_._v("、"),a("code",[_._v("LIBINJECTION-SQLI")]),_._v("、"),a("code",[_._v("LIBINJECTION-XSS")]),_._v(" 和 "),a("code",[_._v("ADV")]),_._v("。")])]),_._v(" "),a("li",[a("p",[_._v("删除了指令 "),a("code",[_._v("waf_priority")]),_._v(" 的参数 "),a("code",[_._v("ADV")]),_._v("。")])]),_._v(" "),a("li",[a("p",[_._v("删除了依赖 "),a("a",{attrs:{href:"https://github.com/libinjection/libinjection",target:"_blank",rel:"noopener noreferrer"}},[_._v("libinjection"),a("OutboundLink")],1),_._v("。")])])]),_._v(" "),a("h3",{attrs:{id:"修复-11"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#修复-11"}},[_._v("#")]),_._v(" 修复")]),_._v(" "),a("ul",[a("li",[a("p",[_._v("当验证码通过时不再返回 404 状态码，而是返回 204 状态码。")])]),_._v(" "),a("li",[a("p",[_._v("有时不会完整地检查请求体。")])])]),_._v(" "),a("hr"),_._v(" "),a("h2",{attrs:{id:"_8-0-3-2021-08-27-utc-0800"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_8-0-3-2021-08-27-utc-0800"}},[_._v("#")]),_._v(" [8.0.3] - 2021-08-27 UTC+0800")]),_._v(" "),a("h3",{attrs:{id:"修复-12"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#修复-12"}},[_._v("#")]),_._v(" 修复")]),_._v(" "),a("ul",[a("li",[a("p",[_._v("内存泄露")])]),_._v(" "),a("li",[a("p",[_._v("一个没有初始化的结构体字段，会导致错误日志中出现大量的 "),a("code",[_._v("malloc(size) failed (12: Out of memory)")]),_._v("。")])])]),_._v(" "),a("hr"),_._v(" "),a("h2",{attrs:{id:"_8-0-2-2021-08-27-utc-0800"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_8-0-2-2021-08-27-utc-0800"}},[_._v("#")]),_._v(" [8.0.2] - 2021-08-27 UTC+0800")]),_._v(" "),a("h3",{attrs:{id:"修复-13"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#修复-13"}},[_._v("#")]),_._v(" 修复")]),_._v(" "),a("ul",[a("li",[a("p",[_._v("开启验证码后 nginx 崩溃（段错误），原因是未能正确合并不同级别的 "),a("code",[_._v("waf_captcha")]),_._v(" 指令。")])]),_._v(" "),a("li",[a("p",[_._v("不能显示验证码页面，原因是未能正确合并不同级别的 "),a("code",[_._v("waf_captcha")]),_._v(" 指令。")])]),_._v(" "),a("li",[a("p",[_._v("如果使用了 "),a("code",[_._v("proxy_pass")]),_._v(" 指令，Under-Attack-Mode 和验证码均不能正常工作。")])])]),_._v(" "),a("hr"),_._v(" "),a("h2",{attrs:{id:"_8-0-1-2021-08-23-utc-0800"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_8-0-1-2021-08-23-utc-0800"}},[_._v("#")]),_._v(" [8.0.1] - 2021-08-23 UTC+0800")]),_._v(" "),a("h3",{attrs:{id:"新增-7"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#新增-7"}},[_._v("#")]),_._v(" 新增")]),_._v(" "),a("ul",[a("li",[_._v("当 CC 防护返回 444 状态码时不再生成额外的响应头。")])]),_._v(" "),a("h3",{attrs:{id:"修复-14"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#修复-14"}},[_._v("#")]),_._v(" 修复")]),_._v(" "),a("ul",[a("li",[a("p",[_._v("当 "),a("code",[_._v("User-Agent")]),_._v(" 为空时会引发段错误。")])]),_._v(" "),a("li",[a("p",[_._v("不能正确合并指令 "),a("code",[_._v("waf_http_status")]),_._v("。")])])]),_._v(" "),a("hr"),_._v(" "),a("h2",{attrs:{id:"_8-0-0-2021-08-21-utc-0800"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_8-0-0-2021-08-21-utc-0800"}},[_._v("#")]),_._v(" [8.0.0] - 2021-08-21 UTC+0800")]),_._v(" "),a("h3",{attrs:{id:"注意-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#注意-2"}},[_._v("#")]),_._v(" "),a("strong",[_._v("注意")])]),_._v(" "),a("p",[_._v("如果您想要升级到此版本，请查看文档中的跨版本升级的指南。")]),_._v(" "),a("h3",{attrs:{id:"新增-8"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#新增-8"}},[_._v("#")]),_._v(" 新增")]),_._v(" "),a("ul",[a("li",[a("p",[_._v("引入了第三方平台的验证码，支持 hCaptcha、reCAPTCHAv2 和 reCAPTCHAv3，相关的指令为 "),a("code",[_._v("waf_captcha")]),_._v("。")])]),_._v(" "),a("li",[a("p",[_._v("支持识别友好爬虫，包括 GooleBot、BingBot、BaiduSpider 和 YandexBot，识别成功后自动放行，相关的指令为 "),a("code",[_._v("waf_verify_bot")]),_._v("。")])]),_._v(" "),a("li",[a("p",[_._v("CC 防护支持开启验证码模式，开启后当请求频率超出限制后会启用验证码，如果连续三次验证失败则拉黑 IP，反之则重新统计请求频率。")])])]),_._v(" "),a("h3",{attrs:{id:"变动-5"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#变动-5"}},[_._v("#")]),_._v(" 变动")]),_._v(" "),a("ul",[a("li",[a("p",[_._v("指令 "),a("code",[_._v("waf_mode")]),_._v(" 的语法有所变化，详见文档中的跨版本升级的指南。")])]),_._v(" "),a("li",[a("p",[_._v("指令 "),a("code",[_._v("waf_cc_deny")]),_._v(" 的语法有所变化，详见文档中的跨版本升级的指南。")])]),_._v(" "),a("li",[a("p",[_._v("指令 "),a("code",[_._v("waf_cache")]),_._v(" 的语法有所变化，详见文档中的跨版本升级的指南。")])]),_._v(" "),a("li",[a("p",[_._v("支持修改「请求体检查」的优先级。")])])]),_._v(" "),a("h3",{attrs:{id:"移除-4"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#移除-4"}},[_._v("#")]),_._v(" 移除")]),_._v(" "),a("ul",[a("li",[_._v("移除了指令 "),a("code",[_._v("waf_cache")]),_._v(" 的两个参数，分别是 "),a("code",[_._v("interval")]),_._v(" 和 "),a("code",[_._v("percent")]),_._v("。")])]),_._v(" "),a("hr"),_._v(" "),a("h2",{attrs:{id:"_7-1-0-2021-08-16-utc-0800"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_7-1-0-2021-08-16-utc-0800"}},[_._v("#")]),_._v(" [7.1.0] - 2021-08-16 UTC+0800")]),_._v(" "),a("h3",{attrs:{id:"新增-9"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#新增-9"}},[_._v("#")]),_._v(" 新增")]),_._v(" "),a("ul",[a("li",[_._v("配置项 "),a("code",[_._v("waf_cc_deny")]),_._v(" 的参数 "),a("code",[_._v("rate")]),_._v(" 允许更多个格式，如 "),a("code",[_._v("500r/s")]),_._v("、"),a("code",[_._v("500r/60s")]),_._v("、"),a("code",[_._v("500r/m")]),_._v("、"),a("code",[_._v("500r/60m")]),_._v("、"),a("code",[_._v("500r/h")]),_._v("、"),a("code",[_._v("500r/60h")]),_._v(" 和 "),a("code",[_._v("500r/d")]),_._v("。")])]),_._v(" "),a("hr"),_._v(" "),a("h2",{attrs:{id:"_7-0-1-2021-08-11-utc-0800"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_7-0-1-2021-08-11-utc-0800"}},[_._v("#")]),_._v(" [7.0.1] - 2021-08-11 UTC+0800")]),_._v(" "),a("h3",{attrs:{id:"修复-15"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#修复-15"}},[_._v("#")]),_._v(" 修复")]),_._v(" "),a("ul",[a("li",[a("p",[_._v("不能正确解析 IP 黑白名单中的 "),a("code",[_._v("0.0.0.0/0")]),_._v("。")])]),_._v(" "),a("li",[a("p",[_._v("兼容不支持 IPV6 的运行环境。")])])]),_._v(" "),a("hr"),_._v(" "),a("h2",{attrs:{id:"_7-0-0-2021-08-04-utc-0800"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_7-0-0-2021-08-04-utc-0800"}},[_._v("#")]),_._v(" [7.0.0] - 2021-08-04 UTC+0800")]),_._v(" "),a("h3",{attrs:{id:"变动-6"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#变动-6"}},[_._v("#")]),_._v(" 变动")]),_._v(" "),a("ul",[a("li",[a("p",[_._v("改变了 Under Attack Mode 的实现方式。不再使用重定向实现，而是通过修改响应体实现。")])]),_._v(" "),a("li",[a("p",[_._v("删除了配置项 "),a("code",[_._v("waf_under_attack")]),_._v(" 的参数 "),a("code",[_._v("uri")]),_._v("，详情见文档。")])]),_._v(" "),a("li",[a("p",[_._v("为配置项 "),a("code",[_._v("waf_under_attack")]),_._v(" 增加了一个参数 "),a("code",[_._v("file")]),_._v("，该参数的值应该是一个 HTML 文件的绝对路径，详情见文档。")])]),_._v(" "),a("li",[a("p",[_._v("不允许在 "),a("code",[_._v("http")]),_._v(" 这一级中使用配置项 "),a("code",[_._v("waf_cc_deny")]),_._v("。")])])])])}),[],!1,null,null,null);v.default=r.exports}}]);