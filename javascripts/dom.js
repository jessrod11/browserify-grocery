const deptOutputDiv = document.getElementById('departments');

const domString = (departments) => {
  let domStrang = '';
  departments.forEach((dept) => {
    domStrang += `<div class="col-sm-3 department">`;
    domStrang +=   `<h3 class= "hide">${dept.name}</h3>`;
    domStrang +=   `<img class="dept-img" src="${dept.img}">`;
    domStrang += `</div>`;
  });
  return domStrang;
};

const printToDom = (departments) => {
  deptOutputDiv.innerHTML = domString(departments);
};

module.exports = printToDom;
