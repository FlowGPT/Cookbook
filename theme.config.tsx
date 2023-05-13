//I used nextra library for next.js. This is theme configuration for it:
//https://nextra.site/docs/docs-theme/theme-configuration

import React from "react";

const config = {
  logo: (
    <span>
      <b>FlowGPT</b> Docs
    </span>
  ),

  chat: {
    link: "https://discord.gg/EuYSg52q4Q",
  },

  footer: {
    text: "FlowGPT Docs",
  },

  useNextSeoProps() {
    return {
      titleTemplate: "%s – FlowGPT",
    };
  },

  nextThemes: {
    defaultTheme: "dark",
  },

  banner: {
    key: "hackathon",
    text: (
      <a href="https://flowgpt.com/bounty" target="_blank">
        🎉 FlowGPT Hackathon Season 2 is released. Join here →
      </a>
    ),
  },

  feedback: {
    content: null
  },

  editLink: {
    text: null
  }

   
};

export default config;
