import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Ryanho97 | BLOG",
  description: "this my blog",
  lastUpdated: true,
  head:[
    ['link', { rel: 'icon', href: '/logo.png' }]
  ],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "主页", link: "/" },
      { text: "个人简介", link: "/aboutme" },
      { text: "博客", link: "/blog/blog" },
    ],
    sidebar: [
      {
        text: "博客",
        items: [
          {
            text: "HTML",
            link: "/blog/html/html",
            collapsed: true,
            items: [
              { text: "1.HTML 基础", link: "/blog/html/01html-base" },
              { text: "2.HTML 元素", link: "/blog/html/02html-元素" },
              { text: "3.HTML 属性", link: "/blog/html/03html-属性" },
              { text: "4.HTML 标题", link: "/blog/html/04html-标题" },
              { text: "5.HTML 段落", link: "/blog/html/05html-段落" },
              {
                text: "6.HTML 文本格式化",
                link: "/blog/html/06html-文本格式化",
              },
              { text: "7.HTML 链接", link: "/blog/html/07html-链接" },
              { text: "8.HTML 头部", link: "/blog/html/08html-头部" },
              { text: "9.HTML 样式", link: "/blog/html/09html-CSS样式" },
              { text: "10.HTML 图像", link: "/blog/html/10html-图像" },
              { text: "11.HTML 表格", link: "/blog/html/11html-表格" },
              { text: "12.HTML 列表", link: "/blog/html/12html-列表" },
              { text: "13.HTML 区块", link: "/blog/html/13html-区块" },
              { text: "14.HTML 布局", link: "/blog/html/14html-布局" },
              { text: "15.HTML 表单", link: "/blog/html/15html-表单" },
              { text: "16.HTML 框架", link: "/blog/html/16html-框架" },
              { text: "17.HTML 颜色", link: "/blog/html/17html-颜色" },
              { text: "18.HTML 脚本", link: "/blog/html/18html-脚本" },
              { text: "19.HTML 字符实体", link: "/blog/html/19html-字符实体" },
              { text: "20.HTML URL", link: "/blog/html/20html-URL" },
              { text: "21.HTML 标签速查", link: "/blog/html/21html-标签速查" },
            ],
          },
          {
            text: "CSS",
            link: "/blog/css/css",
            collapsed: true,
            items: [
              { text: "1.CSS 简介", link: "/blog/css/01css-简介" },
              { text: "2.CSS 语法", link: "/blog/css/02css-语法" },
              { text: "3.CSS 选择器", link: "/blog/css/03css-选择器" },
              { text: "4.CSS 创建", link: "/blog/css/04css-创建" },
              { text: "5.CSS 背景", link: "/blog/css/05css-背景" },
              { text: "6.CSS 文本格式", link: "/blog/css/06css-文本格式" },
              { text: "7.CSS 字体", link: "/blog/css/07css-字体" },
              { text: "8.CSS 链接", link: "/blog/css/08css-链接" },
              { text: "9.CSS 列表", link: "/blog/css/09css-列表" },
              { text: "10.CSS 表格", link: "/blog/css/10css-表格" },
              { text: "11.CSS 盒子模型", link: "/blog/css/11css-盒子模型" },
              { text: "12.CSS 边框", link: "/blog/css/12css-边框" },
              { text: "13.CSS 轮廓", link: "/blog/css/13css-轮廓" },
              { text: "14.CSS margin(外边距)", link: "/blog/css/14css-margin(外边距)" },
              { text: "15.CSS padding(内边距)", link: "/blog/css/15css-padding(内边距)" },
              { text: "16.CSS 分组和嵌套", link: "/blog/css/16css-分组和嵌套" },
            ],
          },
          {
            text: "JavaScript",
            link: "/blog/javascript/javascript",
            collapsed: true,
          },
          { text: "Vue", link: "/blog/vue/vue", collapsed: true },
          { text: "React", link: "/blog/react/react", collapsed: true },
          {
            text: "Three.js",
            link: "/blog/threejs/threejs",
            collapsed: true,
          },
          {
            text: "Algorithm",
            link: "/blog/algorithm/algorithm",
            collapsed: true,
          },
          { text: "组件", link: "/blog/component/component", collapsed: true },
          {
            text: "C语言",
            link: "/blog/c/c",
            collapsed: true,
          },
          {
            text: "Rust语言",
            link: "/blog/rust/rust",
            collapsed: true,
            items: [
              { text: "1.rust猜数游戏", link: "/blog/rust/01猜数游戏" },
            ],
          },
          {
            text: "MySQL",
            link: "/blog/mysql/mysql",
            collapsed: true,
          },
          {
            text: "实际问题解决",
            link: "/blog/solution/solution",
            collapsed: true,
          },
          {
            text: "软考知识",
            link: "/blog/ruankao/ruankao",
            collapsed: true,
          },
        ],
      },
    ],

    socialLinks: [{ icon: "github", link: "https://github.com/RyanHo97" }],
    footer: {
      message: "Made with "+"<a href='meng.html'>❤️</a>"+" by Ryanho97",
      copyright: "in 2023 |  <a href='https://beian.miit.gov.cn/'>冀ICP备2023010147号-1</a>",
    },
    search: {
      provider: 'local'
    }
  },
});
