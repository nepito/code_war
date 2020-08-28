module.exports = {
  collectCoverage: true,
  projects: [
    {
      displayName: "test",
      transform: {
        "^.+\\.tsx?$": "<rootDir>/preprocess.js",
      },
      testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.([tj]sx?)$",
      moduleFileExtensions: ["ts", "tsx", "js"],
      collectCoverage: true,
    },
  ],
};
