const inquirer = require('inquirer');
const prompts = require('../prompts.js');

class Task {
  constructor(department, role, employee) {
    this.department = department;
    this.role = role;
    this.employee = employee;
  }

  async delegate(answers) {
    switch (answers.task) {
      case 'View all departments':
        await this.department.retrieve();
        this.select();
        break;
      case 'View all roles':
        await this.role.retrieve();
        this.select();
        break;
      case 'View all employees':
        await this.employee.retrieve();
        this.select();
        break;
        case 'Add a department':
            await this.department.add(answers);
            this.select();
            break;
         case 'Add a role':
            await this.role.add(answers);
            this.select();
            break;
        case 'Add an employee':
            await this.employee.add(answers);
            this.select();
            break;
        case 'Update an employee role':
            await this.employee.update(answers);
            this.select();
            break;
        case 'Exit':
            process.exit(0);
    }
  }

  async select() {
    try {
      const answers = await inquirer.prompt(prompts);
      await this.delegate(answers);
    } catch (err) {
      throw new Error(err);
    }
  }
}

module.exports = Task;