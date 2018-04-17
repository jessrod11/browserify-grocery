const itemsOutputDiv = document.getElementById('items');

const itemsDomString = (items) => {
  let domString = '';
  items.forEach((item) => {
    domString += `<div class="col-sm-3 item">`;
    domString +=   `<div class="panel panel-info">`;
    domString +=    `<div class="panel-heading">`;
    domString +=    `<h3 class="panel-title"><h3>${item.name}</h3></h3>`;
    domString += `</div> `;
    domString += `<div class="panel-body">`;
    domString +=   `Panel content`;
    domString +=    `</div>`;
    domString +=   `</div>`;
    domString += `</div>`;

  });
  return domString;
};

const printToDom = (items) => {
  itemsOutputDiv.innerHTML = itemsDomString(items);
};

module.exports = printToDom;
