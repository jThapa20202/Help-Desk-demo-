# Help Desk Backend - Database Setup Guide

## Database Schema Overview

The MySQL database for the Help Desk system includes the following tables:

### 1. **students**
Main table storing student user information for authentication and profile management.

```sql
Columns:
- id (INT, PRIMARY KEY, AUTO_INCREMENT)
- name (VARCHAR 255)
- email (VARCHAR 255, UNIQUE) - Must end with @bicnepal.edu.np
- faculty (VARCHAR 100)
- level (VARCHAR 50)
- password (VARCHAR 255) - Bcrypt hashed
- phone (VARCHAR 15) - Optional
- profile_picture (VARCHAR 255) - Optional
- is_active (BOOLEAN) - Default: true
- created_at (TIMESTAMP)
- updated_at (TIMESTAMP)
- last_login (TIMESTAMP) - Nullable
```

**Indexes:**
- email (for quick lookups)
- faculty
- level

**Constraint:**
- Email validation (must be @bicnepal.edu.np)

---

### 2. **tickets**
Support tickets created by students.

```sql
Columns:
- id (INT, PRIMARY KEY, AUTO_INCREMENT)
- ticket_number (VARCHAR 50, UNIQUE) - Auto-generated ref number
- student_id (INT, FOREIGN KEY)
- title (VARCHAR 255)
- description (TEXT) - Optional
- category (VARCHAR 100)
- priority (ENUM) - low, medium, high, urgent
- status (ENUM) - open, in_progress, resolved, closed
- created_at (TIMESTAMP)
- updated_at (TIMESTAMP)
- resolved_at (TIMESTAMP) - Nullable
```

---

### 3. **ticket_comments**
Comments and updates on support tickets.

```sql
Columns:
- id (INT, PRIMARY KEY, AUTO_INCREMENT)
- ticket_id (INT, FOREIGN KEY)
- student_id (INT) - If comment by student
- admin_id (INT) - If comment by admin
- comment (TEXT)
- created_at (TIMESTAMP)
```

---

### 4. **faculties** (Reference Table)
Available faculties/departments

```sql
Columns:
- id (INT, PRIMARY KEY, AUTO_INCREMENT)
- name (VARCHAR 100, UNIQUE)
- description (TEXT)
- created_at (TIMESTAMP)
```

**Preset Values:**
- Engineering
- Science
- Business
- Humanities
- Information Technology

---

### 5. **levels** (Reference Table)
Academic levels/semesters

```sql
Columns:
- id (INT, PRIMARY KEY, AUTO_INCREMENT)
- name (VARCHAR 50, UNIQUE)
- description (TEXT)
- created_at (TIMESTAMP)
```

**Preset Values:**
- 1st-6th Semester (First/Second/Third Year)

---

## Installation Steps

### 1. Install Dependencies
```bash
cd backend
npm install
```

### 2. Create MySQL Database

**Option A: Using MySQL Command Line**
```bash
mysql -u root -p
```

Then run the schema:
```bash
source database/schema.sql
```

**Option B: Copy-paste the schema**
Run all SQL queries from [backend/database/schema.sql](database/schema.sql)

### 3. Configure Environment Variables

Create a `.env` file (copy from `.env.example`):
```bash
cp .env.example .env
```

Edit `.env` with your MySQL credentials:
```env
DB_HOST=localhost
DB_PORT=3306
DB_USER=root
DB_PASSWORD=your_password
DB_NAME=helpdesk_db
PORT=3007
JWT_SECRET=your_secret_key_here
JWT_EXPIRY=7d
```

### 4. Start Backend Server
```bash
npm run dev
```

Server runs on **http://localhost:3007**

---

## API Endpoints

### Authentication Endpoints

#### **POST /api/auth/signup**
Register a new student

**Request:**
```json
{
  "name": "John Doe",
  "email": "johndoe@bicnepal.edu.np",
  "faculty": "Engineering",
  "level": "1st Semester",
  "password": "securepassword",
  "confirmPassword": "securepassword"
}
```

**Response (201):**
```json
{
  "message": "Student registered successfully",
  "token": "jwt_token_here",
  "student": {
    "id": 1,
    "name": "John Doe",
    "email": "johndoe@bicnepal.edu.np",
    "faculty": "Engineering",
    "level": "1st Semester"
  }
}
```

---

#### **POST /api/auth/login**
Login student

**Request:**
```json
{
  "email": "johndoe@bicnepal.edu.np",
  "password": "securepassword"
}
```

**Response (200):**
```json
{
  "message": "Login successful",
  "token": "jwt_token_here",
  "student": {
    "id": 1,
    "name": "John Doe",
    "email": "johndoe@bicnepal.edu.np",
    "faculty": "Engineering",
    "level": "1st Semester"
  }
}
```

---

#### **GET /api/auth/profile**
Get current student profile (requires authentication)

**Headers:**
```
Authorization: Bearer jwt_token_here
```

**Response (200):**
```json
{
  "id": 1,
  "name": "John Doe",
  "email": "johndoe@bicnepal.edu.np",
  "faculty": "Engineering",
  "level": "1st Semester",
  "phone": null,
  "profile_picture": null,
  "is_active": true,
  "created_at": "2024-01-15T10:30:00Z",
  "last_login": "2024-01-15T10:30:00Z"
}
```

---

## Testing the API

Using cURL or Postman:

### Test Signup
```bash
curl -X POST http://localhost:3007/api/auth/signup \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Test Student",
    "email": "test@bicnepal.edu.np",
    "faculty": "Engineering",
    "level": "1st Semester",
    "password": "test123456",
    "confirmPassword": "test123456"
  }'
```

### Test Login
```bash
curl -X POST http://localhost:3007/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{
    "email": "test@bicnepal.edu.np",
    "password": "test123456"
  }'
```

### Test Profile (replace TOKEN with actual JWT)
```bash
curl -X GET http://localhost:3007/api/auth/profile \
  -H "Authorization: Bearer TOKEN"
```

---

## MySQL Connection Pool

The backend uses `mysql2/promise` with connection pooling:
- **Pool Size:** 10 connections
- **Queue Limit:** 0 (unlimited)
- **Auto-reconnect:** Enabled

---

## Security Notes

- Passwords are hashed using **bcryptjs** (10-round salt)
- JWT tokens expire after 7 days
- Email validation enforces @bicnepal.edu.np domain
- All student IDs are validated before operations
- Database constraints prevent duplicate emails

---

## Future Enhancements

- [ ] Add ticket management endpoints
- [ ] Add admin dashboard
- [ ] Implement email notifications
- [ ] Add file upload support for tickets
- [ ] Implement soft deletes for students
- [ ] Add audit logs
