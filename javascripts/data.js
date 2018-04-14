const loadDepts = require('./departments');
const printToDom = require('./dom');

const whenDeptLoads = function () {
  const data = JSON.parse(this.responseText).departments;
  printToDom(data);
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
