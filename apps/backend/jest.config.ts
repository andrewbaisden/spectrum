import type { Config } from "jest";

const config: Config = {
  preset: "ts-jest",
  moduleFileExtensions: ["js", "json", "ts"],
  rootDir: ".",
  testEnvironment: "node",
  testRegex: ".*\\.spec\\.ts$",
  transform: {
    "^.+\\.(t|j)s$": "ts-jest"
  },
  moduleNameMapper: {
    "^@tech-test/contracts(.*)$": "<rootDir>/../../packages/contracts/src$1"
  },
  coverageDirectory: "coverage"
};

export default config;
