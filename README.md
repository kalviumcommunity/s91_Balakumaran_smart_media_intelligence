# 🧠 Smart Intelligence Media

> An AI-powered media content intelligence platform designed to help media organizations manage content, understand audience preferences, analyze content performance, and make data-driven editorial decisions.

---

## 📌 Project Overview

Media organizations generate large volumes of content every day, but they often lack effective tools to understand **what audiences prefer, how content performs, and what content should be created next**.

**Smart Intelligence Media** solves this problem by providing a full-stack platform that combines:

* 📰 Content management
* 📊 Audience analytics
* 🤖 AI-powered content intelligence
* 🔐 Secure authentication
* 📁 Media file uploads
* ❤️ Likes, views, and comments
* 🎯 Content recommendations
* 📈 Performance analytics
* 🚀 Cloud and Docker deployment

The platform enables media teams to make better editorial decisions using data and AI-generated insights.

---

## 🎯 Problem Statement

Media organizations produce large amounts of articles and multimedia content. However, identifying audience interests and measuring content effectiveness can be difficult when information is spread across different systems.

A centralized content intelligence platform can help organizations:

* Understand audience preferences
* Identify high-performing content
* Analyze engagement
* Categorize content automatically
* Generate summaries and headlines
* Recommend relevant content
* Support data-driven editorial decisions

---

## 💡 Project Objective

The main objective of Smart Intelligence Media is to develop a scalable full-stack web application that:

1. Manages media content.
2. Provides secure user authentication.
3. Stores and manages structured content data.
4. Tracks views, likes, and comments.
5. Provides audience and content analytics.
6. Uses AI to analyze and enhance content.
7. Provides personalized content recommendations.
8. Supports media file uploads.
9. Provides documented and tested REST APIs.
10. Can be deployed using cloud platforms and Docker.

---

# 🚀 Key Features

## 👤 User Management

* User registration
* Username and password authentication
* Secure password hashing
* User profile management
* JWT-based authentication
* Protected API routes

## 🔐 Authentication & Authorization

* Username/password login
* Password hashing using bcrypt
* JWT token generation
* JWT verification middleware
* Protected routes
* Role-based access control where required
* Google third-party authentication

## 📰 Content Management

Users with appropriate permissions can:

* Create content
* View content
* Update content
* Delete content
* Categorize content
* Add tags
* Upload media
* Manage content metadata

### CRUD Flow

```text
CREATE
   ↓
READ
   ↓
UPDATE
   ↓
DELETE
```

---

# 📊 Audience Analytics

The platform tracks user interactions with content, including:

* Views
* Likes
* Comments
* Reading/activity history
* Content categories
* Engagement patterns

The analytics dashboard can provide:

* Total users
* Total content
* Total views
* Total likes
* Most popular content
* Most popular categories
* Audience preferences
* Content engagement
* Top-performing content

---

# 🤖 AI-Powered Features

Smart Intelligence Media includes AI-assisted functionality to improve media workflows.

### 1. Content Summarization

Automatically generate concise summaries from longer articles.

```text
Article
   ↓
AI Processing
   ↓
Short Summary
```

### 2. Automatic Content Categorization

AI can identify appropriate categories such as:

* Technology
* Sports
* Business
* Entertainment
* Politics
* Education
* Science

### 3. Sentiment Analysis

Analyze the overall sentiment of content:

```text
Positive
Neutral
Negative
```

### 4. AI Content Recommendations

Recommendations can consider:

* User interests
* Views
* Likes
* Reading history
* Categories
* Content engagement

```text
User Activity
      +
Content Data
      ↓
AI Recommendation Engine
      ↓
Recommended Content
```

### 5. AI Headline Generation

Generate alternative headlines for articles to help editors improve content presentation.

### 6. Audience Insights

AI-assisted analysis can identify:

* Popular content categories
* High-engagement topics
* Audience interests
* Top-performing content
* Potential content opportunities

---

# 📁 File Upload

The platform supports media file uploads such as:

* Images
* Videos
* Documents

### Upload Flow

```text
Select File
     ↓
React Frontend
     ↓
Express API
     ↓
Cloud/File Storage
     ↓
File URL
     ↓
PostgreSQL
```

For production deployments, large media files should be stored using dedicated cloud/object storage rather than directly inside PostgreSQL.

---

# 🗄️ Database Design

The project uses **PostgreSQL** with **Prisma ORM**.

## Main Entities

```text
User
Content
Category
Tag
View
Like
Comment
Recommendation
File
```

## Entity Relationships

```text
User
 │
 ├───────────────> Content
 │
 ├───────────────> Comments
 │
 ├───────────────> Likes
 │
 ├───────────────> Views
 │
 └───────────────> Recommendations

Content
 │
 ├───────────────> Category
 ├───────────────> Tags
 ├───────────────> Comments
 ├───────────────> Likes
 ├───────────────> Views
 └───────────────> Files
```

