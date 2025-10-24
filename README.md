# Task Management Application

<div align="center">

![Version](https://img.shields.io/badge/version-1.0-blue.svg)
![Spring Boot](https://img.shields.io/badge/Spring%20Boot-3.x-brightgreen.svg)
![React](https://img.shields.io/badge/React-18-61DAFB.svg)


A full-stack web application for managing daily tasks with secure authentication, task prioritization, and filtering capabilities.

[Features](#features) • [Tech Stack](#technology-stack) • [Getting Started](#getting-started) • [API Documentation](#api-endpoints) • [Screenshots](#screenshots)

</div>

---

## Overview

The Task Management Application is a modern web-based solution designed to help users organize, track, and manage their daily tasks efficiently. Built with Spring Boot and React, it provides a robust, secure, and user-friendly interface with JWT-based authentication.

## Features

✨ **Core Functionality**
- 🔐 Secure user authentication and registration (JWT-based)
- ✅ Complete CRUD operations for tasks
- 🎯 Three-level priority system (HIGH, MEDIUM, LOW)
- 🔍 Advanced filtering by status and priority
- 📅 Due date management
- 📱 Responsive design for all devices

🛡️ **Security**
- JWT token-based authentication
- BCrypt password encryption
- User data isolation
- Protected API endpoints
- CORS configuration

## Technology Stack

### Backend
- **Spring Boot 3.x** - Core framework
- **Spring Security** - Authentication & authorization
- **Spring Data JPA** - Data persistence
- **Hibernate** - ORM implementation
- **MySQL** - Database
- **Maven** - Build tool
- **JWT** - Token-based authentication

### Frontend
- **React 18** - UI library
- **React Router v6** - Client-side routing
- **Axios** - HTTP client
- **CSS3** - Styling

## Architecture

```
┌─────────────────────────────────────────────────┐
│           Presentation Layer (React)            │
│  - Components  - Routing  - State Management    │
└────────────────────┬────────────────────────────┘
                     │ HTTP/REST (JSON)
┌────────────────────▼────────────────────────────┐
│         Application Layer (Spring Boot)         │
│  - Controllers  - Services  - Security          │
└────────────────────┬────────────────────────────┘
                     │ JPA/Hibernate
┌────────────────────▼────────────────────────────┐
│            Data Layer (MySQL)                   │
│  - User Table  - Task Table  - Relationships    │
└─────────────────────────────────────────────────┘
```

## Getting Started

### Prerequisites

- Java 17 or higher
- Node.js 16+ and npm
- MySQL 8.0+
- Maven 3.6+

### Backend Setup

1. **Create Database**
```
CREATE DATABASE taskapp;
CREATE USER 'taskapp_user'@'localhost' IDENTIFIED BY 'your_password';
GRANT ALL PRIVILEGES ON taskapp.* TO 'taskapp_user'@'localhost';
FLUSH PRIVILEGES;
```

2. **Configure Application**

Edit `backend/src/main/resources/application.properties`:
```
spring.datasource.url=jdbc:mysql://localhost:3306/taskapp
spring.datasource.username=taskapp_user
spring.datasource.password=your_password
spring.datasource.driver-class-name=com.mysql.cj.jdbc.Driver

spring.jpa.hibernate.ddl-auto=update
spring.jpa.show-sql=true
spring.jpa.properties.hibernate.dialect=org.hibernate.dialect.MySQL8Dialect

server.port=3030

jwt.secret=your-256-bit-secret-key
jwt.expiration=7200000
```

3. **Build and Run**
```
cd backend
./mvnw clean install
./mvnw spring-boot:run
```

Backend will start at: `http://localhost:3030`

### Frontend Setup

1. **Install Dependencies**
```
cd frontend-react
npm install
```

2. **Configure API URL**

Edit `src/api/ApiService.js`:
```
const BASE_URL = "http://localhost:3030/api";
```

3. **Start Development Server**
```
npm start
```

Frontend will start at: `http://localhost:3000`

## Project Structure

### Backend Structure
```
backend/
└── src/main/java/com/phegondev/TasksApp/
    ├── TasksAppApplication.java
    ├── controller/
    │   ├── TaskController.java
    │   └── UserController.java
    ├── dto/
    │   ├── Response.java
    │   ├── TaskRequest.java
    │   └── UserRequest.java
    ├── entity/
    │   ├── Task.java
    │   └── User.java
    ├── enums/
    │   ├── Priority.java
    │   └── Role.java
    ├── repo/
    │   ├── TaskRepository.java
    │   └── UserRepository.java
    ├── security/
    │   ├── JwtUtils.java
    │   ├── AuthFilter.java
    │   └── SecurityFilterConfig.java
    └── service/
        ├── TaskService.java
        └── UserService.java
```

### Frontend Structure
```
frontend-react/
└── src/
    ├── App.js
    ├── App.css
    ├── api/
    │   └── ApiService.js
    ├── common/
    │   ├── Footer.jsx
    │   └── Navbar.jsx
    ├── guard/
    │   └── Guard.js
    └── pages/
        ├── Login.jsx
        ├── Register.jsx
        ├── TaskFormPage.jsx
        └── TasksPage.jsx
```

## API Endpoints

### Authentication

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/auth/register` | Register new user |
| POST | `/api/auth/login` | User login |

### Task Management (Requires Authentication)

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/tasks` | Get all tasks |
| POST | `/api/tasks` | Create new task |
| GET | `/api/tasks/{id}` | Get task by ID |
| PUT | `/api/tasks` | Update task |
| DELETE | `/api/tasks/{id}` | Delete task |
| GET | `/api/tasks/status?completed={boolean}` | Filter by status |
| GET | `/api/tasks/priority?priority={HIGH\|MEDIUM\|LOW}` | Filter by priority |

### Example API Request

**Register User:**
```
curl -X POST http://localhost:3030/api/auth/register \
  -H "Content-Type: application/json" \
  -d '{
    "username": "johndoe",
    "email": "john@example.com",
    "password": "securePassword123"
  }'
```

**Create Task (with JWT token):**
```
curl -X POST http://localhost:3030/api/tasks \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer YOUR_JWT_TOKEN" \
  -d '{
    "title": "Complete project",
    "description": "Finish documentation",
    "dueDate": "2025-10-30",
    "priority": "HIGH"
  }'
```

## Database Schema

### User Table
```
CREATE TABLE user (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(50) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    role VARCHAR(20) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

### Task Table
```
CREATE TABLE task (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    user_id BIGINT NOT NULL,
    title VARCHAR(100) NOT NULL,
    description TEXT,
    due_date DATE,
    priority VARCHAR(20) NOT NULL,
    completed BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES user(id) ON DELETE CASCADE
);
```

## Usage

### 1. Register an Account
- Navigate to `http://localhost:3000/register`
- Fill in username, email, and password
- Click "Register"

### 2. Login
- Navigate to `http://localhost:3000`
- Enter your email and password
- Click "Login"

### 3. Manage Tasks
- **Add Task**: Click "Add Task" button, fill in details, and submit
- **View Tasks**: All tasks are displayed on the main page
- **Filter Tasks**: Use filter buttons for completed/pending/priority
- **Edit Task**: Click "Edit" button on any task
- **Delete Task**: Click "Delete" button (with confirmation)
- **Mark Complete**: Check the completed checkbox when editing

## Security Features

- **JWT Authentication**: Stateless token-based authentication with 2-hour expiration
- **Password Encryption**: BCrypt hashing for all passwords
- **Route Protection**: Protected routes require valid JWT token
- **User Isolation**: Users can only access their own tasks
- **CORS Configuration**: Controlled cross-origin access
- **Input Validation**: Both client-side and server-side validation

## Testing

### Backend Testing
```
cd backend
./mvnw test
```

### Frontend Testing
```
cd frontend-react
npm test
```

### API Testing with Postman
Import the Postman collection (if provided) or test endpoints manually using the API documentation above.

## Deployment

### Production Build

**Backend:**
```
cd backend
./mvnw clean package
java -jar target/TasksApp-0.0.1-SNAPSHOT.jar
```

**Frontend:**
```
cd frontend-react
npm run build
# Deploy the build/ folder to your web server
```

## Future Enhancements

- 📎 File attachments for tasks
- 🤝 Task sharing and collaboration
- 📧 Email notifications
- 📊 Analytics and productivity reports
- 📱 Mobile applications (iOS/Android)
- 🌙 Dark mode theme
- 🌍 Multi-language support
- 🔄 Recurring tasks
- 🏷️ Task categories and tags

## Troubleshooting

### Common Issues

**Backend won't start:**
- Check if MySQL is running
- Verify database credentials in `application.properties`
- Ensure port 3030 is not in use

**Frontend can't connect to backend:**
- Verify backend is running on port 3030
- Check CORS configuration
- Ensure API URL is correct in `ApiService.js`

**Login fails:**
- Verify user exists in database
- Check password encryption is working
- Review JWT secret key configuration

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## Contact

**Project Repository:** [GitHub URL]  
**Developer:** Your Name  
**Email:** your.email@example.com

## Acknowledgments

- Spring Boot Documentation
- React Documentation
- JWT.io
- All contributors and testers

---

<div align="center">

**Built with ❤️ using Spring Boot and React**

⭐ Star this repository if you find it helpful!

</div>
```

Simply copy this entire markdown code and paste it into a file named `README.md` in your project root directory. You can customize the following sections:

- Replace `[GitHub URL]` with your actual GitHub repository URL
- Replace `Your Name` with your actual name
- Replace `your.email@example.com` with your email
- Add actual screenshots in the Screenshots section if you want

The markdown will render beautifully on GitHub, GitLab, or any markdown viewer!
