const inquirer = require('inquirer');
const cTable = require('console.table');

const routes = require('./routes/apiRoutes/index');

// App sequence
const promptApp = () => {
  console.log(`
  =========================
          Main Menu
  =========================
  `);

  return inquirer.prompt([
    {
      type: 'list',
      name: 'mainMenu',
      message: 'Please select from the following options:',
      choices: ['Departments', 'Roles', 'Employees', new inquirer.Separator(), 'Exit App'],
      default: 'Exit App'
    }
  ])
  .then(menuChoice => {
    if (menuChoice.mainMenu === 'Departments') {
      return promptDepartment();
    } else if (menuChoice.mainMenu === 'Roles') {
      return promptRole();
    } else if (menuChoice.mainMenu === 'Employees') {
      return promptEmployee();
    } else {
      return promptExit();
    }
  });
};

const promptDepartment = () => {
  console.log(`
  ===========
  Departments
  ===========
  `)

  return inquirer.prompt([
    {
      type: 'list',
      name: 'departmentMenu',
      message: 'Please choose what you would like to do with Departments:',
      choices: ['View All Departments', 'Add a Department', 'Delete a Department', 'Return to Main Menu'],
      default: 'Return to Main Menu'
    }
  ])
  .then(menuChoice => {
    if (menuChoice.departmentMenu === 'View All Departments') {
      const api_url = 'http://localhost:3001/api/departments';

      async function getApi(url) {
        const response = await fetch(url);

        var data = await response.json();
        console.table('All Departments', data)
      }

      getApi(api_url);
      return promptDepartment();
    }
    if (menuChoice.departmentMenu === 'Add a Department') {
      return inquirer.prompt([
        {
          type: 'input',
          name: 'departmentAdd',
          message: 'Type in the name of the Department you will be adding.'
        }
      ])
      .then(response => {
        const api_url = 'http://localhost:3001/api/department';

        async function postApi(url) {
          const response = await fetch(url);
  
          var data = await response.json();
        }
  
        postApi(api_url, response);
        return promptDepartment();
      });
    }
    if (menuChoice.departmentMenu === 'Delete a Department') {
      return inquirer.prompt([
        {
          type: 'list',
          name: 'departmentDelete',
          message: 'Select the Department you wish to delete.',
          choices: []
        }
      ])
      .then(response => {
        const api_url = 'http://localhost:3001/api/department/:id';

        async function deleteApi(url) {
          const response = await fetch(url);
  
          var data = await response.json();
        }
  
        deleteApi(api_url, response);
        return promptDepartment();
      });
    }
    if (menuChoice.departmentMenu === 'Return to Main Menu') {
      return promptApp();
    }
  });
};

const promptRole = () => {
  console.log(`
  =====
  Roles
  =====
  `)

  return inquirer.prompt([
    {
      type: 'list',
      name: 'roleMenu',
      message: 'Please choose what you would like to do with Roles:',
      choices: ['View All Roles', 'Add a Role', 'Delete a Role', 'Return to Main Menu'],
      default: 'Return to Main Menu'
    }
  ])
  .then(menuChoice => {
    if (menuChoice.roleMenu === 'View All Roles') {
      const api_url = 'http://localhost:3001/api/roles';

      async function getApi(url) {
        const response = await fetch(url);

        var data = await response.json();
        console.table('All Roles', data)
      }

      getApi(api_url);
      return promptRole();
    }
    if (menuChoice.roleMenu === 'Add a Role') {
      return inquirer.prompt([
        {
          type: 'input',
          name: 'roleAdd',
          message: 'Type in the name of the Role you will be adding.'
        },
        {
          type: 'input',
          name: 'salaryAdd',
          message: 'Type in the salary for this role.'
        },
        {
          type: 'list',
          name: 'departmentAdd',
          message: 'Select which department this role belongs to.',
          choices: []
        }
      ])
      .then(response => {
        const api_url = 'http://localhost:3001/api/role';

        async function postApi(url) {
          const response = await fetch(url);
  
          var data = await response.json();
        }
  
        postApi(api_url, response);
        return promptRole();
      });
    }
    if (menuChoice.roleMenu === 'Delete a Role') {
      return inquirer.prompt([
        {
          type: 'list',
          name: 'RoleDelete',
          message: 'Select the Role you wish to delete.',
          choices: []
        }
      ])
      .then(response => {
        const api_url = 'http://localhost:3001/api/role/:id';

        async function deleteApi(url) {
          const response = await fetch(url);
  
          var data = await response.json();
        }
  
        deleteApi(api_url, response);
        return promptRole();
      });
    }
    if (menuChoice.roleMenu === 'Return to Main Menu') {
      return promptApp();
    }
  });
};

