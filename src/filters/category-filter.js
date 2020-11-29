module.exports = collection => {
  return Array.from(collection).sort((a, b) => {
    if (a.data.title < b.data.title) {
      return -1;
    } else if (a.data.title > b.data.title) {
      return 1;
    } else {
      return 0;
    }
  });
};