### Relationship Summary

| Relationship       | Type         |
| ------------------ | ------------ |
| User → Content     | One-to-Many  |
| User → Comments    | One-to-Many  |
| User → Likes       | One-to-Many  |
| User → Views       | One-to-Many  |
| Content → Category | Many-to-One  |
| Content → Tags     | Many-to-Many |
| Content → Comments | One-to-Many  |
| Content → Likes    | One-to-Many  |
| Content → Views    | One-to-Many  |
| Content → Files    | One-to-Many  |

---

# 🛠️ Technology Stack

## Frontend

* React.js
* Vite
* React Router
* Axios
* CSS / Tailwind CSS

## Backend

* Node.js
* Express.js
* REST API

## Database

* PostgreSQL
* Prisma ORM

## Authentication

* bcrypt
* JSON Web Tokens (JWT)
* Google OAuth

## File Management

* Multer
* Cloudinary / Object Storage

## Testing

* Jest
* Supertest
* Bruno

## DevOps

* Docker
* Docker Compose
* GitHub

## Deployment

* Vercel / Netlify — Frontend
* Render / Railway — Backend
* PostgreSQL cloud database

## AI

* LLM API
* AI-powered summarization
* Classification
* Sentiment analysis
* Recommendations

---

# 🏗️ System Architecture

```text
                         SMART INTELLIGENCE MEDIA
                                  │
                  ┌───────────────┴───────────────┐
                  │                               │
          React Frontend                     AI Engine
                  │                               │
        ┌─────────┼─────────┐             ┌───────┼────────┐
        │         │         │             │       │        │
    Dashboard  Content   Analytics     Summary  Sentiment  AI
               Management              Analysis  Analysis   Recommendations
        │         │         │
        └─────────┴─────────┘
                  │
                  ↓
             Express REST API
                  │
        ┌─────────┼─────────┐
        │         │         │
      Auth      Content   Analytics
      JWT       APIs
        │         │         │
        └─────────┼─────────┘
                  ↓
                Prisma
                  ↓
             PostgreSQL
                  │
        ┌─────────┴─────────┐
        │                   │
      Users              Content
                            │
              ┌─────────────┼─────────────┐
              │             │             │
           Category        Tags       Engagement
                                      │
                               ┌──────┼──────┐
                               │      │      │
                             Views  Likes Comments
```

---

# 📂 Project Structure

```text
smart-intelligence-media/
│
├── client/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── services/
│   │   ├── hooks/
│   │   ├── context/
│   │   └── App.jsx
│   └── package.json
│
├── server/
│   ├── src/
│   │   ├── controllers/
│   │   ├── routes/
│   │   ├── middleware/
│   │   ├── services/
│   │   ├── utils/
│   │   └── server.js
│   └── package.json
│
├── prisma/
│   ├── schema.prisma
│   └── seed.js
│
├── docs/
│   └── api/
│
├── tests/
│   ├── auth.test.js
│   ├── content.test.js
│   └── api.test.js
│
├── docker/
│
├── .env.example
├── .gitignore
├── docker-compose.yml
├── README.md
└── package.json
```

---

# 🔌 REST API

## Authentication

| Method | Endpoint             | Description           |
| ------ | -------------------- | --------------------- |
| POST   | `/api/auth/register` | Register user         |
| POST   | `/api/auth/login`    | Login user            |
| POST   | `/api/auth/google`   | Google authentication |

## Users

| Method | Endpoint         | Description |
| ------ | ---------------- | ----------- |
| GET    | `/api/users`     | Get users   |
| GET    | `/api/users/:id` | Get user    |
| PUT    | `/api/users/:id` | Update user |

## Content

| Method | Endpoint           | Description       |
| ------ | ------------------ | ----------------- |
| GET    | `/api/content`     | Get all content   |
| GET    | `/api/content/:id` | Get content by ID |
| POST   | `/api/content`     | Create content    |
| PUT    | `/api/content/:id` | Update content    |
| DELETE | `/api/content/:id` | Delete content    |

## Categories

| Method | Endpoint              | Description     |
| ------ | --------------------- | --------------- |
| GET    | `/api/categories`     | Get categories  |
| POST   | `/api/categories`     | Create category |
| PUT    | `/api/categories/:id` | Update category |
| DELETE | `/api/categories/:id` | Delete category |

## Engagement

```text
POST /api/comments
POST /api/likes
POST /api/views
```

## Analytics

```text
GET /api/analytics
GET /api/analytics/content
GET /api/analytics/audience
```

## Recommendations

```text
GET /api/recommendations
```

---

# 🔑 Authentication Flow

