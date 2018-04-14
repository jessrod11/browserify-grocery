const loadDepts = require('./departments');
const departmentDom = require('./departmentDom');
const data = require('./data');

const whenDeptLoads = function () {
  const departmentsData = JSON.parse(this.responseText).departments;
  data.setDepartments(departmentsData);
  departmentDom(departmentsData);
};

const badDepts = function () {
  console.error('What happened, Stix?!');
};

const initializer = () => {
  loadDepts(whenDeptLoads, badDepts);
};

module.exports = {
  initializer,
};
