const express = require('express');
const router = express.Router();
const db = require('../../db/connection');

// GET all roles
router.get('/roles', (req, res) => {
  const sql = `SELECT * FROM employee_role`;
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

// Add (POST) a role
router.post('/role', ({ body }, res) => {
  const sql = `INSERT INTO employee_role (title, salary, department_id)
                VALUES (?,?,?)`;
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

// DELETE a role
router.delete('/role/:id', (req, res) => {
  const sql = `DELETE FROM employee_role WHERE id = ?`;
  const params = [req.params.id];

  db.query(sql, params, (err, result) => {
    if (err) {
      res.status(400).json({ error: err.message });
    } else if (!result.affectedRows) {
      res.json({
        message: 'Role not found'
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