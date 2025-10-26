# Node.js Express JWT Backend Template

A production-ready template for building modern Node.js backend applications with TypeScript, Express.js, JWT authentication, and MongoDB. This template provides a solid foundation and boilerplate code for quickly starting new backend projects with authentication, role-based access control, and clean architecture.

## 🚀 Template Features

- **📦 Ready-to-Use Boilerplate**: Complete project structure with all essential components
- **🔷 TypeScript**: Full TypeScript support with ES modules and modern configuration
- **🔐 JWT Authentication**: Complete authentication system with token-based security
- **👥 Role-Based Access Control**: Multi-role system (Customer, Admin, Super Admin)
- **🗄️ MongoDB Integration**: Pre-configured Mongoose models and database connection
- **🛡️ Security Features**: Password hashing, input validation, and secure configurations
- **⚡ Development Ready**: Hot-reload development server with TypeScript compilation
- **🏗️ Clean Architecture**: Organized folder structure following best practices
- **🔧 Environment Configuration**: Secure environment variable management with .env
- **📚 Comprehensive Documentation**: Well-documented code and API endpoints

## 📋 Prerequisites

Before running this application, make sure you have the following installed:

- Node.js (v18 or higher)
- npm or yarn
- MongoDB (local or MongoDB Atlas)

## 🛠️ Quick Start

### Using This Template

1. **Use this template or clone the repository**
   ```bash
   # Option 1: Use GitHub template (recommended)
   # Click "Use this template" button on GitHub

   # Option 2: Clone the repository
   git clone <repository-url>
   cd your-project-name
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Environment Setup**
   Create a `.env` file in the root directory and customize these variables:
   ```env
   # Server Configuration
   PORT=3000
   HOST=localhost

   # Database (Replace with your MongoDB connection string)
   MONGO_URI=mongodb://localhost:27017/your-database-name

   # Super Admin Credentials (Customize these)
   SUPER_ADMIN_EMAIL=admin@yourdomain.com
   SUPER_ADMIN_PW=your-secure-admin-password

   # JWT Configuration (Generate a secure secret)
   JWT_SECRET=your-jwt-secret-key-here
   ```

4. **Customize the project**
   - Update `package.json` with your project details
   - Modify the database name in your MongoDB URI
   - Update the super admin credentials
   - Customize the User model and routes as needed

## 🚀 Running the Application

### Development Mode
```bash
npm run dev
```
This will start the server with hot-reload using Node.js watch mode and ts-node.

### Production Mode
```bash
# Build the project
npm run build

# Start the production server
npm start
```

The server will start on `http://localhost:3000` (or your configured port).

## 📁 Project Structure

```
src/
├── controllers/          # Request handlers and business logic
│   └── auth.controller.ts
├── middlewares/          # Custom middleware functions
│   ├── auth.middleware.ts
│   └── role.middleware.ts
├── models/              # Database models and schemas
│   └── user.model.ts
├── routes/              # API route definitions
│   └── auth.routes.ts
├── utils/               # Utility functions
│   └── jwt.util.ts
└── index.ts             # Application entry point
```

## 🔐 Authentication & Authorization

The application implements a role-based authentication system with three user roles:

- **CUSTOMER**: Basic user role
- **ADMIN**: Administrative privileges
- **SUPERADMIN**: Full system access

### Available Endpoints

#### Authentication Routes (`/api/v1/auth`)

- `POST /register` - Register a new customer
- `POST /register-admin` - Register a new admin (requires super admin privileges)
- `POST /login` - User login

#### Request/Response Examples

**User Registration:**
```json
POST /api/v1/auth/register
{
  "email": "user@example.com",
  "firstName": "John",
  "lastName": "Doe",
  "password": "securepassword",
  "profileimg": "https://example.com/profile.jpg"
}
```

**User Login:**
```json
POST /api/v1/auth/login
{
  "email": "user@example.com",
  "password": "securepassword"
}
```

