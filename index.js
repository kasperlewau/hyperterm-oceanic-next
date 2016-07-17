const foregroundColor = '#D8DEE9';
const backgroundColor = '#1B2B34';
const cursorColor = foregroundColor;
const borderColor = backgroundColor;
const colors = [
  "#1b2b34",
  "#343d46",
  "#4f5b66",
  "#65737e",
  "#a7adba",
  "#c0c5ce",
  "#cdd3de",
  "#d8dee9",
  "#ec5f67",
  "#f99157",
  "#fac863",
  "#99c794",
  "#5fb3b3",
  "#6699cc",
  "#c594c5",
  "#ab7967"
];

exports.decorateConfig = config => Object.assign(config, {
  foregroundColor,
  backgroundColor,
  cursorColor,
  colors
});
