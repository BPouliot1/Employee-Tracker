const { titleCase } = require('./util/helpers.js');

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
    
  ];
  
  module.exports = prompts;