```text
                 USER
                  │
                  ↓
              Login Page
                  │
                  ↓
           Email + Password
                  │
                  ↓
              Express API
                  │
                  ↓
          Verify bcrypt hash
                  │
                  ↓
             Generate JWT
                  │
                  ↓
          Return access token
                  │
                  ↓
            React Frontend
                  │
                  ↓
       Protected API Requests
                  │
                  ↓
          JWT Middleware
                  │
            ┌─────┴─────┐
            │           │
          Valid       Invalid
            │           │
            ↓           ↓
          Allow       Reject
```

---

# 🔒 Security

The application follows basic security practices including:

* Password hashing with bcrypt
* JWT-based authentication
* Protected API routes
* Environment variables for secrets
* Input validation
* CORS configuration
* Authentication middleware
* Authorization checks
* Secure error handling
* `.env` excluded from Git
* No plain-text passwords

> Never commit API keys, database passwords, JWT secrets, or OAuth credentials to GitHub.

---

# 🧪 Testing

Testing is performed using **Jest**, **Supertest**, and **Bruno**.

## Automated Tests

Example test cases:

```text
✓ User registration
✓ User login
✓ Invalid password rejection
✓ GET content
✓ POST content
✓ PUT content
✓ DELETE content
✓ Unauthorized request rejection
✓ Protected route access
✓ Database operations
```

Run tests:

```bash
npm test
```

---

# 📮 API Testing with Bruno

Bruno collections are organized into:

```text
Smart Intelligence Media API
│
├── Authentication
│   ├── Register
│   ├── Login
│   └── Google Login
│
├── Users
│
├── Content
│   ├── Create
│   ├── Get All
│   ├── Get One
│   ├── Update
│   └── Delete
│
├── Comments
├── Likes
├── Analytics
└── Recommendations
```

Expected HTTP responses include:

```text
200 OK
201 Created
400 Bad Request
401 Unauthorized
403 Forbidden
404 Not Found
500 Internal Server Error
```

---

# 🐳 Docker

The application can be containerized using Docker.

## Services

```text
Docker Compose
│
├── Frontend
├── Backend
└── PostgreSQL
```

### Build

```bash
docker compose build
```

### Run

```bash
docker compose up
```

### Check containers

```bash
docker ps
```

### Stop

```bash
docker compose down
```

---

# ⚙️ Local Installation

## 1. Clone Repository

```bash
git clone https://github.com/<your-username>/smart-intelligence-media.git
cd smart-intelligence-media
```

## 2. Install Dependencies

Frontend:

```bash
cd client
npm install
```

Backend:

```bash
cd ../server
npm install
```

## 3. Configure Environment Variables

Create:

```text
.env
```

Example:

```env
DATABASE_URL="postgresql://username:password@localhost:5432/smart_media"
JWT_SECRET="your-secret-key"

GOOGLE_CLIENT_ID="your-google-client-id"
GOOGLE_CLIENT_SECRET="your-google-client-secret"

AI_API_KEY="your-ai-api-key"

CLOUDINARY_URL="your-cloudinary-url"

PORT=5000
```

## 4. Database Setup

From the backend/project root:

```bash
npx prisma generate
```

Run migrations:

```bash
npx prisma migrate dev
```

Optional seed:

```bash
npx prisma db seed
```

## 5. Start Backend

```bash
cd server
npm run dev
```

Backend:

```text
http://localhost:5000
```

## 6. Start Frontend

Open another terminal:

```bash
cd client
npm run dev
```

Frontend:

```text
http://localhost:5173
```

---

# 🌐 Deployment

## Frontend

Recommended platforms:

* Vercel
* Netlify

Set:

```env
VITE_API_URL=https://your-backend-url
```

## Backend

Recommended platforms:

* Render
* Railway

Configure:

```env
DATABASE_URL=
JWT_SECRET=
GOOGLE_CLIENT_ID=
GOOGLE_CLIENT_SECRET=
AI_API_KEY=
CLOUDINARY_URL=
```

## Database

Use a managed PostgreSQL database for production.

---

# 📋 GitHub Project Roadmap

The project is divided into 22 development tasks:

```text
01. GitHub Repository Setup
02. React Application Initialization
03. React Component Development
04. Database Schema Design
05. Database Read & Write Operations
06. GET API Implementation
07. POST API Implementation
08. PUT API Implementation
09. Update & Delete Functionality
10. Entity Relationship Implementation
11. Username & Password Authentication
12. JWT-Based Authorization
13. Third-Party Authentication Integration
14. File Upload Functionality
15. API Documentation using Bruno
16. Backend Deployment
17. Frontend Deployment
18. Automated Testing using Jest
19. Dockerized Application Deployment
20. AI-Assisted Feature Integration
21. Final Project Integration
22. Final Project Submission & Technical Defense
```