const promptEmployee = () => {
  console.log(`
  =========
  Employees
  =========
  `)

  return inquirer.prompt([
    {
      type: 'list',
      name: 'employeeMenu',
      message: 'Please choose what you would like to do with Employees:',
      choices: ['View All Employees', 'Add an Employee', 'Update an Employee', 'Delete an Employee', 'Return to Main Menu'],
      default: 'Return to Main Menu'
    }
  ])
  .then(menuChoice => {
    if (menuChoice.employeeMenu === 'View All Employees') {
      const api_url = 'http://localhost:3001/api/employees';

      async function getApi(url) {
        const response = await fetch(url);

        var data = await response.json();
        console.table('All Employees', data)
      }

      getApi(api_url);
      return promptEmployee();
    }
    if (menuChoice.employeeMenu === 'Add an Employee') {
      return inquirer.prompt([
        {
          type: 'input',
          name: 'employeeFirstAdd',
          message: 'Type in the first name of the Employee you will be adding.'
        },
        {
          type: 'input',
          name: 'employeeLastAdd',
          message: 'Type in the last name of the Employee you will be adding.'
        },
        {
          type: 'list',
          name: 'roleAdd',
          message: 'Select which role this Employee has.',
          choices: []
        },
        {
          type: 'input',
          name: 'managerAdd',
          message: `Type in the name of this Employee's manager. If no manager, leave blank.`
        }
      ])
      .then(response => {
        const api_url = 'http://localhost:3001/api/employee';

        async function postApi(url) {
          const response = await fetch(url);
  
          var data = await response.json();
        }
  
        postApi(api_url, response);
        return promptEmployee();
      });
    }
    if (menuChoice.employeeMenu === 'Update an Employee') {
      return inquirer.prompt([
        {
          type: 'list',
          name: 'employeeUpdate',
          message: 'Select the Employee you wish to update.',
          choices: []
        },
        {
          type: 'list',
          name: 'employeeUpdateRole',
          message: 'Select the new Role for this Employee.',
          choices: ['No Change']
        },
        {
          type: 'list',
          name: 'EmployeeUpdateManager',
          message: 'Select the new Manager for this Employee.',
          choices: ['No Change']
        }
      ])
      .then(responses => {
        const api_url = 'http://localhost:3001/api/employee/:id';

        async function updateApi(url) {
          const response = await fetch(url);
  
          var data = await response.json();
        }
  
        updateApi(api_url, responses);
        return promptEmployee();
      });
    }
    if (menuChoice.employeeMenu === 'Delete an Employee') {
      return inquirer.prompt([
        {
          type: 'checkbox',
          name: 'employeeDelete',
          message: 'Select the Employee you wish to delete.',
          choices: []
        }
      ])
      .then(response => {
        const api_url = 'http://localhost:3001/api/employee/:id';

        async function deleteApi(url) {
          const response = await fetch(url);
  
          var data = await response.json();
        }
  
        deleteApi(api_url, response);
        return promptEmployee();
      });
    }
    if (menuChoice.employeeMenu === 'Return to Main Menu') {
      return promptApp();
    }
  });
};

const promptExit = () => {
  console.log(`
  Thank you for using the Employee Tracker App. Good-bye!
  `)
  process.exit(0);
};

module.exports = { promptApp };