module.exports = {
  extends: [
    "stylelint-config-recommended",
    "stylelint-config-styled-components"
  ],
  processor: ["stylelint-processor-styled-components"],
  ignoreFiles: ["**/*.png", "**/*.jpg", "**/*.otf", "**/*.ttf"],
};
