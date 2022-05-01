const express = require('express');
const router = express.Router();
const db = require('../../db/connection');

// View (GET) all departments
router.get('/departments', (req, res) => {
  const sql = `SELECT * FROM department`;
  db.query(sql, (err, rows) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    res.json({
      message: 'success',
      data: rows
    });
  });
});

// View (GET) employees by department
router.get('/department/:id', (req, res) => {
  const sql = `SELECT employee.*, employee_role.*, department.name
              AS department
              FROM employee
              LEFT JOIN employee_role
              ON employee.role_id = employee_role.id
              LEFT JOIN department
              ON employee_role.department_id = department.id
              WHERE department.id = ?`;
  const params = [req.params.id];

  db.query(sql, params, (err, row) => {
    if (err) {
      res.status(400).json({ error: err.message });
      return;
    }
    res.json({
      message: 'success',
      data: row
    });
  });
});

// View (GET) the total utilized budget of a department
router.get('/budget/:id', (req, res) => {
  const sql = `SELECT department.name AS department,
              SUM(employee_role.salary) AS budget
              FROM employee
              LEFT JOIN employee_role
              ON employee.role_id = employee_role.id
              LEFT JOIN department
              ON employee_role.department_id = department.id
              WHERE department.id = ?`;
  const params = [req.params.id];

  db.query(sql, params, (err, row) => {
    if (err) {
      res.status(400).json({ error: err.message });
      return;
    }
    res.json({
      message: 'success',
      data: row
    });
  });
});

// Add (POST) a department
router.post('/department', ({ body }, res) => {
  const sql = `INSERT INTO department (name)
                VALUES (?)`;
  const params = [body.name];

  db.query(sql, params, (err, result) => {
    if (err) {
      res.status(400).json({ error: err.message });
      return;
    }
    res.json({
      message: 'success',
      data: body
    });
  });
});

// DELETE a department
router.delete('/department/:id', (req, res) => {
  const sql = `DELETE FROM department WHERE id = ?`;
  const params = [req.params.id];

  db.query(sql, params, (err, result) => {
    if (err) {
      res.status(400).json({ error: err.message });
    } else if (!result.affectedRows) {
      res.json({
        message: 'Department not found'
      });
    } else {
      res.json({
        message: 'deleted',
        changes: result.affectedRows,
        id: req.params.id
      });
    }
  });
});

module.exports = router;