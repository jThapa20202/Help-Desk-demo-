-- Create Database
CREATE DATABASE IF NOT EXISTS helpdesk_db;
USE helpdesk_db;

-- Students Table
CREATE TABLE IF NOT EXISTS students (
  id INT PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) UNIQUE NOT NULL,
  faculty VARCHAR(100) NOT NULL,
  level VARCHAR(50) NOT NULL,
  password VARCHAR(255) NOT NULL,
  is_active BOOLEAN DEFAULT true,
  is_verified BOOLEAN DEFAULT false,
  otp VARCHAR(6),
  otp_expires_at TIMESTAMP NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  last_login TIMESTAMP NULL,
  INDEX idx_email (email),
  INDEX idx_faculty (faculty),
  INDEX idx_level (level),
  CONSTRAINT email_validation CHECK (email LIKE '%@bicnepal.edu.np')
);

-- Tickets Table
CREATE TABLE IF NOT EXISTS tickets (
  id INT PRIMARY KEY AUTO_INCREMENT,
  ticket_number VARCHAR(50) UNIQUE NOT NULL,
  student_id INT NOT NULL,
  title VARCHAR(255) NOT NULL,
  description TEXT,
  category VARCHAR(100),
  priority ENUM('low', 'medium', 'high', 'urgent') DEFAULT 'medium',
  status ENUM('open', 'in_progress', 'resolved', 'closed') DEFAULT 'open',
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  resolved_at TIMESTAMP NULL,
  FOREIGN KEY (student_id) REFERENCES students(id) ON DELETE CASCADE,
  INDEX idx_student_id (student_id),
  INDEX idx_status (status),
  INDEX idx_created_at (created_at)
);

-- Ticket Comments Table
CREATE TABLE IF NOT EXISTS ticket_comments (
  id INT PRIMARY KEY AUTO_INCREMENT,
  ticket_id INT NOT NULL,
  student_id INT,
  admin_id INT,
  comment TEXT NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (ticket_id) REFERENCES tickets(id) ON DELETE CASCADE,
  FOREIGN KEY (student_id) REFERENCES students(id) ON DELETE SET NULL,
  INDEX idx_ticket_id (ticket_id)
);

-- Faculties Reference Table
CREATE TABLE IF NOT EXISTS faculties (
  id INT PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(100) UNIQUE NOT NULL,
  description TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Levels/Semesters Reference Table
CREATE TABLE IF NOT EXISTS levels (
  id INT PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(50) UNIQUE NOT NULL,
  description TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Insert Sample Faculty Data
INSERT INTO faculties (name, description) VALUES
('Engineering', 'Faculty of Engineering'),
('Science', 'Faculty of Science'),
('Business', 'Faculty of Business Studies'),
('Humanities', 'Faculty of Humanities'),
('Information Technology', 'Faculty of Information Technology');

-- Insert Sample Level Data
INSERT INTO levels (name, description) VALUES
('1st Semester', 'First Year First Semester'),
('2nd Semester', 'First Year Second Semester'),
('3rd Semester', 'Second Year First Semester'),
('4th Semester', 'Second Year Second Semester'),
('5th Semester', 'Third Year First Semester'),
('6th Semester', 'Third Year Second Semester');
