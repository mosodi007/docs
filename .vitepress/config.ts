import { defineConfig } from "vitepress";

export default defineConfig({
  title: "TSCopier Docs",
  description: "User documentation for TSCopier — copy Telegram trading signals to MT4/MT5.",
  lang: "en-US",
  cleanUrls: true,
  lastUpdated: true,
  srcExclude: ["README.md"],

  head: [["link", { rel: "icon", href: "/favicon.svg", type: "image/svg+xml" }]],

  themeConfig: {
    logo: {
      light: "/logo/tscopier-logo-light.svg",
      dark: "/logo/tscopier-logo-dark.svg",
    },
    siteTitle: "",

    nav: [
      { text: "Quickstart", link: "/quickstart/overview" },
      { text: "FAQ", link: "/troubleshooting/faq" },
      {
        text: "Support",
        link: "https://app.tscopier.ai/contact-support",
        target: "_blank",
      },
    ],

    sidebar: [
      {
        text: "Welcome",
        items: [{ text: "Introduction", link: "/" }],
      },
      {
        text: "Quickstart",
        items: [{ text: "Get started in 3 steps", link: "/quickstart/overview" }],
      },
      {
        text: "Telegram",
        items: [
          { text: "Connect Telegram", link: "/telegram/connect" },
          { text: "Add channels", link: "/telegram/channels" },
        ],
      },
      {
        text: "Brokers",
        items: [
          { text: "Connect MT4/MT5", link: "/brokers/connect-mt4-mt5" },
          { text: "Reconnect broker issues", link: "/brokers/reconnect" },
        ],
      },
      {
        text: "Configuration",
        items: [
          { text: "Configuration basics", link: "/configuration/basics" },
          { text: "Lot size and TPs", link: "/configuration/lot-size-and-tps" },
        ],
      },
      {
        text: "Plans and Billing",
        items: [
          { text: "Basic vs Advanced", link: "/plans/basic-vs-advanced" },
          { text: "Billing and invoices", link: "/plans/billing" },
        ],
      },
      {
        text: "Troubleshooting",
        items: [
          { text: "FAQ", link: "/troubleshooting/faq" },
          { text: "Copier not copying", link: "/troubleshooting/copier-not-copying" },
        ],
      },
      {
        text: "Support",
        items: [{ text: "Contact support", link: "/support/contact" }],
      },
    ],

    footer: {
      message: "TSCopier — cloud-based Telegram to MT4/MT5 signal copier",
      copyright: "Copyright © TSCopier",
    },

    editLink: {
      pattern: "https://github.com/planmoni/docs/edit/main/:path",
      text: "Edit this page on GitHub",
    },

    docFooter: {
      prev: "Previous",
      next: "Next",
    },

    outline: { level: [2, 3] },

    search: {
      provider: "local",
    },
  },
});
