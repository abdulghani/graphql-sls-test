import type { AWS } from "@serverless/typescript";
import dotenv from "dotenv";

const env = dotenv.config();

const config: AWS = {
  service: "graphqljs-test",
  frameworkVersion: "3",
  provider: {
    name: "aws",
    region: "ap-southeast-1",
    stage: "dev",
    runtime: "nodejs14.x",
    architecture: "arm64",
    apiGateway: {
      minimumCompressionSize: 1024,
      shouldStartNameWithService: true,
    },
    environment: {
      ...env.parsed,
      SLS_NAME: "${self:service}",
      SLS_STAGE: "${self:provider.stage}",
    },
    iam: {
      role: {
        statements: [
          {
            Effect: "Allow",
            Action: ["lambda:InvokeFunction"],
            Resource: "*",
          },
        ],
      },
    },
  },
  package: { individually: true },
  plugins: [
    "serverless-webpack",
    "serverless-offline",
    "serverless-prune-plugin",
  ],
  custom: {
    webpack: {
      concurrency: 1,
      webpackConfig: "./.webpack.config.ts",
      excludeFiles: ["**/*.test.ts"],
      includeModules: {
        packagePath: "./package.json",
        forceExclude: ["aws-sdk"],
      },
      packager: "npm",
      packagerOptions: {
        noInstall: false,
      },
      keepOutputDirectory: false,
    },
    prune: { automatic: true, version: 1 },
  },
  functions: {
    hello: {
      handler: "./src/handlers/hello.default",
      memorySize: 128,
      events: [
        {
          http: {
            method: "get",
            path: "/hello",
          },
        },
      ],
    },
    graphql: {
      handler: "./src/handlers/graphql.default",
      memorySize: 128,
      events: [
        {
          http: {
            method: "get",
            path: "/graphql",
          },
        },
        {
          http: {
            method: "post",
            path: "/graphql",
          },
        },
      ],
    },
  },
};

module.exports = config;
