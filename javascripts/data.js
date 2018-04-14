const loadDepts = require('./departments');

const whenDeptLoads = function () {
  const data = JSON.parse(this.responseText);
  console.log('departments', data);
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