**Login Response:**
```json
{
  "message": "User logged in successfully",
  "data": {
    "id": "user-id",
    "email": "user@example.com",
    "accessToken": "jwt-token",
    "roles": ["CUSTOMER"]
  }
}
```

## 🗄️ Database Models

### User Model
- `email`: String (unique)
- `firstName`: String
- `lastName`: String
- `password`: String (hashed)
- `roles`: Array of roles
- `isBlock`: Boolean
- `profileimg`: String

## 🔧 Configuration

### TypeScript Configuration
The project uses modern TypeScript configuration with:
- ES2020 target
- NodeNext module resolution
- Strict type checking enabled

### Dependencies

**Production Dependencies:**
- `express`: Web framework
- `mongoose`: MongoDB ODM
- `bcryptjs`: Password hashing
- `jsonwebtoken`: JWT implementation
- `dotenv`: Environment configuration

**Development Dependencies:**
- `typescript`: TypeScript compiler
- `ts-node-dev`: Development server
- `@types/*`: Type definitions

## 🚦 Initial Setup

On first run, the application automatically:
1. Connects to MongoDB
2. Creates a Super Admin account (if it doesn't exist)
3. Sets up the database schema

## 🛡️ Security Features

- Password hashing using bcryptjs
- JWT token-based authentication
- Role-based access control
- Environment variable protection
- Input validation and sanitization

## 📝 API Documentation

The API follows RESTful conventions and returns JSON responses. All protected routes require a valid JWT token in the Authorization header:

```
Authorization: Bearer <your-jwt-token>
```

## 🎯 Using This Template

### What's Included

This template provides:
- ✅ Complete authentication system with JWT
- ✅ User registration and login endpoints
- ✅ Role-based middleware for route protection
- ✅ MongoDB integration with Mongoose
- ✅ TypeScript configuration and build setup
- ✅ Development and production scripts
- ✅ Security best practices implementation
- ✅ Clean project structure following MVC pattern

### Customization Guide

1. **Update Project Information**
   - Change the project name in `package.json`
   - Update the database name in your connection string

2. **Extend the User Model**
   - Add additional fields to the User schema in `src/models/user.model.ts`
   - Update registration/login controllers accordingly

3. **Add New Routes**
   - Create new route files in `src/routes/`
   - Add corresponding controllers in `src/controllers/`
   - Register routes in `src/index.ts`

4. **Add Middleware**
   - Create custom middleware in `src/middlewares/`
   - Use existing auth and role middleware as examples

## 🤝 Contributing

Contributions to improve this template are welcome!

1. Fork the project
2. Create your feature branch (`git checkout -b feature/TemplateImprovement`)
3. Commit your changes (`git commit -m 'Add some TemplateImprovement'`)
4. Push to the branch (`git push origin feature/TemplateImprovement`)
5. Open a Pull Request

## 📄 License

This project is licensed under the ISC License.

## 🐛 Troubleshooting

### Common Issues

1. **MongoDB Connection Error**
   - Ensure MongoDB is running
   - Check your MONGO_URI in the .env file

2. **Port Already in Use**
   - Change the PORT in your .env file
   - Kill any processes using the current port

3. **JWT Token Issues**
   - Ensure JWT_SECRET is set in your environment variables
   - Check token expiration settings

## 📞 Support

For support and questions, please create an issue in the repository or contact the development team.

## ⭐ Template Usage

If you found this template helpful, please consider giving it a star! Feel free to customize it according to your project needs.

### Template Roadmap

Future improvements planned for this template:
- [ ] Email verification system
- [ ] Password reset functionality
- [ ] API rate limiting
- [ ] Swagger/OpenAPI documentation
- [ ] Docker configuration
- [ ] Unit and integration tests
- [ ] Logging system with Winston
- [ ] Database migrations

---

**📋 Template for Node.js + Express.js + JWT + TypeScript + MongoDB**

Made with ❤️ for the developer community