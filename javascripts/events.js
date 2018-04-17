const data = require('./data');
const itemsDom = require('./itemsDom');

const departmentDivContainerDiv = document.getElementById('departments');
const deptCards = document.getElementsByClassName('department');

const showDeptName = (e) => {
  const departmentImg = e.target.children[1];
  const departmentName = e.target.children[0];
  departmentName.classList.remove('hide');
  departmentImg.classList.add('grey-out');
};

const hideDeptName = (e) => {
  const departmentImg = e.target.children[1];
  const departmentName = e.target.children[0];
  departmentName.classList.add('hide');
  departmentImg.classList.remove('grey-out');
};

const showItems = (e) => {
  const departmentId = e.target.parentNode.children[0].dataset.deptId;
  console.log('data-id', departmentId);
  const selectedItems = data.getItemsByDept(departmentId);
  console.log('selected items', selectedItems);
  departmentDivContainerDiv.innerHTML = '';
  itemsDom(selectedItems);
  // ToDo: filter items by deptId
};

const addDeptEvents = () => {
  for (let i = 0; i < deptCards.length; i++) {
    deptCards[i].addEventListener('mouseenter', showDeptName);
    deptCards[i].addEventListener('mouseleave', hideDeptName);
    deptCards[i].addEventListener('click', showItems);
  };
};

module.exports = {
  addDeptEvents,
};
