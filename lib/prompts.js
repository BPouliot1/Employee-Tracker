const { titleCase } = require('./util/helpers.js');
const { department, role, employee } = require('./initialize.js');

const prompts = [
    {
      name: 'task',
      type: 'list',
      message: 'Select a Task:',
      choices: [
        'View all departments',
        'View all roles',
        'View all employees',
        'Add a department',
        'Add a role',
        'Add an employee',
        'Update an employee role',
        'Exit',
      ],
    },
    {
      name: 'department',
      type: 'input',
      message: 'Enter department name:',
      filter: titleCase,
      when: (answer) => {
        if (answer.task === 'Add a department') {
          return true;
        }
        return false;
      },
      validate: (answer) => {
        if (answer.trim().length === 0) {
          return 'Please enter a department name';
        }
        return true;
      },
    },

    {
        name: 'roleTitle',
        type: 'input',
        message: 'Enter role title:',
        filter: titleCase,
        when: (answer) => {
          if (answer.task === 'Add a role') {
            return true;
          }
          return false;
        },
        validate: (answer) => {
          if (answer.trim().length === 0) {
            return 'Please enter a role title';
          }
          return true;
        },
      },
      {
        name: 'roleSalary',
        type: 'input',
        message: 'Enter role salary:',
        when: (answer) => {
          if (answer.task === 'Add a role') {
            return true;
          }
          return false;
        },
        validate: (answer) => {
          if (answer.trim().length === 0) {
            return 'Please enter a role salary';
          }
          return true;
        },
      },
      {
        name: 'roleDepartment',
        type: 'list',
        message: 'Select role department',
        choices: async () => await department.populate(),
        when: (answer) => {
          if (answer.task === 'Add a role') {
            return true;
          }
          return false;
        },
      },
    
      {
        name: 'employeeFirstName',
        type: 'input',
        message: 'Enter first name:',
        filter: titleCase,
        when: (answer) => {
          if (answer.task === 'Add an employee') {
            return true;
          }
          return false;
        },
        validate: (answer) => {
          if (answer.trim().length === 0) {
            return 'Please enter a first name';
          }
          return true;
        },
      },
      {
        name: 'employeeLastName',
        type: 'input',
        message: 'Enter last name:',
        filter: titleCase,
        when: (answer) => {
          if (answer.task === 'Add an employee') {
            return true;
          }
          return false;
        },
        validate: (answer) => {
          if (answer.trim().length === 0) {
            return 'Please enter a last name';
          }
          return true;
        },
      },
      {
        name: 'employeeRole',
        type: 'list',
        message: 'Select Employee role',
        choices: async () => await role.populate(),
        when: (answer) => {
          if (answer.task === 'Add an employee') {
            return true;
          }
          return false;
        },
      },
      {
        name: 'employeeManager',
        type: 'list',
        message: 'Select Employee Manager:',
        choices: async () => await employee.populate(),
        when: (answer) => {
          if (answer.task === 'Add an employee') {
            return true;
          }
          return false;
        },
      },

      {
        name: 'updateEmployee',
        type: 'list',
        message: 'Select Employee:',
        choices: [],
        when: (answer) => {
          if (answer.task === 'Update an employee role') {
            return true;
          }
          return false;
        },
      },
      {
        name: 'updateRole',
        type: 'list',
        message: 'Select new role:',
        choices: async () => await role.populate(),
        when: (answer) => {
          if (answer.task === 'Update an employee role') {
            return true;
          }
          return false;
        },
      },
  ];
  
  module.exports = prompts;