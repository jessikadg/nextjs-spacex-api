const { pathsToModuleNameMapper } = require("ts-jest");
const { compilerOptions } = require("./tsconfig");

module.exports = {
  testEnvironment: "jest-environment-jsdom",
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
  moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths, {
    prefix: "<rootDir>/",
  }),
  transform: {
    "^.+\\.(ts|tsx)$": "ts-jest",
  },
  transformIgnorePatterns: ["<rootDir>/node_modules/"],
};
