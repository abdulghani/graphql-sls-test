import { Config } from "@jest/types";

const config: Config.InitialOptions = {
  displayName: {
    name: "PAWJOURR GATEWAY TEST",
    color: "white",
  },
  testEnvironment: "node",
  detectLeaks: false,
  verbose: false,
  detectOpenHandles: false,
  maxConcurrency: 1,
  maxWorkers: 1,
  notify: false,
  rootDir: process.cwd(),
  coverageDirectory: "<rootDir>/.coverage",
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
  testMatch: [
    "**/__tests__/**/*.test.[jt]s?(x)",
    "**/__tests__/**/*.int.test.[jt]s?(x)",
    "**/__tests__/**/*.test.int.[jt]s?(x)",
  ],
  transform: {
    "\\.tsx?$": "ts-jest",
    "\\.jsx?$": "ts-jest",
  },
  testPathIgnorePatterns: ["/node_modules/", "/dist/"],
  transformIgnorePatterns: ["/node_modules/", "\\.pnp\\.[^\\/]+$"],
  reporters: ["default", "jest-junit"],
  testResultsProcessor: "jest-junit",
};

export default config;
