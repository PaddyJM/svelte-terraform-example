module.exports = {
  testEnvironment: "jsdom",
  transform: {
    "^.+\\.svelte$": "svelte-jester",
    "^.+\\.js$": "babel-jest",
    "^.+\\.ts$": "ts-jest"
  },
  moduleFileExtensions: ["js", "svelte"],
};
