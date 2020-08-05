module.exports = {
  collectCoverage: true,
  projects: [
    {
      displayName: "test",
      preset: "jest-preset-gatsby/typescript",
      snapshotSerializers: [
        "jest-serializer-react-helmet",
        "jest-serializer-json-ld-script",
      ],
      collectCoverage: true,
    },
  ],
};
