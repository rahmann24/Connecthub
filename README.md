# ConnectHub Backend

ConnectHub Backend is the server-side component of ConnectHub, a social networking application. It provides the backend API endpoints to support various functionalities of the application. This project is built using Node.js and utilizes technologies like Express.js, MongoDB, Mongoose, bcrypt, and JSON Web Tokens (JWT).

## Features

- User Management: Register and login users, with secure password storage using bcrypt.
- Posts and Comments: Create, retrieve, update, and delete posts. Add and delete comments on posts.
- User Interaction: Follow/unfollow other users, like and dislike posts, retrieve user activity feeds.
- Error Handling and Testing: Proper error handling, thorough testing of implemented functionalities.

## Technologies Used

- Node.js: Backend JavaScript runtime environment.
- Express.js: Web application framework for Node.js.
- MongoDB: NoSQL database for storing user profiles, posts, and comments.
- Mongoose: Object Data Modeling (ODM) library for MongoDB.
- bcrypt: Library for secure password hashing.
- JSON Web Token (JWT): Authentication mechanism for user login.

## Installation and Setup

1. Clone the repository:

```bash
git clone https://github.com/hemanth0615/ConnectHub.git


```
2. Install the dependencies:

```
cd server

npm install

```

3. Start the server:
```
node index.js

```
## API Documentation

For detailed information on the available API endpoints and how to interact with them, refer to the [API Documentation](api-docs.md) file.

## Contributing

Contributions are welcome! If you find any issues or have suggestions for improvements, please open an issue or submit a pull request.

