import { Config } from "@stencil/core";

export const config: Config = {
  namespace: "ak-ui",
  outputTargets: [
    {
      type: "dist",
      esmLoaderPath: "../loader"
    },
    {
      type: "docs-readme"
    },
    {
      type: "www",
      serviceWorker: null // disable service workers
    }
  ],
  globalStyle: 'src/global/variables.css'
};
