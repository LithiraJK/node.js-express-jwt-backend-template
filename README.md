# Node.js Express JWT Backend Template

A production-ready template for building modern Node.js backend applications with TypeScript, Express.js, JWT authentication, and MongoDB. This template provides a solid foundation and boilerplate code for quickly starting new backend projects with authentication, role-based access control, and clean architecture.

## 🚀 Template Features

- **📦 Ready-to-Use Boilerplate**: Complete project structure with all essential components
- **🔷 TypeScript**: Full TypeScript support with CommonJS modules and strict type checking
- **🔐 JWT Authentication**: Complete authentication system with token-based security
- **👥 Role-Based Access Control**: Multi-role system (Customer, Admin, Super Admin)
- **🗄️ MongoDB Integration**: Pre-configured Mongoose models and database connection
- **🛡️ Security Features**: Password hashing with bcryptjs, JWT tokens, and secure configurations
- **⚡ Development Ready**: Hot-reload development server with ts-node-dev
- **🏗️ Clean Architecture**: Organized folder structure following MVC best practices
- **🔧 Environment Configuration**: Centralized environment variable management with validation
- **🌐 CORS Support**: Pre-configured CORS middleware for cross-origin requests
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
   NODE_ENV=development
   PORT=3000
   HOST=localhost

   # Database (Replace with your MongoDB connection string)
   MONGODB_URI=mongodb://localhost:27017/your-database-name

   # Super Admin Credentials (Customize these - REQUIRED)
   SUPERADMIN_EMAIL=admin@yourdomain.com
   SUPERADMIN_PASSWORD=your-secure-admin-password

   # JWT Configuration (Generate a secure secret - REQUIRED)
   JWT_SECRET=your-jwt-secret-key-here
   JWT_EXPIRES_IN=7d

   # Security
   BCRYPT_ROUNDS=10

   # CORS Configuration
   CORS_ORIGIN=*
   ```

   **⚠️ Important**: `MONGODB_URI` and `JWT_SECRET` are required and validated on startup.

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
├── config/              # Configuration files
│   └── env.ts           # Environment variables with validation
├── controllers/         # Request handlers and business logic
│   └── auth.controller.ts
├── middlewares/         # Custom middleware functions
│   ├── auth.middleware.ts
│   └── role.middleware.ts
├── models/              # Database models and schemas
│   └── user.model.ts
├── routes/              # API route definitions
│   └── auth.routes.ts
├── services/            # Business logic services (expandable)
├── utils/               # Utility functions
│   └── jwt.util.ts
├── validators/          # Request validation schemas (expandable)
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
- CommonJS module system
- Strict type checking enabled
- ESM interoperability
- Source maps for debugging

### Dependencies

**Production Dependencies:**
- `express` (v5.1.0): Fast, unopinionated web framework
- `mongoose` (v8.19.1): MongoDB object modeling tool
- `bcryptjs` (v3.0.2): Password hashing library
- `jsonwebtoken` (v9.0.2): JWT implementation for authentication
- `dotenv` (v17.2.3): Environment variable loader
- `cors` (v2.8.5): Cross-Origin Resource Sharing middleware

**Development Dependencies:**
- `typescript` (v5.9.3): TypeScript compiler
- `ts-node-dev` (v2.0.0): Development server with hot reload
- `ts-node` (v10.9.2): TypeScript execution environment
- `@types/*`: Type definitions for TypeScript

## 🚦 Initial Setup

On first run, the application automatically:
1. Validates required environment variables (MONGODB_URI, JWT_SECRET)
2. Connects to MongoDB
3. Creates a Super Admin account using credentials from `.env` (if it doesn't exist)
4. Sets up the database schema

**Note**: The super admin account will only be created once. If a super admin already exists, the system will skip creation.

## 🛡️ Security Features

- **Password Hashing**: Using bcryptjs with configurable salt rounds (default: 10)
- **JWT Token Authentication**: Secure token-based authentication with configurable expiration
- **Role-Based Access Control**: Middleware for protecting routes by user roles
- **Environment Variable Protection**: Centralized config with runtime validation
- **CORS Configuration**: Configurable cross-origin resource sharing
- **Input Validation**: Ready-to-extend validators directory for request validation

## 📝 API Documentation

The API follows RESTful conventions and returns JSON responses. All protected routes require a valid JWT token in the Authorization header:

```
Authorization: Bearer <your-jwt-token>
```

## 🎯 Using This Template

### What's Included

This template provides:
- ✅ Complete authentication system with JWT (login, register)
- ✅ User registration and admin registration endpoints
- ✅ Role-based middleware for route protection (Customer, Admin, SuperAdmin)
- ✅ MongoDB integration with Mongoose ODM
- ✅ TypeScript configuration with strict type checking
- ✅ Development and production build scripts
- ✅ Centralized environment configuration with validation
- ✅ Security best practices (password hashing, JWT tokens)
- ✅ CORS middleware pre-configured
- ✅ Clean project structure following MVC pattern
- ✅ Auto-creation of super admin on first run

### Customization Guide

1. **Update Project Information**
   - Change the project name and description in `package.json`
   - Update the database name in your `MONGODB_URI` connection string
   - Configure `CORS_ORIGIN` for your specific domain(s)

2. **Extend the User Model**
   - Add additional fields to the User schema in `src/models/user.model.ts`
   - Update registration/login controllers in `src/controllers/auth.controller.ts`
   - Modify the JWT payload in `src/utils/jwt.util.ts` if needed

3. **Add New Routes**
   - Create new route files in `src/routes/`
   - Add corresponding controllers in `src/controllers/`
   - Register routes in `src/index.ts` (e.g., `app.use("/api/v1/your-route", yourRouter)`)

4. **Add Middleware**
   - Create custom middleware in `src/middlewares/`
   - Use existing `auth.middleware.ts` and `role.middleware.ts` as examples
   - Apply middleware to routes as needed

5. **Add Services**
   - Create service files in `src/services/` for business logic
   - Keep controllers thin by moving complex logic to services

6. **Add Validators**
   - Create validation schemas in `src/validators/`
   - Use libraries like `joi` or `express-validator` for request validation

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
   - Ensure MongoDB is running locally or your MongoDB Atlas cluster is accessible
   - Verify your `MONGODB_URI` in the .env file is correct
   - Check network connectivity and firewall settings

2. **Port Already in Use**
   - Change the `PORT` value in your .env file
   - On Windows: `netstat -ano | findstr :<PORT>` to find and kill the process

3. **JWT Token Issues**
   - Ensure `JWT_SECRET` is set in your environment variables
   - Check token expiration settings (`JWT_EXPIRES_IN`)
   - Verify the Authorization header format: `Bearer <token>`

4. **Environment Variable Validation Error**
   - The app validates `MONGODB_URI` and `JWT_SECRET` on startup
   - Ensure these variables are set in your `.env` file
   - Check for typos in environment variable names


## ⭐ Template Usage

If you found this template helpful, please consider giving it a star! Feel free to customize it according to your project needs.

### Template Roadmap

Future improvements planned for this template:
- [ ] Email verification system
- [ ] Password reset functionality  
- [ ] Refresh token implementation
- [ ] API rate limiting middleware
- [ ] Request validation with express-validator or joi
- [ ] Swagger/OpenAPI documentation
- [ ] Docker configuration with docker-compose
- [ ] Unit and integration tests with Jest
- [ ] Logging system with Winston or Pino
- [ ] Database seeding scripts
- [ ] File upload handling with multer
- [ ] Error handling middleware

---

**📋 Template for Node.js + Express.js + JWT + TypeScript + MongoDB**

**Version:** 1.0.0  
**License:** ISC

Made with ❤️ for the developer community