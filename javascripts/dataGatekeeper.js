const loadDepts = require('./departments');
const loadItems = require('./items');
const departmentDom = require('./departmentDom');
const data = require('./data');

const whenDeptLoads = function () {
  const departmentsData = JSON.parse(this.responseText).departments;
  data.setDepartments(departmentsData);
  departmentDom(departmentsData);
};

const whenItemsLoads = function () {
  const itemsData = JSON.parse(this.responseText).items;
  console.log('items data', itemsData);
};

const badDepts = function () {
  console.error('What happened, Stix?!');
};

const initializer = () => {
  loadDepts(whenDeptLoads, badDepts);
  loadItems(whenItemsLoads, badDepts);
};

module.exports = {
  initializer,
};
