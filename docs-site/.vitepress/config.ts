import { defineConfig } from "vitepress";

export default defineConfig({
  title: "STerm",
  description: "安全、顺手的跨平台 SSH / SFTP 终端",
  outDir: "../docs",
  base: "/sterm/",
  lastUpdated: true,
  cleanUrls: true,
  head: [["link", { rel: "icon", href: "/sterm/logo.svg" }]],
  themeConfig: {
    logo: "/logo.svg",
    socialLinks: [{ icon: "github", link: "https://github.com/while-coder/sterm" }],
    search: {
      provider: "local",
      options: {
        locales: {
          zh: {
            translations: {
              button: { buttonText: "搜索文档", buttonAriaLabel: "搜索文档" },
              modal: {
                noResultsText: "没有找到相关内容",
                resetButtonTitle: "清除搜索",
                footer: {
                  selectText: "选择",
                  navigateText: "切换",
                  closeText: "关闭",
                },
              },
            },
          },
        },
      },
    },
  },
  locales: {
    root: {
      label: "English",
      lang: "en-US",
      title: "STerm",
      description: "A secure, practical SSH and SFTP client",
      themeConfig: {
        nav: [
          { text: "Guide", link: "/guide/getting-started" },
          { text: "Download", link: "https://github.com/while-coder/sterm/releases" },
          { text: "GitHub", link: "https://github.com/while-coder/sterm" },
        ],
        sidebar: sidebar("en"),
        footer: {
          message: "Secure connections, files, and troubleshooting in one workspace.",
          copyright: "Copyright © STerm contributors",
        },
      },
    },
    zh: {
      label: "简体中文",
      lang: "zh-CN",
      title: "STerm",
      description: "安全、顺手的跨平台 SSH / SFTP 终端",
      themeConfig: {
        nav: [
          { text: "指南", link: "/zh/guide/getting-started" },
          { text: "下载", link: "https://github.com/while-coder/sterm/releases" },
          { text: "GitHub", link: "https://github.com/while-coder/sterm" },
        ],
        sidebar: sidebar("zh"),
        docFooter: { prev: "上一页", next: "下一页" },
        outline: { label: "本页目录" },
        lastUpdated: { text: "最后更新于" },
        darkModeSwitchLabel: "主题",
        lightModeSwitchTitle: "切换到浅色模式",
        darkModeSwitchTitle: "切换到深色模式",
        sidebarMenuLabel: "菜单",
        returnToTopLabel: "回到顶部",
        langMenuLabel: "切换语言",
        footer: {
          message: "把安全连接、文件管理和远程排查放在一个工作区里。",
          copyright: "Copyright © STerm contributors",
        },
      },
    },
  },
});

function sidebar(locale: "en" | "zh") {
  const prefix = locale === "zh" ? "/zh" : "";
  const text = locale === "zh"
    ? {
        intro: "开始使用",
        start: "快速开始",
        features: "功能指南",
        ssh: "SSH 与会话",
        sftp: "SFTP 文件管理",
        ai: "AI 终端助手",
        security: "安全与同步",
      }
    : {
        intro: "Introduction",
        start: "Getting Started",
        features: "Features",
        ssh: "SSH and Sessions",
        sftp: "SFTP File Management",
        ai: "AI Terminal Assistant",
        security: "Security and Sync",
      };
  return [
    {
      text: text.intro,
      items: [{ text: text.start, link: `${prefix}/guide/getting-started` }],
    },
    {
      text: text.features,
      items: [
        { text: text.ssh, link: `${prefix}/guide/ssh` },
        { text: text.sftp, link: `${prefix}/guide/sftp` },
        { text: text.ai, link: `${prefix}/guide/ai` },
        { text: text.security, link: `${prefix}/guide/security-sync` },
      ],
    },
  ];
}
