const generateQuerry = (title) => {
  return title
    .split(" ")
    .map((item) => `title_like=${item}`)
    .join("&");
};

module.exports = generateQuerry;
