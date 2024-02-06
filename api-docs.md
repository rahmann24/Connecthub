User Management API Testing

Register a User

Endpoint: http://localhost:5000/api/auth/register

Method: POST

Registers a new user in the system.


Request

Request Body:

{

  "username": "Sample",
  
  "email": "sampleuser @example.com",
  
  "password": "pass123"
}


Response

Status Code: 200 OK

Response Body:

{

  "message": "User registered successfully"

}


Login

Endpoint: http://localhost:5000/api/auth/login

Method: POST

Logs in an existing user and returns a JWT token for authentication.

Request

Request Body:

{

  "email": "johndoe@example.com",
  
  "password": "password123"

}



Response

Status Code: 200 OK

Response Body:

{

  "token": "<jwt-token>"

}



Get User Profile

Endpoint: http://localhost:5000/api/user/profile

Method: GET

Retrieves the profile information of the authenticated user.

Request

Headers:

Authorization: Bearer <jwt-token>



Response

Status Code: 200 OK

Response Body:

{

  "username": "johnDoe",
  
  "email": "johndoe@example.com"

}



Update User Profile

Endpoint: http://localhost:5000/api/user/profile

Method: PUT

Updates the profile information of the authenticated user.

Request

Headers:

Authorization: Bearer <jwt-token>



Request Body:

{

  "username": "newUsername",
  
  "email": "newemail@example.com"

}



Response

Status Code: 200 OK

Response Body:

{

  "message": "Profile updated successfully"

}



POSTS AND COMMENTS TESTING

Create a Post

URL: POST http://localhost:5000/api/api/posts

Headers:

Content-Type: application/json

Authorization: Bearer <jwt-token>

Request Body:

{

  "title": "New Post",
  
  "content": "This is a new post."

}



Response (Example):

{

  "title": "New Post",
  
  "content": "This is a new post.",
  
  "author": "64b27afae3518362052f0749",
  
  "_id": "64b28d714daf3a5b98f64f7e",
  
  "createdAt": "2023-07-15T12:13:37.173Z",
  
  "updatedAt": "2023-07-15T12:13:37.173Z",
  
  "__v": 0

}





Retrieve all Posts

URL: GET http://localhost:5000/api/posts/api/posts

Response (Example):

[

  {
    
    "title": "Post 1",
    
    "content": "This is the first post.",
    
    "author": "64b27afae3518362052f0749",
    
    "_id": "64b28d714daf3a5b98f64f7e",
    
    "createdAt": "2023-07-15T12:13:37.173Z",
    
    "updatedAt": "2023-07-15T12:13:37.173Z",
    
    "__v": 0
  
  },
  
  {
    
    "title": "Post 2",
    
    "content": "This is the second post.",
    
    "author": "64b27afae3518362052f0749",
    
    "_id": "64b28d714daf3a5b98f64f7f",
    
    "createdAt": "2023-07-15T12:15:21.562Z",
    
    "updatedAt": "2023-07-15T12:15:21.562Z",
    
    "__v": 0
 
  }
]



Retrieve a specific Post

URL: GET http://localhost:5000/api/posts/api/posts/:postId

Replace :postId with the ID of the post you want to retrieve.

Response (Example):

{

  "title": "Post 1",
  
  "content": "This is the first post.",
  
  "author": "64b27afae3518362052f0749",
  
  "_id": "64b28d714daf3a5b98f64f7e",
  
  "createdAt": "2023-07-15T12:13:37.173Z",
  
  "updatedAt": "2023-07-15T12:13:37.173Z",
  
  "__v": 0

}



Update a Post

URL: PUT http://localhost:5000/api/posts/api/posts/:postId

Replace :postId with the ID of the post you want to update.

Headers:

Content-Type: application/json

Authorization: Bearer <jwt-token>

Request Body:

{

  "title": "Updated Post",
  
  "content": "This is the updated post."

}



Response (Example):

{

  "title": "Updated Post",
  
  "content": "This is the updated post.",
  
  "author": "64b27afae3518362052f0749",
  
  "_id": "64b28d714daf3a5b98f64f7e",
  
  "createdAt": "2023-07-15T12:13:37.173Z",
  
  "updatedAt": "2023-07-15T12:16:42.932Z",
  
  "__v": 0

}

Add a Comment

URL: POST http://localhost:5000/api/posts/api/comments

Headers:

Content-Type: application/json

Authorization: Bearer <jwt-token>

Request Body:

{

  "postId": "64b28d714daf3a5b98f64f7e",
  
  "content": "This is a comment on the post."

}



Response (Example):

{

  "postId": "64b28d714daf3a5b98f64f7e",
  
  "content": "This is a comment on the post.",
  
  "author": "64b27afae3518362052f0749",
  
  "_id": "64b28e874daf3a5b98f64f80",
  
  
  "createdAt": "2023-07-15T12:19:04.109Z",
  
  "updatedAt": "2023-07-15T12:19:04.109Z",
  
  "__v": 0

}



Delete a Comment

URL: DELETE http://localhost:5000/api/posts/api/comments/:commentId

Replace :commentId with the ID of the comment you want to delete.

Headers:

Authorization: Bearer <jwt-token>

Response (Example):

{

  
  "message": "Comment deleted successfully"

}



USER INTERACTION TESTING

Follow User

Endpoint: POST http://localhost:5000/api/user/follow/:userIdToFollow

Description: Follow a user by their user ID.

Request Parameters:

userIdToFollow (string): ID of the user to follow

Request Headers:

Authorization (string): Bearer <token>

Response:

Status: 200 OK

Body: 

{ 

"message": "User followed successfully" 

}



Unfollow User

Endpoint: POST http://localhost:5000/api//user/unfollow/:userIdToUnfollow

Description: Unfollow a user by their user ID.

Request Parameters:

userIdToUnfollow (string): ID of the user to unfollow

Request Headers:

Authorization (string): Bearer <token>

Response:

Status: 200 OK

Body: 

{

"message": "User unfollowed successfully" 

}



Like Post

Endpoint: POST http://localhost:5000/api//post/like/:postId

Description: Like a post by its post ID.

Request Parameters:

postId (string): ID of the post to like

Request Headers:

Authorization (string): Bearer <token>

Response:

Status: 200 OK

Body: 

{ 

"message": "Post liked successfully" 

}



Dislike Post

Endpoint: POST http://localhost:5000/api//post/dislike/:postId

Description: Dislike a post by its post ID.

Request Parameters:

postId (string): ID of the post to dislike

Request Headers:

Authorization (string): Bearer <token>

Response:

Status: 200 OK

Body: 

{ 

"message": "Post disliked successfully" 

}

