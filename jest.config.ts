export default {
  moduleFileExtensions: ["ts", "tsx", "jsx", "js"],
  transform: {
    "^.+\\.(ts|tsx)$": "ts-jest",
  },
  testMatch: ["**/test/**/*.spec.ts", "**/test/**/*.test.ts"],
  testEnvironment: "node",
};
