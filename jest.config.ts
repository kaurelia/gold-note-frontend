import { Config } from "@jest/types";
import { pathsToModuleNameMapper } from "ts-jest";
import { compilerOptions } from "./tsconfig.json";

const config: Config.InitialOptions = {
  testEnvironment: "jsdom",
  extensionsToTreatAsEsm: [".tsx", ".ts"],
  preset: "ts-jest",
  snapshotSerializers: ["@emotion/jest/serializer"],
  setupFilesAfterEnv: ["jest-extended", "@testing-library/jest-dom"],
  moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths, {
    prefix: process.cwd(),
  }),
  transform: {
    ".(ts|tsx)$": [
      "ts-jest",
      {
        babelConfig: {
          presets: [
            [
              "@babel/env",
              { bugfixes: true, useBuiltIns: "usage", corejs: "3" },
            ],
            "@babel/preset-typescript",
            ["@babel/preset-react", { runtime: "automatic" }],
          ],
          plugins: ["@emotion"],
        },
      },
    ],
  },
};
export default config;
