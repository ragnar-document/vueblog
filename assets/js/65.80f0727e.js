(window.webpackJsonp=window.webpackJsonp||[]).push([[65],{201:function(s,n,a){"use strict";a.r(n);var t=a(0),e=Object(t.a)({},(function(){var s=this,n=s.$createElement,a=s._self._c||n;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"使用vuepress搭建简易文档📖"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用vuepress搭建简易文档📖","aria-hidden":"true"}},[s._v("#")]),s._v(" 使用vuepress搭建简易文档📖")]),s._v(" "),a("p",[s._v("对于这个静态网站生成工具官方文档是真的看的令人抓🐔特别是语言逻辑上看的是十分痛苦，我是先看别人搭建过程然后再回头看官方文档的😂这样比较好理解，先人踩坑后人享福")]),s._v(" "),a("p",[s._v("vuepress"),a("a",{attrs:{href:"https://v1.vuepress.vuejs.org/",target:"_blank",rel:"noopener noreferrer"}},[s._v("官网"),a("OutboundLink")],1)]),s._v(" "),a("p",[s._v("awesome "),a("a",{attrs:{href:"https://github.com/ulivz/awesome-vuepress",target:"_blank",rel:"noopener noreferrer"}},[s._v("更多资源"),a("OutboundLink")],1),s._v(" 🎁")]),s._v(" "),a("p",[s._v("这是我搭建好的文档 "),a("a",{attrs:{href:"https://ragnar-document.github.io/vue-blog/",target:"_blank",rel:"noopener noreferrer"}},[s._v("follow me"),a("OutboundLink")],1)]),s._v(" "),a("p",[s._v("GitHub地址："),a("a",{attrs:{href:"https://github.com/ragnar-document/vue-blog",target:"_blank",rel:"noopener noreferrer"}},[s._v("👏👏欢迎提交issue"),a("OutboundLink")],1)]),s._v(" "),a("h3",{attrs:{id:"像数-1-2-3-一样容易！屁一堆坑好吧🙄️"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#像数-1-2-3-一样容易！屁一堆坑好吧🙄️","aria-hidden":"true"}},[s._v("#")]),s._v(" 像数 1, 2, 3 一样容易！屁一堆坑好吧🙄️")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("⚠️ 注意先在Desktop中mkdir一个项目如何cd进去才开始👇\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 安装")]),s._v("\n❌ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("yarn")]),s._v(" global "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" vuepress "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 或者：npm install -g vuepress")]),s._v("\n✌️ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("yarn")]),s._v(" global "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" vuepress@next "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 或者：npm install -g vuepress@next")]),s._v("\n\n//第一个坑来了\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 新建一个 docs 文件夹")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("mkdir")]),s._v(" docs\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 新建一个 markdown 文件")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'# Hello VuePress!'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" docs/README.md\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 开始写作")]),s._v("\nnpx vuepress dev docs\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br")])]),a("p",[s._v("⚠️注意")]),s._v(" "),a("p",[s._v("请确保你的 Node.js 版本 >= 8.6。")]),s._v(" "),a("div",{staticClass:"language-json line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[s._v("🔩在根目录文件配置你的package.json文件\n\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"scripts"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"docs:dev"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"vuepress dev docs"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"docs:build"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"vuepress build docs"')]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br")])]),a("p",[s._v("配置成功运行👇 ✅")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("yarn")]),s._v(" docs:dev "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 或者：npm run docs:dev")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("配置目录结构")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v(".\n├── docs\n│   ├── .vuepress (可选的) 用于存放全局的配置、组件、静态资源等。\n│   │   ├── components (可选的) 该目录中的 Vue 组件将会被自动注册为全局组件。\n│   │   ├── theme (可选的) 用于存放本地主题。\n│   │   │   └── Layout.vue\n│   │   ├── public (可选的) 静态资源目录。\n│   │   ├── styles (可选的) 用于存放样式相关的文件。\n│   │   │   ├── index.styl\n│   │   │   └── palette.styl\n│   │   ├── templates (可选的, 谨慎配置) 存储 HTML 模板文件。\n│   │   │   ├── dev.html /用于开发环境的 HTML 模板文件。\n│   │   │   └── ssr.html /构建时基于 Vue SSR 的 HTML 模板文件。\n│   │   ├── config.js (可选的)  配置文件的入口文件，也可以是 YML 或 toml。\n│   │   └── enhanceApp.js (可选的) 客户端应用的增强。\n│   │ \n│   ├── README.md\n│   ├── guide\n│   │   └── README.md\n│   └── config.md\n│ \n└── package.json\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br")])]),a("h3",{attrs:{id:"接下来我们开始填坑吧😂"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#接下来我们开始填坑吧😂","aria-hidden":"true"}},[s._v("#")]),s._v(" 接下来我们开始填坑吧😂")]),s._v(" "),a("p",[s._v("😡建议：vuepress能不能把结构生成📦 啊❕老天 简直步步惊心")]),s._v(" "),a("p",[s._v("NO.1\t"),a("code",[s._v("cd docs && mkdir .vuepress")])]),s._v(" "),a("p",[s._v("NO.2\t "),a("code",[s._v("cd .vuepress thouch config.js")])]),s._v(" "),a("p",[s._v("在config.js🀄️配置一下下面的代码好吧")]),s._v(" "),a("p",[s._v("提前一起布置好吧：：如果你打算发布到 "),a("code",[s._v("https://<USERNAME>.github.io/<REPO>/")]),s._v("（也就是说你的仓库在 "),a("code",[s._v("https://github.com/<USERNAME>/<REPO>")]),s._v("），则将 "),a("code",[s._v("base")]),s._v(" 设置为 "),a("code",[s._v('"/<REPO>/"')]),s._v("。")]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[s._v("module"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("exports "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  title"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'Hello VuePress'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  description"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'Just playing around'")]),s._v("\n  base"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token template-string"}},[a("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[s._v("`")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("/vue-blog/")]),a("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[s._v("`")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//配置你要放的仓库的路径或子路径文件名")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("p",[s._v("运行起 dev server查看效果")]),s._v(" "),a("h3",{attrs:{id:"我们先把它部署到github-pages先然后在细化它👌"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#我们先把它部署到github-pages先然后在细化它👌","aria-hidden":"true"}},[s._v("#")]),s._v(" 我们先把它部署到GitHub Pages先然后在细化它👌")]),s._v(" "),a("p",[s._v("查看一下根目录的package.json🈶️🌲🈶️下面的这段代码")]),s._v(" "),a("div",{staticClass:"language-json line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"scripts"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"docs:dev"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"vuepress dev docs"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"docs:build"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"vuepress build docs"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"d"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"bash deploy.sh"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//顺便把这个也配置了吧 这个是部署 npm run d")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br")])]),a("p",[s._v("🈶️的话下一步了哦")]),s._v(" "),a("p",[s._v("在根目录下生成"),a("code",[s._v("thouch deploy.sh")])]),s._v(" "),a("ol",[a("li",[s._v("在你的项目中，创建一个如下的 "),a("code",[s._v("deploy.sh")]),s._v(" 文件（请自行判断去掉高亮行的注释）:")])]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token shebang important"}},[s._v("#!/usr/bin/env sh")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 确保脚本抛出遇到的错误")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("set")]),s._v(" -e\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 生成静态文件")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" run docs:build\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 进入生成的文件夹")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" docs/.vuepress/dist\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 如果是发布到自定义域名")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# echo 'www.example.com' > CNAME")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" init\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" -A\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" commit -m "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'deploy'")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 如果发布到 https://<USERNAME>.github.io")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git master")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 如果发布到 https://<USERNAME>.github.io/<REPO>")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# git push -f git@github.com:<USERNAME>/<REPO>.git master:gh-pages")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" -\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br")])]),a("p",[s._v("—与官网一致")]),s._v(" "),a("ol",[a("li",[s._v("在你项目的根目录下创建一个名为 "),a("code",[s._v(".gitlab-ci.yml")]),s._v(" 的文件，无论何时你提交了更改，它都会帮助你自动构建和部署：")])]),s._v(" "),a("div",{staticClass:"language-yaml line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("image")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" node"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("9.11.1\n\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("pages")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("cache")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n   "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("paths")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n   "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" node_modules/\n\n "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("script")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" npm install\n "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" npm run docs"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("build\n "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("artifacts")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n   "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("paths")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n   "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" public\n "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("only")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" master\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br")])]),a("p",[s._v("基本上按照以上步骤走的话是没问题的如果🈶️疏漏欢迎👏给我提issue以免误导他人")]),s._v(" "),a("p",[s._v("—原创---")]),s._v(" "),a("p",[s._v("阿龙的vuepress文档")]),s._v(" "),a("p",[a("a",{attrs:{href:"https://github.com/ragnar-document/vue-blog/issues",target:"_blank",rel:"noopener noreferrer"}},[s._v("⚠️\t提意见\t⚠️"),a("OutboundLink")],1)]),s._v(" "),a("p",[s._v("欢迎收看，但愿没没浪费你宝贵的时间～～")])])}),[],!1,null,null,null);n.default=e.exports}}]);