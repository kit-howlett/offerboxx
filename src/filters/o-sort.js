module.exports = (collection) => Array.from(collection).sort((a, b) => (a.data.title < b.data.title) ? -1 : 1);
