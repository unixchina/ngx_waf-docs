(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{439:function(e,t,s){"use strict";s.r(t);var a=s(52),r=Object(a.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"enable-modsecurity"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#enable-modsecurity"}},[e._v("#")]),e._v(" Enable ModSecurity "),s("Badge",{attrs:{text:"Latest Current version only",type:"tip"}})],1),e._v(" "),s("p",[e._v("The default rules provided by this project are very easy to bypass and many users have difficulty maintaining a reliable set of rules.")]),e._v(" "),s("p",[e._v("In this case, you can enable "),s("a",{attrs:{href:"https://github.com/SpiderLabs/ModSecurity",target:"_blank",rel:"noopener noreferrer"}},[e._v("ModSecurity"),s("OutboundLink")],1),e._v(" and load the "),s("a",{attrs:{href:"https://owasp.org/www-project-modsecurity-core-rule-set/",target:"_blank",rel:"noopener noreferrer"}},[e._v("OWSAP (Open Web Application Security Project) core rule set"),s("OutboundLink")],1),e._v(" to strengthen the protection.")]),e._v(" "),s("h2",{attrs:{id:"step-1-download-the-rule-set"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#step-1-download-the-rule-set"}},[e._v("#")]),e._v(" Step 1: Download the rule set")]),e._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("cd")]),e._v(" /usr/local/src\n"),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("git")]),e._v(" clone https://github.com/SpiderLabs/ModSecurity.git\n"),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("git")]),e._v(" clone https://github.com/coreruleset/coreruleset.git\n")])])]),s("h2",{attrs:{id:"step-2-copy-the-rules-file"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#step-2-copy-the-rules-file"}},[e._v("#")]),e._v(" Step 2: Copy the rules file")]),e._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[e._v("mkdir")]),e._v(" -p /etc/nginx/rules/modsecurity\n"),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("cp")]),e._v(" coreruleset/crs-setup.conf.example /etc/nginx/rules/modsecurity/crs-setup.conf\n"),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("cp")]),e._v(" ModSecurity/modsecurity.conf-recommended /etc/nginx/rules/modsecurity/modsecurity.conf\n"),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("cp")]),e._v(" ModSecurity/unicode.mapping /etc/nginx/rules/modsecurity/unicode.mapping\n"),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("cp")]),e._v(" -r coreruleset/rules /etc/nginx/rules/modsecurity/owasp\n")])])]),s("h2",{attrs:{id:"step-3-edit-rules"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#step-3-edit-rules"}},[e._v("#")]),e._v(" Step 3: Edit rules")]),e._v(" "),s("ol",[s("li",[e._v("Edit "),s("code",[e._v("/etc/nginx/rules/modsecurity/modsecurity.conf")]),e._v(" and change "),s("code",[e._v("SecRuleEngine DetectionOnly")]),e._v(" to "),s("code",[e._v("SecRuleEngine on")]),e._v(".")]),e._v(" "),s("li",[e._v("Edit "),s("code",[e._v("/etc/nginx/rules/modsecurity/modsecurity.conf")]),e._v(" and append the following at the end of the file."),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("Include /usr/local/src/ngx_waf/assets/rules/crs-setup.conf\nInclude /etc/nginx/rules/modsecurity/owasp/*.conf\n")])])])])]),e._v(" "),s("h2",{attrs:{id:"step-4-load-rules"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#step-4-load-rules"}},[e._v("#")]),e._v(" Step 4: Load Rules")]),e._v(" "),s("p",[e._v("Edit the nginx configuration file.")]),e._v(" "),s("div",{staticClass:"language-nginx extra-class"},[s("pre",{pre:!0,attrs:{class:"language-nginx"}},[s("code",[s("span",{pre:!0,attrs:{class:"token directive"}},[s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("waf_modsecurity")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[e._v("on")]),e._v(" file=/etc/nginx/rules/modsecurity/modsecurity.conf")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n")])])]),s("h2",{attrs:{id:"step-5-optimize-performance"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#step-5-optimize-performance"}},[e._v("#")]),e._v(" Step 5: Optimize performance")]),e._v(" "),s("p",[e._v("Enabling rules causes a significant performance degradation due to the complexity of ModSecurity's rules engine, but this also gives it power.")]),e._v(" "),s("p",[e._v("Generally we do not need to inspect some static files, so we can optimize performance based on this.")]),e._v(" "),s("p",[e._v("Edit the nginx configuration file.")]),e._v(" "),s("div",{staticClass:"language-nginx extra-class"},[s("pre",{pre:!0,attrs:{class:"language-nginx"}},[s("code",[s("span",{pre:!0,attrs:{class:"token directive"}},[s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("location")]),e._v(" ~* \\.(gif|jpg|png|jpeg|webp|bmp|swf)$")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n    "),s("span",{pre:!0,attrs:{class:"token directive"}},[s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("waf_modsecurity")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[e._v("off")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n\n"),s("span",{pre:!0,attrs:{class:"token directive"}},[s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("location")]),e._v(" ~* \\.(html|htm|js|css)$")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n    "),s("span",{pre:!0,attrs:{class:"token directive"}},[s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("waf_modsecurity")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[e._v("off")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n")])])]),s("h2",{attrs:{id:"step-6-restart-nginx"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#step-6-restart-nginx"}},[e._v("#")]),e._v(" Step 6: Restart nginx")]),e._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[e._v("nginx -s stop\nnginx\n")])])]),s("div",{staticClass:"custom-block warning"},[s("p",{staticClass:"custom-block-title"},[e._v("Why not nginx -s reload ?")]),e._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"https://github.com/SpiderLabs/ModSecurity/issues/2552",target:"_blank",rel:"noopener noreferrer"}},[e._v("ngin reload memory leak · Issue #2552 · SpiderLabs/ModSecurity"),s("OutboundLink")],1)]),e._v(" "),s("li",[s("a",{attrs:{href:"https://github.com/SpiderLabs/ModSecurity/issues/2502",target:"_blank",rel:"noopener noreferrer"}},[e._v("It often leads memory leak on nginx reload · Issue #2502 · SpiderLabs/ModSecurity"),s("OutboundLink")],1)])])]),e._v(" "),s("h2",{attrs:{id:"step-7-testing"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#step-7-testing"}},[e._v("#")]),e._v(" Step 7: Testing")]),e._v(" "),s("p",[e._v("At this point you should check your website to make sure that no false positives will cause your website to be abnormal.")]),e._v(" "),s("h2",{attrs:{id:"step-8-handling-false-positives"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#step-8-handling-false-positives"}},[e._v("#")]),e._v(" Step 8: Handling false positives")]),e._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"https://www.netnea.com/cms/apache-tutorial-7_including-modsecurity-core-rules/#step_7_handling_false_positives_disabling_individual_rules",target:"_blank",rel:"noopener noreferrer"}},[e._v("Including OWASP ModSecurity Core Rule Set – Welcome to netnea"),s("OutboundLink")],1)]),e._v(" "),s("li",[s("a",{attrs:{href:"https://www.netnea.com/cms/apache-tutorial-8_handling-false-positives-modsecurity-core-rule-set/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Handling False Positives with the OWASP ModSecurity Core Rule Set – Welcome to netnea"),s("OutboundLink")],1)]),e._v(" "),s("li",[s("a",{attrs:{href:"https://github.com/SpiderLabs/ModSecurity/wiki/Reference-Manual-%28v2.x%29",target:"_blank",rel:"noopener noreferrer"}},[e._v("Reference Manual (v2.x) · SpiderLabs/ModSecurity Wiki"),s("OutboundLink")],1)])])])}),[],!1,null,null,null);t.default=r.exports}}]);