---

# 📌 GitHub Project Board

Use the following workflow:

```text
BACKLOG
   ↓
TO DO
   ↓
IN PROGRESS
   ↓
TESTING
   ↓
REVIEW
   ↓
DONE
```

Each development task should be:

```text
GitHub Issue
     ↓
Development
     ↓
Commit
     ↓
Testing
     ↓
Pull Request / Review
     ↓
Merge
     ↓
Close Issue
```

---

# 🏷️ Recommended GitHub Labels

```text
bug
feature
frontend
backend
database
authentication
security
analytics
AI
testing
documentation
deployment
docker
high-priority
```

---

# 🗓️ Development Timeline

## Week 1

* GitHub repository
* React initialization
* UI components
* Routing

## Week 2

* PostgreSQL
* Prisma
* Database schema
* Relationships

## Week 3

* GET APIs
* POST APIs
* PUT APIs
* DELETE APIs

## Week 4

* Authentication
* bcrypt
* JWT
* Protected routes

## Week 5

* Google OAuth
* File upload
* Bruno API documentation

## Week 6

* Frontend/backend integration
* Dashboard
* Analytics
* Content management

## Week 7

* Jest testing
* Security testing
* Bug fixing

## Week 8

* AI integration
* Docker
* Deployment
* Final testing

## Final Stage

* README
* Documentation
* Screenshots
* Demo preparation
* Technical defense

---

# ✅ Final Submission Checklist

## GitHub

* [ ] Repository created
* [ ] README completed
* [ ] GitHub Project created
* [ ] Issues created
* [ ] Labels added
* [ ] Commits organized
* [ ] `.env` excluded
* [ ] Source code pushed

## Frontend

* [ ] React initialized
* [ ] Components completed
* [ ] Routing completed
* [ ] Forms completed
* [ ] Dashboard completed
* [ ] API integration completed
* [ ] Responsive design completed

## Backend

* [ ] Express server
* [ ] REST APIs
* [ ] Controllers
* [ ] Routes
* [ ] Middleware
* [ ] Validation
* [ ] Error handling
* [ ] Authentication
* [ ] Authorization

## Database

* [ ] PostgreSQL
* [ ] Prisma
* [ ] Schema
* [ ] Relationships
* [ ] Migrations
* [ ] CRUD operations
* [ ] Seed data

## Security

* [ ] bcrypt
* [ ] JWT
* [ ] Protected routes
* [ ] Input validation
* [ ] CORS
* [ ] Environment variables
* [ ] Secure error handling

## Testing

* [ ] Bruno API testing
* [ ] Jest testing
* [ ] Authentication tests
* [ ] CRUD tests
* [ ] Authorization tests
* [ ] Error tests

## Deployment

* [ ] Frontend deployed
* [ ] Backend deployed
* [ ] Database deployed
* [ ] Environment variables configured
* [ ] Docker build successful
* [ ] Production testing completed

## AI

* [ ] AI API connected
* [ ] Summarization
* [ ] Categorization
* [ ] Sentiment analysis
* [ ] Recommendations
* [ ] AI error handling

---

# 🎓 Technical Defense Preparation

Be prepared to explain:

### Frontend

* Why React?
* Why Vite?
* Component architecture
* React Router
* API integration
* State management

### Backend

* Why Node.js?
* Why Express?
* REST API architecture
* Middleware
* Error handling
* Authentication

### Database

* Why PostgreSQL?
* Why Prisma?
* Primary keys
* Foreign keys
* Relationships
* Normalization
* Migrations

### Security

* Why bcrypt?
* Why JWT?
* Authentication vs authorization
* Protected routes
* Environment variables
* CORS

### AI

* Why AI is needed
* How prompts/API calls work
* Summarization
* Classification
* Sentiment analysis
* Recommendation logic
* Handling AI failures

### DevOps

* Why Docker?
* Dockerfile
* Docker Compose
* Frontend deployment
* Backend deployment
* Database deployment

### Testing

* Why Jest?
* Unit testing
* API testing
* Integration testing
* Bruno
* Error-case testing

---

# 🚀 Future Enhancements

Possible future improvements include:

* Real-time analytics
* Advanced recommendation algorithms
* Multi-language content analysis
* Automated editorial workflows
* Advanced AI fact-checking assistance
* Trend detection
* Social media analytics integration
* Real-time notifications
* Advanced role-based access control
* Mobile application
* Predictive content performance analytics

---

# 👨‍💻 Project Status

```text
🚧 Under Development
```

The project is being developed incrementally according to the 22-stage project roadmap.

---

# 📄 License

This project is developed for educational and academic purposes.

---

## ⭐ Smart Intelligence Media

**Turning media data into intelligent insights.**
