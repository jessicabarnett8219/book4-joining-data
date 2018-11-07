module.exports = {
  scripts: {
      files: [
          "../scripts/**/*.js",
          "!node_modules/**/*.js"
      ],
      options: {
          spawn: false,
          debounceDelay: 1000
      }
  }
}