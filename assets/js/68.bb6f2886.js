(window.webpackJsonp=window.webpackJsonp||[]).push([[68],{140:function(t,a,e){"use strict";e.r(a);var r=e(0),s=Object(r.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h2",{attrs:{id:"驾考测试题小程序"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#驾考测试题小程序","aria-hidden":"true"}},[t._v("#")]),t._v(" 驾考测试题小程序")]),t._v(" "),e("h4",{attrs:{id:"开发目的"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#开发目的","aria-hidden":"true"}},[t._v("#")]),t._v(" 开发目的")]),t._v(" "),e("p",[t._v("最近要考科目三了，所以很快就要考科目四。所以就在想自己写一款测试题小程序来玩玩顺便发挥一下自己的想法，再熟悉一下小程序～所以想开发出来感觉还是蛮实用的")]),t._v(" "),e("h4",{attrs:{id:"功能介绍"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#功能介绍","aria-hidden":"true"}},[t._v("#")]),t._v(" 功能介绍")]),t._v(" "),e("p",[t._v("主要功能：答题、存储错题、用户登陆")]),t._v(" "),e("p",[t._v("次要功能：车型大全")]),t._v(" "),e("p",[t._v("用户通过欢迎页面进行登陆通过向微信小程序后端服务器发起请求得到open_id进行存储在后台生成一个用户Id")]),t._v(" "),e("p",[t._v("并且返回到小程序中")]),t._v(" "),e("h4",{attrs:{id:"参考资料"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#参考资料","aria-hidden":"true"}},[t._v("#")]),t._v(" 参考资料")]),t._v(" "),e("p",[t._v("驾考宝典小程序，汽车之家小程序")]),t._v(" "),e("h4",{attrs:{id:"🔧技术栈"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#🔧技术栈","aria-hidden":"true"}},[t._v("#")]),t._v(" 🔧技术栈")]),t._v(" "),e("p",[t._v("后端：node,express,vue,element")]),t._v(" "),e("p",[t._v("前端：小程序，iviewUI组件库")]),t._v(" "),e("h4",{attrs:{id:"📝项目规划"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#📝项目规划","aria-hidden":"true"}},[t._v("#")]),t._v(" 📝项目规划")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("页面设计/交互构思")]),t._v(" "),e("th",[t._v("后端编码")]),t._v(" "),e("th",[t._v("前端")]),t._v(" "),e("th",[t._v("调试")]),t._v(" "),e("th",[t._v("总计/最大限度")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("24h")]),t._v(" "),e("td",[t._v("48h")]),t._v(" "),e("td",[t._v("72h")]),t._v(" "),e("td",[t._v("24h")]),t._v(" "),e("td",[t._v("一周/二周")])])])]),t._v(" "),e("h4",{attrs:{id:"💻前端页面构思"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#💻前端页面构思","aria-hidden":"true"}},[t._v("#")]),t._v(" 💻前端页面构思")]),t._v(" "),e("p",[t._v("欢迎页用户登陆\t/\twelcome\t/\t点击用户授权登陆")]),t._v(" "),e("p",[t._v("用户信息页\t/\tuserInfo\t/\t放置用户个人信息以及错题")]),t._v(" "),e("p",[t._v("答题导向页\t/\tguiding\t/\t选择考试科目以及车型点击开始考试进行考试")]),t._v(" "),e("p",[t._v("答题详情页\t/ answerDetail\t/\t指定考试时间、考试结束后统计成绩并且收藏错题")]),t._v(" "),e("p",[t._v("错题集\t/\teTopic\t/\t展示错题")]),t._v(" "),e("p",[t._v("错题重做\t/\teTopiceAgain\t/\t把错题在做一遍答对删除")]),t._v(" "),e("p",[t._v("车型列表\t/\tcarList\t/\t通讯录结构展示")]),t._v(" "),e("p",[t._v("车型品牌详情列表\t/\tcarChildList\t/\t通讯录结构展示")]),t._v(" "),e("p",[t._v("车型详情\t/\tcarDetail\t/\t类似购物详情页")]),t._v(" "),e("p",[t._v("暂定～")]),t._v(" "),e("h4",{attrs:{id:"🐒后端构思"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#🐒后端构思","aria-hidden":"true"}},[t._v("#")]),t._v(" 🐒后端构思")]),t._v(" "),e("p",[t._v("保存用户答题的信息但是对查看车型等不做存储～")]),t._v(" "),e("p",[t._v("保存用户登陆信息\t/\t存储用户错题信息\t/\t用户错题重测答对删除用户错题信息")]),t._v(" "),e("p",[t._v("登陆页\tloginPage.vue")]),t._v(" "),e("p",[t._v("用户页\tuserPage.vue")]),t._v(" "),e("p",[t._v("错题储存页\teTopicPage.vue")]),t._v(" "),e("h4",{attrs:{id:"📚数据库"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#📚数据库","aria-hidden":"true"}},[t._v("#")]),t._v(" 📚数据库")]),t._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("用户_user\t/\tid\t/\topen_id\t/\tcreated_time\n错题_etopic\t/\tid\t/\ttitle\t/\tselect\t/\tanswer\t/\tuser_id\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br")])]),e("h4",{attrs:{id:"api-阿里云市场免费申请"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#api-阿里云市场免费申请","aria-hidden":"true"}},[t._v("#")]),t._v(" API/阿里云市场免费申请")]),t._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("router.post('/wxlogin')\nrouter.post('/etopic')\nrouter.get('/etopic')\nrouter.put('/etopic')\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br"),e("span",{staticClass:"line-number"},[t._v("4")]),e("br")])]),e("p",[t._v("驾考测试题API "),e("a",{attrs:{href:"https://market.aliyun.com/products/57126001/cmapi014193.html?spm=5176.2020520132.101.2.42c87218691SMS#sku=yuncode819300000",target:"_blank",rel:"noopener noreferrer"}},[t._v("点击查看"),e("OutboundLink")],1)]),t._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("AppKey：203737860     AppSecret：nyo1gtemprht5dtixptkclp5jx66bvbb \n\nAppCode：982c2dffc21b4b04a04aa6e88616848c\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br")])]),e("p",[t._v("车型大全API "),e("a",{attrs:{href:"https://market.aliyun.com/products/57002002/cmapi011811.html?spm=5176.2020520132.101.1.42c87218KqoYem#sku=yuncode581100000",target:"_blank",rel:"noopener noreferrer"}},[t._v("点击查看"),e("OutboundLink")],1)]),t._v(" "),e("h4",{attrs:{id:"使用方法"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#使用方法","aria-hidden":"true"}},[t._v("#")]),t._v(" 使用方法")]),t._v(" "),e("ol",[e("li",[t._v("请求Header中添加的Authorization字段；")]),t._v(" "),e("li",[t._v("配置Authorization字段的值为“APPCODE ＋ 半角空格 ＋APPCODE值”。")])]),t._v(" "),e("h5",{attrs:{id:"示例："}},[e("a",{staticClass:"header-anchor",attrs:{href:"#示例：","aria-hidden":"true"}},[t._v("#")]),t._v(" 示例：")]),t._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("Authorization:APPCODE 3F2504E04F8911D39A0C0305E82C3301\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br")])]),e("h4",{attrs:{id:""}},[e("a",{staticClass:"header-anchor",attrs:{href:"#","aria-hidden":"true"}},[t._v("#")])])])}),[],!1,null,null,null);a.default=s.exports}}]);