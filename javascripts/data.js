let departments = [];
let items = [];

const getDepartments = () => {
  return departments;
};

const setDepartments = (departmentsArray) => {
  departments = departmentsArray;
};

const setItems = (itemsArray) => {
  items = itemsArray;
};

const getItems = () => {
  return items;
};

const getItemsByDept = (departmentId) => {
  const selectedItems = [];
  items.forEach((item)  => {
    if (item.departmentId === departmentId) {
      selectedItems.push(item);
    };
  });
  return selectedItems;
};

module.exports = {
  getDepartments,
  setDepartments,
  setItems,
  getItems,
  getItemsByDept,
};
