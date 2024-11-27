import React from "react";
import { DocsThemeConfig } from "nextra-theme-docs";
import { Analytics } from "@vercel/analytics/react"
import { useRouter } from "next/router";

const config: DocsThemeConfig = {
  logo: (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div>
        <img src={"/images/raettu_logo_rot.svg"} height={64} width={64} />
      </div>
      <div style={{ fontSize: "1.5em", marginTop: "5px", marginLeft: "10px" }}>
        Ratrac Wiki
      </div>
    </div>
  ),
  project: {
    link: "https://github.com/bihorco36/ratrac-wiki",
  },
  primaryHue: 360,
  primarySaturation: { light: 90, dark: 60 },
  docsRepositoryBase: "https://github.com/bihorco36/ratrac-wiki/tree/main",
  useNextSeoProps() {
    const { asPath } = useRouter()
      if (asPath !== '/') {
        return {
          titleTemplate: '%s – Ratrac Wiki'
        }
      }
  },
  sidebar: {
    defaultMenuCollapseLevel: 1,
    toggleButton: true
  },
  footer: {
    text: (<><Analytics /> Ratrac Wiki</>),
  },
  head: (
    <>
      <link
        rel="shortcut icon"
        type="image/x-icon"
        href={"/images/red_r.svg"}
      />
    </>
  ),
};

export default config;
