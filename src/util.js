// @see https://stackoverflow.com/a/25279340
const getTime = (seconds) => {
  return new Date(parseInt(seconds) * 1000).toISOString().slice(11, 19).replace(/00:/g, '');
};

const getRand = (min, max) => Math.floor(Math.random() * max) + min;

export { getTime, getRand };
