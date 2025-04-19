# rbac-user-auth

A Node.js and Express.js application implementing Role-Based Access Control (RBAC) with user authentication and authorization. Users can register, log in, and are assigned roles like Admin, Client, or Moderator to manage access to different features of the application.

---

## 🎯 Project Description

**rbac-user-auth** is a robust web application that implements authentication and authorization using Role-Based Access Control (RBAC) principles with session-based login using `express-session`.

---

## 🛠️ Tech Stack

- Node.js  
- Express.js  
- MongoDB & Mongoose  
- EJS (Embedded JavaScript templates)  
- bcryptjs  
- express-session & connect-flash  

---

## 💡 Why These Technologies?

- **Node.js**: Fast and scalable backend runtime  
- **Express.js**: Lightweight framework for routing and middleware  
- **MongoDB**: Flexible NoSQL database for user and role data  
- **EJS**: Server-side rendering for dynamic views  
- **express-session**: Simple and secure session management  

---

## ⚠️ Challenges Faced

- Designing flexible yet secure role-based access control  
- Handling authentication state securely via sessions  
- Displaying user-specific UI using EJS conditionals  

---

## 📑 Table of Contents

- [Installation](#-installation)
- [Usage](#-usage)
- [Features](#-features)
- [Credits](#-credits)
- [Contributing](#-contributing)
- [Testing](#-testing)

---

## 💻 Installation

### Prerequisites

- Node.js (v14 or higher)  
- MongoDB installed locally or MongoDB Atlas (for cloud)

### Steps
# 1. Clone the repository
git clone https://github.com/Sunidhi23garg/rbac-user-auth.git  
cd rbac-user-auth

# 2. Create environment variables
# Create a `.env` file in the root and add:
PORT=9000  
MONGO_URI=mongodb://localhost:27017/rbac_auth  
SESSION_SECRET=your_session_secret

# 3. Install dependencies
npm install

# 4. Start the server with `npm run dev`  
Then visit: [http://localhost:9000](http://localhost:9000)

🖥️ Usage
- Register via /register with a username, email, and password
- Log in via /login
- Role-specific pages are shown based on assigned role (Admin/ CLient/ Moderator)
- Admins can manage users


## 🚀 Features

- User registration and login
- Secure password hashing with bcrypt
- Flash messages for alerts
- Role-based route protection
- Admin dashboard to manage users
- Error handling for 404 and access denied pages
- Logout functionality

## 🙌 Credits
This project was developed by:
Sunidhi Garg – Lead Developer  
GitHub: @Sunidhi23garg

Special thanks to:

- Node.js, Express, and MongoDB documentation
- Community tutorials on implementing RBAC

## 🤝 Contributing

You're most welcome to contribute to this project! Here’s how you can help:

- ✅ Fix bugs or issues you come across  
- ✨ Add new features or improve existing ones  
- 📝 Help improve the documentation  
- 🎨 Enhance the UI or styling  
- 🧪 Write or improve tests  
- 📦 Suggest better structure or optimizations  

Feel free to explore the code, experiment, and make it better.
Every contribution matters — big or small! 💖

## 🧪 Testing

You can add unit and integration tests to ensure the application works correctly.

### 🔧 Suggested Tools

- [Jest](https://jestjs.io/)  
- [Supertest](https://github.com/visionmedia/supertest)

---

### 🧪 Example Test (Basic)

const request = require('supertest');  
const app = require('../app');

test('GET / should return status 200', async () => {
  const response = await request(app).get('/');
  expect(response.status).toBe(200);
});
