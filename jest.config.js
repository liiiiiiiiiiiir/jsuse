const ignorePath = [
  "node_modules",
  "<rootDir>/src/packages/index.ts"
];

/** @type {import("jest").Config} */
const config = {
  rootDir: "./",
  bail: true,
  verbose: true,
  collectCoverage: true,
  coveragePathIgnorePatterns: ignorePath,
  testPathIgnorePatterns: ignorePath
};

export default config;
