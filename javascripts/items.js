const loadItems = (successFunction, errorFunction) => {
  const myRequest = new XMLHttpRequest();
  myRequest.addEventListener('load', successFunction);
  myRequest.addEventListener('error', errorFunction);
  myRequest.open('GET', '../db/items.json');
  myRequest.send();
};

module.exports = loadItems;
