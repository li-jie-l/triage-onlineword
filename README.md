
##

    docs/.vuepress: 用于存放全局的配置、组件、静态资源等。
    docs/.vuepress/components: 该目录中的 Vue 组件将会被自动注册为全局组件。
    docs/.vuepress/theme: 用于存放本地主题。
    docs/.vuepress/styles: 用于存放样式相关的文件。
    docs/.vuepress/styles/index.styl: 将会被自动应用的全局样式文件，会生成在最终的 CSS 文件结尾，具有比默认样式更高的优先级。
    docs/.vuepress/styles/palette.styl: 用于重写默认颜色常量，或者设置新的 stylus 颜色常量。
    docs/.vuepress/public: 静态资源目录。
    docs/.vuepress/templates: 存储 HTML 模板文件。
    docs/.vuepress/templates/dev.html: 用于开发环境的 HTML 模板文件。
    docs/.vuepress/templates/ssr.html: 构建时基于 Vue SSR 的 HTML 模板文件。
    docs/.vuepress/config.js: 配置文件的入口文件，也可以是 YML 或 toml。
    docs/.vuepress/enhanceApp.js: 客户端应用的增强。
    
## 参考资料
https://www.vuepress.cn/
    
## 代码提交规范

```
Angular commit message规范
<type>(<scope>): <subject>
<BLANK LINE>
<body>
<BLANK LINE>
<footer>
```

subject-标题行: 必填, 描述主要修改类型和内容<br/>
body-主题内容: 描述为什么修改, 做了什么样的修改, 以及开发的思路等等<br/>
footer-页脚注释: 放 Breaking Changes 或 Closed Issues<br/>

    commit 的类型
    feat: 新特性
    fix: 修改问题
    refactor: 代码重构
    docs: 文档修改
    style: 代码格式修改, 注意不是 css 修改
    test: 测试用例修改
    chore: 其他修改, 比如构建流程, 依赖管理.
    pref: 性能提升的修改
    build: 对项目构建或者依赖的改动
    ci: CI 的修改
    revert: revert 前一个 commit


gulpjs
https://www.gulpjs.com.cn/docs/api/src/
webpack
https://webpack.docschina.org/concepts/output/
http请求头
https://cloud.tencent.com/developer/section/1189911
