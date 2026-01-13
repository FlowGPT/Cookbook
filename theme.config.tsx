//I used nextra library for next.js. This is theme configuration for it:
//https://nextra.site/docs/docs-theme/theme-configuration

import React from "react";

const config = {
  logo: (
    <>
      <img
        src="/favicon.ico"
        alt="Emochi"
        style={{ width: "24px", height: "24px", marginRight: "8px" }}
      />
      <span>
        <b>Emochi</b> Cookbook
      </span>
    </>
  ),

  chat: {
    link: "https://discord.gg/FbSdE2EnJe",
  },

  project: {
    link: "https://github.com/FlowGPT/guide",
  },

  footer: {
    text: "Emochi",
  },

  useNextSeoProps() {
    return {
      titleTemplate: "%s - Emochi",
    };
  },

  nextThemes: {
    defaultTheme: "system",
  },

  // banner: {
  //   key: "hackathon",
  //   text: (
  //     <a href="https://flowgpt.com/bounty" target="_blank">
  //       🎉 FlowGPT Hackathon Season 2 is released. Join here →
  //     </a>
  //   ),
  // },

  feedback: {
    content: null,
  },

  editLink: {
    text: null,
  },
};

export default config;
