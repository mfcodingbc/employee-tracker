INSERT INTO department (name)
VALUES
  ('Sales'),
  ('Engineering'),
  ('Finance'),
  ('Legal');

  -- Add ('Service');

INSERT INTO employee_role (title, salary, department_id)
VALUES
  ('Sales Team Lead', 100000, 1),
  ('Salesperson', 80000, 1),
  ('Lead Engineer', 150000, 2),
  ('Software Engineer', 120000, 2),
  ('Account Manager', 160000, 3),
  ('Accountant', 125000, 3),
  ('Legal Team Lead', 250000, 4),
  ('Lawyer', 190000, 4);

  -- Add ('Customer Service Manager', 95000, 5)
  -- Add ('Customer Service', 80000, 5)

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES
  ('James', 'Fraser', 1, NULL),
  ('Jack', 'London', 2, 1),
  ('Robert', 'Bruce', 3, NULL),
  ('Peter', 'Greenaway', 4, 3),
  ('Derek', 'Jarman', 5, NULL),
  ('Paolo', 'Pasolini', 6, 5),
  ('Heathcote', 'Williams', 7, NULL),
  ('Sandy', 'Powell', 8, 7);

  -- Add ('Emil', 'Zola', 9, NULL)
  -- Add ('Sissy', 'Coalpits', 10, 9)