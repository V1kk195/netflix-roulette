/** @type {import('@jest/types').Config.InitialOptions} */
const config = {
    preset: "ts-jest",
    verbose: true,
    testEnvironment: "jsdom",
    collectCoverage: true,
    collectCoverageFrom: ["src/**/*.{js,jsx,ts,tsx}"],
    coveragePathIgnorePatterns: ["index.ts", ".d.ts", ".styles.tsx"],
    coverageDirectory: "coverage",
    coverageThreshold: {
        global: {
            lines: 70,
        },
    },
    transform: {
        "^.+\\.(js?)$": "babel-jest",
        "^.+\\.tsx?$": "ts-jest",
        "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$":
            "<rootDir>/fileTransformer.js",
    },
    testPathIgnorePatterns: ["build", "node_modules"],
    setupFilesAfterEnv: ["<rootDir>/src/setupTests.js"],
};

module.exports = config;
