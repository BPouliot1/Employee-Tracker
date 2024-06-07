INSERT INTO department(name)
VALUES
('Engineering'),
('Information Technology'),
('Management'),
('Marketing'),
('Operations'),
('Human Resources');

INSERT INTO role (title, salary, department_id)
VALUES
('Engineer', 110000, 1),
('IT Specialist', 100000, 2),
('Manager', 100000, 3),
('Marketing Coordinator', 90000, 4),
('Operations Coordinator', 90000, 5),
('HR Generalist', 80000, 6);

INSERT INTO employee  (first_name, last_name, role_id, manager_id)
VALUES
("Matt", "Anders", 1, 5),
("George", "Jones", 2, 5),
("Elli", "Katell", 3, 5),
("Brandon", "Olimide", 4, 5),
("Tim", "Walsh", 5, NULL),
("Bill", "Harmon", 6, 9),
("Jimmy", "Meade", 1, 9),
("Sarah", "Heinz", 2, 9),
("Jen", "Norris", 5, NULL)