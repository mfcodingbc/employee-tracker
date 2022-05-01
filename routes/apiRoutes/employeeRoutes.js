const express = require('express');
const router = express.Router();
const db = require('../../db/connection');

// View (GET) all employees
router.get('/employees', (req, res) => {
  const sql = `SELECT employee.*, employee_role.*
              FROM employee
              LEFT JOIN employee_role
              ON employee.role_id = employee_role.id`;
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

// Add (POST) an employee
router.post('/employee', ({ body }, res) => {
  const sql = `INSERT INTO employee (first_name, last_name, role_id, manager_id)
                VALUES (?,?,?,?)`;
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

// DELETE an employee
router.delete('/employee/:id', (req, res) => {
  const sql = `DELETE FROM employee WHERE id = ?`;
  const params = [req.params.id];

  db.query(sql, params, (err, result) => {
    if (err) {
      res.status(400).json({ error: err.message });
    } else if (!result.affectedRows) {
      res.json({
        message: 'Employee not found'
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

// Update (PUT) an employee's role
router.put('/employee/:id', (req, res) => {  
  const sql = `UPDATE employee SET role_id = ? 
              WHERE id = ?`;
  const params = [req.body.role_id, req.params.id];

  db.query(sql, params, (err, result) => {
    if (err) {
    res.status(400).json({ error: err.message });
    } else if (!result.affectedRows) {
      res.json({
      message: 'Employee not found'
      });
    } else {
      res.json({
      message: 'success',
      data: req.body,
      changes: result.affectedRows
      });
    }
  });
});

// View (GET) employees by manager
router.get('/manager/:id', (req, res) => {
  const sql = `SELECT employee.*
              FROM employee
              WHERE manager_id = ?`;;
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

// Update (PUT) an employee's manager
router.put('/employee/:id', (req, res) => {  
  const sql = `UPDATE employee SET manager_id = ? 
              WHERE id = ?`;
  const params = [req.body.id, req.params.id];

  db.query(sql, params, (err, result) => {
    if (err) {
    res.status(400).json({ error: err.message });
    } else if (!result.affectedRows) {
      res.json({
      message: 'Employee not found'
      });
    } else {
      res.json({
      message: 'success',
      data: req.body,
      changes: result.affectedRows
      });
    }
  });
});

module.exports = router;