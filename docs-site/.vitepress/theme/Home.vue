<script setup lang="ts">
import { computed } from "vue";
import { useData, withBase } from "vitepress";

const { lang } = useData();

const messages = {
  "en-US": {
    eyebrow: "SSH · SFTP · AI",
    tagline: "Your remote workspace, without the clutter",
    desc: "Connect securely, work across multiple terminals, move files, and troubleshoot with AI from one focused desktop app.",
    getStarted: "Get Started",
    getStartedLink: "/STerm/guide/getting-started",
    download: "Download",
    highlights: [
      ["Secure SSH", "Known Hosts verification, password, key, Agent, and interactive authentication."],
      ["Serious workflows", "Jump hosts, HTTP/SOCKS5 proxies, port forwarding, split view, and broadcast input."],
      ["File management", "Browse, edit, upload, download, resume transfers, and change remote permissions with SFTP."],
      ["Terminal AI", "Attach selected text or recent output, inspect commands, and stay in control of execution."],
    ],
  },
  "zh-CN": {
    eyebrow: "SSH · SFTP · AI",
    tagline: "一个窗口，处理所有远程工作",
    desc: "安全连接服务器，同时管理多个终端、传输文件，并让 AI 帮你理解现场和排查问题。",
    getStarted: "快速开始",
    getStartedLink: "/STerm/zh/guide/getting-started",
    download: "下载 STerm",
    highlights: [
      ["安全连接", "主机指纹校验，支持密码、私钥、SSH Agent 和交互式认证。"],
      ["复杂网络", "跳板机、HTTP/SOCKS5 代理、端口转发、分屏与多会话广播。"],
      ["文件管理", "浏览、编辑、上传、下载、断点续传，并可直接修改远端权限。"],
      ["终端 AI", "主动附加选区或最近输出，命令执行前清楚展示并由你确认。"],
    ],
  },
};

const t = computed(() => messages[lang.value as keyof typeof messages] ?? messages["en-US"]);
</script>

<template>
  <main class="sterm-home">
    <section class="sterm-hero">
      <img :src="withBase('/logo.svg')" alt="STerm" class="sterm-logo" />
      <p class="sterm-eyebrow">{{ t.eyebrow }}</p>
      <h1>STerm</h1>
      <h2>{{ t.tagline }}</h2>
      <p class="sterm-desc">{{ t.desc }}</p>
      <div class="sterm-actions">
        <a :href="t.getStartedLink" class="sterm-button primary">{{ t.getStarted }} →</a>
        <a href="https://github.com/while-coder/sterm/releases" class="sterm-button secondary">
          {{ t.download }}
        </a>
      </div>
    </section>
    <section class="sterm-grid">
      <article v-for="item in t.highlights" :key="item[0]">
        <h3>{{ item[0] }}</h3>
        <p>{{ item[1] }}</p>
      </article>
    </section>
  </main>
</template>
