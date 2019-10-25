const white = 'hsl(0, 0%, 100%)';
const black = 'hsl(207, 26%, 17%)';
const gray = '#F8F8F9';

const themeLight = {
  background: gray,
  body: black,
};

const themeDark = {
  background: black,
  body: white,
};

const theme = (mode) => (mode === 'dark' ? themeDark : themeLight);

export default theme;
