# Backend API for Posts Management

This repository contains a simple backend API to manage posts. It provides endpoints for creating posts and retrieving paginated posts using **Node.js**, **Express.js**, and **MongoDB**.

## **Features**
- Create a new post with a title and description.
- Retrieve paginated posts with query-based page navigation.

## **Tech Stack**
- **Node.js**  
- **Express.js**  
- **MongoDB**  
- **Mongoose**
  
## **Endpoints**

### 1. **Create a New Post**

- **URL**: `/api/posts/create`  
- **Method**: `POST`  
- **Request Body**:
  ```json
  {
    "title": "Post Title",
    "description": "Post Description"
  }
  
