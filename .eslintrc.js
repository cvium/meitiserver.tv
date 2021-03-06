module.exports = {
  env: {
    "es2021": true
  },
  globals: {
    graphql: true,
    __PATH_PREFIX__: true,
    __BASE_PATH__: true, // this will rarely, if ever, be used by consumers
  },
  extends: [
      "react-app",
      "prettier"
  ]
}