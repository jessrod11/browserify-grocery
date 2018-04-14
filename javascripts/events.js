const deptCards = document.getElementsByClassName('department');

const showDeptName = (e) => {
  console.log('show', e.target);
  const departmentImg = e.target.children[1];
  const departmentName = e.target.children[0];
  departmentName.classList.remove('hide');
  console.log('name', departmentName.classList);
  console.log(departmentName);
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
};

const addDepEvents = () => {
  for (let i = 0; i < deptCards.length; i++) {
    deptCards[i].addEventListener('mouseenter', showDeptName);
    deptCards[i].addEventListener('mouseleave', hideDeptName);
    deptCards[i].addEventListener('click', showItems);
  };
};

module.exports = {
  addDepEvents,
};
