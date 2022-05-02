# Employee Tracker - An application to help manage Buisness Operations

## Description
This command-line application takes user inputs and stores them into databases which are used to keep track of various buisness operations, including managing employees, departments, and roles within the buisness. This content management system can help you keep track of your ever-increasing business!

## Installation
Clone/copy the code from the GitHub repository at this [link](https://github.com/mfcodingbc/employee-tracker), then run the server.js file in the command-line to begin the application.

## Usage
After downloading the code, run the code by typing `npm start` in the command-line. (If you get an error for missing dependencies, run `npm install` to install all the proper npm libraries.) As this application uses MySQL to operate, you will need your own MySQL account set up, with username and password. Include this information in a `.env` file in the root directory of this code, with  

DB_NAME='management_db'  
DB_USER=''  
DB_PW=''  

in the file. Once the application is running, navigate the menus and answer the prompts to fill out your databases as desired with departments, roles, and employees.

![Walkthrough Video]()

## Technologies Used
 - Express.js
 - Node.js
 - console.table
 - Inquirer
 - MySQL

## Credits

Created following the MSU Coding Bootcamp module on SQL.

## License

[MIT](https://choosealicense.com/licenses/mit/)