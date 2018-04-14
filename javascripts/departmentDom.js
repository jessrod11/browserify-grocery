const domEvents = require('./events');

const deptOutputDiv = document.getElementById('departments');

const domString = (departments) => {
  let domStrang = '';
  departments.forEach((dept) => {
    domStrang += `<div class="col-sm-3 department">`;
    domStrang +=   `<h3 class= "dept-title hide" data-dept-id="${dept.id}">${dept.name}</h3>`;
    domStrang +=   `<img class="dept-img" src="${dept.img}">`;
    domStrang += `</div>`;
  });
  return domStrang;
};

const printToDom = (departments) => {
  deptOutputDiv.innerHTML = domString(departments);
  domEvents.addDepEvents();
};

module.exports = printToDom;
