📦 [npmjs.com](https://www.npmjs.com/)

---

# 📖 Server Basics (Simple Notes)

---

## 1. What is a Server?

A server is simply a computer.

Like our laptop or desktop, it has:

- Operating System (OS)
- Processor (CPU)
- RAM
- Storage

The main job of a server is to receive requests from users and send back the correct response.

> **📝 Example**
> When you open google.com, your browser sends a request to Google's server.
> The server processes your request and sends the webpage back to your browser.

---

## 2. How is a Server Different from Our Laptop or PC?

A server and a laptop are almost the same in terms of hardware.

The difference is in how they are used.

**Laptop/PC:**

- Used by one person.
- Runs applications like Chrome, VS Code, games, etc.
- We can shut it down whenever we want.

**Server:**

- Programmed to provide services to many users.
- Usually runs all the time (24/7).
- Waits for users' requests.
- Processes those requests and sends responses.

**In simple words:**

A server is just a computer that has been programmed to handle requests from users over a network.

---

## 3. How Do We Program a Server?

To make a computer work as a server, we write server-side code.

In this course, we use JavaScript with Node.js.

The basic steps are:

1. Install Node.js.
2. Write JavaScript code.
3. Run the code.
4. The server starts and waits for requests.
5. When a user sends a request, the server processes it.
6. The server sends a response back to the user.

---

## 4. 📦 package.json

`package.json` is an important file in every Node.js project.

It contains information about the project, such as:

- Project name
- Version
- Scripts
- Packages (dependencies) used in the project

Whenever someone downloads your project, npm reads this file and knows which packages need to be installed.
(tell the code we have written using which packages/dependencies)

---

## 5. 🔒 package-lock.json

`package-lock.json` is created automatically by npm.

It stores:

- The exact version of every installed package.
- Which package depends on another package.

Think of it like a family tree of packages.

> **📝 Example**

```
express
│
├── body-parser
│   └── bytes
│
├── cookie
└── send
```

This file ensures that everyone who installs the project gets the same versions of all packages, avoiding unexpected errors.
(it maintains that package we are using is depend on which packages and that depends on which packages like tree)

---

# 🚀 Creating a Server Using Express.js

---

## 1. Initialize a Node.js Project

**Command:**

```bash
npm init -y
```

**Explanation:**

- `npm init` creates a new Node.js project.
- It generates a file called `package.json`.
- The `-y` option automatically accepts all the default settings, so you don't have to answer any questions.

---

## 2. 🛠 Install Express

**Command:**

```bash
npm i express
```

**Explanation:**

- `npm` = Node Package Manager.
- `i` = install.
- `express` is a popular Node.js framework used to build web servers and APIs easily.

**After installation:**

- A `node_modules` folder is created.
- `express` is added to `package.json` as a dependency.
- `package-lock.json` is also created or updated.

---

## 3. Import Express

**Code:**

```javascript
const express = require('express')
```

**Explanation:**

- `require('express')` imports the Express package.
- The imported function is stored in the variable `express`.
- Now we can use all the features provided by Express.

---

## 4. Create an Express Application

**Code:**

```javascript
const app = express()
```

**Explanation:**

- `express()` creates an Express application.
- We store it inside the variable `app`.
- The `app` object is used to:
  - Create routes
  - Receive requests
  - Send responses
  - Start the server

---

## 5. Create Routes

**Code:**

```javascript
app.get("/", (req, res) => {
    res.send("Hello from Backend!")
})
```

**Explanation:**

- `app.get()` is used to handle GET requests.
- The first argument (`"/"`) is the route or URL path.
- `req` (Request) contains information sent by the client.
- `res` (Response) is used to send data back to the client.
- `res.send()` sends the response to the browser.

When the user visits:

```
http://localhost:3000/
```

The browser displays:

```
Hello from Backend!
```

---

## 6. Another Route

**Code:**

```javascript
app.get("/about", (req, res) => {
    res.send("Hello from Backend!\nAbout Page")
})
```

**Explanation:**

This route handles requests for:

```
http://localhost:3000/about
```

The server responds with:

```
Hello from Backend!
About Page
```

Each route can return different data depending on the URL.

---

## 7. Start the Server

**Code:**

```javascript
app.listen(3000)
```

**Explanation:**

`app.listen()` starts the server.

The number `3000` is the port number on which the server listens for incoming requests.

Now the server is available at:

```
http://localhost:3000
```

---

## 8. app.listen() with Callback

**Code:**

```javascript
app.listen(3000, () => {
    console.log("Server is running on port 3000");
})
```

**Explanation:**

The callback function runs after the server starts successfully.

**Output in terminal:**

```
Server is running on port 3000
```

This message helps confirm that the server is running.

---

## 9. What is a Port Number?

A port is a communication endpoint used by applications on a computer.

A computer can run many applications at the same time.
Each application uses a different port number so the operating system knows where to send incoming requests.

**Examples:**

| Application    | Port        |
| -------------- | ----------- |
| Chrome         | 443 (HTTPS) |
| Node.js Server | 3000        |
| MySQL          | 3306        |
| MongoDB        | 27017       |

In development, port **3000** is commonly used for Express applications.

When you open:

```
http://localhost:3000
```

- `localhost` means your own computer.
- `3000` tells the browser which application (server) to connect to.

Without a port number, the browser would not know which application should handle the request.

---

## 💻 Complete Code

```javascript
const express = require('express')

const app = express()

app.get("/", (req, res) => {
    res.send("Hello from Backend!")
})

app.get("/about", (req, res) => {
    res.send("Hello from Backend!\nAbout Page")
})

app.listen(3000, () => {
    console.log("Server is running on port 3000")
})
```

---

# 📚 API and REST API

---

## 1. What is an API?

API stands for **Application Programming Interface**.

An API is a way for two different software applications to communicate with each other.

Instead of accessing another application's code or database directly, one application sends a request to the API, and the API returns the required data or performs the requested task.

Think of an API like a waiter in a restaurant.

- You (Client) place an order.
- The waiter (API) takes your order to the kitchen (Server).
- The kitchen prepares the food.
- The waiter brings the food back to you.

You never go into the kitchen yourself.

**Examples:**

- Weather apps use a Weather API to get weather information.
- Payment apps use APIs to process online payments.
- Frontend applications use backend APIs to fetch or save data.

---

## 2. What is a REST API?

REST stands for **Representational State Transfer**.

A REST API is a type of API that follows a set of rules for communication over the internet using HTTP.

It allows clients (websites, mobile apps, etc.) to communicate with a backend server to perform operations like:

- Fetch data
- Add new data
- Update existing data
- Delete data

REST APIs are the most commonly used APIs in modern web development.

---

## 3. HTTP Request Methods

### GET

Used to fetch or read data from the server.

**Example:**

```
GET /users
```

Returns the list of users.

---

### POST

Used to send new data to the server.

**Example:**

```
POST /users
```

Creates a new user.

---

### PATCH

Used to update some part of existing data on the server.

**Example:**

```
PATCH /users/1
```

Updates specific information of user with ID 1.

---

### DELETE

Used to remove existing data from the server.

**Example:**

```
DELETE /users/1
```

Deletes user with ID 1.

---

## 4. Project Structure

A common Express project structure is:

```
project/
│
├── src/
│   │
│   └── app.js
│
├── server.js
│
├── package.json
│
└── node_modules/
```

**Explanation:**

**app.js**

- Creates the Express application.
- Defines routes.
- Contains middleware and other application logic.

**server.js**

- Imports the Express application from `app.js`.
- Starts the server using `app.listen()`.

This structure keeps the project clean and organized.

---

## 5. app.listen()

**Syntax:**

```javascript
app.listen(port, () => {
    console.log("Server is running")
})
```

**Explanation:**

`app.listen()` starts the Express server.

It takes two arguments:

1. **Port Number**

   - The port on which the server listens for incoming requests.
2. **Callback Function**

   - Runs after the server starts successfully.
   - Usually used to display a success message.

**Example:**

```javascript
app.listen(3000, () => {
    console.log("Server is running on port 3000")
})
```

---

## 6. DELETE Route

**Example:**

```javascript
app.delete("/notes/:index", (req, res) => {

})
```

**Explanation:**

- `app.delete()` handles DELETE requests.
- `/notes` is the route.
- `:index` is a **Route Parameter (Parameter or Params)**.

The colon (`:`) tells Express that this part of the URL is **dynamic**.

For example:

```
DELETE /notes/0
DELETE /notes/2
DELETE /notes/10
```

Here, only `/notes` stays the same, while the value after it changes.

---

## 7. Route Parameters (Params)

A route parameter is a dynamic value in the URL.

**Example:**

```javascript
app.get("/users/:id", (req, res) => {

})
```

**Possible URLs:**

```
/users/1
/users/25
/users/100
```

Here:

- `/users` is the static part.
- `:id` is the dynamic part (parameter).

Express automatically stores this value inside:

```javascript
req.params
```

---

## 8. req.params.index

**Example:**

```javascript
app.delete("/notes/:index", (req, res) => {

    console.log(req.params.index)

})
```

If the user sends:

```
DELETE /notes/3
```

Then:

```javascript
req.params.index
```

contains:

```
"3"
```

> **📌 Note**
> Route parameters are received as **strings**.
> If you need to perform calculations or use them as array indexes, convert them to a number.

**Example:**

```javascript
const index = Number(req.params.index)
```

---

## 9. Why is Index Used?

Suppose we have an array:

```javascript
const notes = [
    "Study",
    "Practice",
    "Exercise"
]
```

Indexes are:

```
0 → Study
1 → Practice
2 → Exercise
```

If the request is:

```
DELETE /notes/1
```

Then:

```javascript
req.params.index
```

is:

```
"1"
```

After converting it to a number, we can delete the second item from the array.

---

## 10. ⚡ nodemon

**Command:**

```bash
npx nodemon server.js
```

**Explanation:**

Normally, whenever you change your code, you have to stop the server and start it again manually.

`nodemon` automatically watches your project files.

Whenever it detects a change, it restarts the server automatically.

**Benefits:**

- Saves time.
- No need to restart the server manually after every code change.
- Makes development faster and more convenient.

---

# 🗄️ MongoDB with Express & Mongoose

---

## 1. What is MongoDB?

MongoDB is a NoSQL database used to store data.

Unlike SQL databases, MongoDB stores data in the form of **documents** instead of rows and columns.

A document looks like a JavaScript object (JSON).

**Example:**

```json
{
    "title": "Learn Node.js",
    "description": "Complete Express tutorial"
}
```

A group of documents is called a **Collection**.

A group of collections is called a **Database**.

---

## 2. What is MongoDB Atlas?

MongoDB Atlas is the cloud version of MongoDB.

Instead of installing MongoDB on your own computer, MongoDB Atlas stores your database online.

**Advantages:**

- Accessible from anywhere.
- Automatic backups.
- Easy to connect with applications.
- No need to install MongoDB locally.

---

## 3. What is a MongoDB Cluster?

A **Cluster** is a group of servers that stores your databases.

Think of it like a large storage system that contains one or more databases.

**Structure:**

```
Cluster
│
├── Database 1
│      ├── Collection
│      └── Collection
│
├── Database 2
│      ├── Collection
│      └── Collection
```

When you create a free cluster on MongoDB Atlas, all your databases are stored inside that cluster.

---

## 4. What is MongoDB Compass?

MongoDB Compass is the official graphical interface (GUI) for MongoDB.

It allows you to:

- View databases.
- View collections.
- Add documents.
- Edit documents.
- Delete documents.
- Run queries.

It is similar to phpMyAdmin for MySQL.

---

## 5. 🛠 Install Mongoose

**Command:**

```bash
npm i mongoose
```

**Explanation:**

Mongoose is a Node.js library that helps us communicate with MongoDB.

Instead of writing MongoDB queries directly, Mongoose provides an easier way to:

- Connect to MongoDB.
- Create schemas.
- Create models.
- Insert data.
- Update data.
- Delete data.
- Fetch data.

---

## 6. Project Structure

```
project/
│
├── node_modules/
│
├── src/
│   │
│   ├── db/
│   │     └── db.js
│   │
│   ├── models/
│   │     └── notes.models.js
│   │
│   └── app.js
│
├── package.json
├── package-lock.json
└── server.js
```

**Explanation:**

**db.js**

- Connects the application to MongoDB.

**models/**

- Contains database models.

**app.js**

- Contains all routes and application logic.

**server.js**

- Starts the server and connects to the database.

---

## 7. Creating a Schema

**Code:**

```javascript
const mongoose = require("mongoose")

const noteSchema = new mongoose.Schema({
    title: String,
    description: String
})
```

**Explanation:**

A Schema defines the structure of a document.

Here every Note document will have:

```
title       → String
description → String
```

**Example document:**

```json
{
    "title": "Shopping",
    "description": "Buy Milk"
}
```

---

## 8. Creating a Model

**Code:**

```javascript
const noteModel = mongoose.model("notes", noteSchema)

module.exports = noteModel
```

**Explanation:**

A Model is created using a schema.

A model is used to interact with a MongoDB collection.

**Syntax:**

```javascript
mongoose.model(
    CollectionName,
    Schema
)
```

Here:

```
Collection Name: notes
Schema:          noteSchema
```

Using this model we can:

- Create documents.
- Read documents.
- Update documents.
- Delete documents.

---

## 9. Connecting to MongoDB

**Code:**

```javascript
const mongoose = require("mongoose")

async function connectDB() {

    await mongoose.connect(
        "mongodb+srv://username:password@cluster.mongodb.net/notesdb"
    )

    console.log("Connected To DB")

}

module.exports = connectDB
```

**Explanation:**

`mongoose.connect()` connects our application to MongoDB Atlas.

**Connection String:**

```
mongodb+srv://username:password@cluster.mongodb.net/notesdb
```

The last part:

```
notesdb
```

is the database name.

If the database does not exist, MongoDB automatically creates it when data is inserted.

---

## 10. server.js

**Code:**

```javascript
const app = require("./src/app")
const connectDB = require("./src/db/db")

connectDB()

const port = 3000

app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})
```

**Explanation:**

- **Step 1:** Import the Express application.
- **Step 2:** Import the database connection function.
- **Step 3:** Connect to MongoDB.
- **Step 4:** Start the Express server.

---

## 11. express.json()

**Code:**

```javascript
app.use(express.json())
```

**Explanation:**

This middleware converts incoming JSON data into a JavaScript object.

Without it, `req.body` will be `undefined`.

**Example request:**

```json
{
    "title":"Node",
    "description":"Learning Express"
}
```

After `express.json()`, `req.body` becomes:

```javascript
{
    title:"Node",
    description:"Learning Express"
}
```

---

## 12. Creating a Note (POST)

**Code:**

```javascript
app.post("/notes", async (req,res)=>{

    const data = req.body

    await noteModel.create({
        title:data.title,
        description:data.description
    })

    res.status(201).json({
        message:"Note Created Successfully"
    })

})
```

**Explanation:**

POST is used to add new data.

`req.body` contains the data sent by the client.

`create()` inserts a new document into MongoDB.

**Example Request:**

```
POST /notes
```

**Body:**

```json
{
    "title":"Node",
    "description":"Learn Express"
}
```

A new document is stored in MongoDB.

---

## 13. Reading Notes (GET)

**Code:**

```javascript
const notes = await noteModel.find()
```

**Explanation:**

`find()` returns every document from the collection.

**Return Type:**

```javascript
[]
// or
[
   {},
   {},
   {}
]
```

`find()` always returns an array.

**Example Response:**

```javascript
[
   {
      title:"Node",
      description:"Learn Express"
   },
   {
      title:"MongoDB",
      description:"Practice CRUD"
   }
]
```

---

## 14. findOne()

**Code:**

```javascript
const note = await noteModel.findOne({
    title:"Node"
})
```

**Explanation:**

`findOne()` returns only the first matching document.

**Return value:**

```javascript
{}
// or
null
```

Unlike `find()`, it never returns an array.

---

## 15. Deleting a Note

**Code:**

```javascript
app.delete("/notes/:id", async(req,res)=>{

    const id = req.params.id

    await noteModel.findOneAndDelete({
        _id:id
    })

})
```

**Explanation:**

`:id` is a dynamic route parameter.

**Example:**

```
DELETE /notes/687ac8d8b12934f56789abc
```

The id is stored inside `req.params.id`.

`findOneAndDelete()` finds the document having that `_id` and deletes it.

---

## 16. Updating a Note

**Code:**

```javascript
app.patch("/notes/:id", async(req,res)=>{

    const id = req.params.id

    const description = req.body.description

    await noteModel.findOneAndUpdate(
        {
            _id:id
        },
        {
            description:description
        }
    )

})
```

**Explanation:**

PATCH updates existing data.

**Example Request:**

```
PATCH /notes/687ac8d8b12934f56789abc
```

**Body:**

```json
{
    "description":"Complete MongoDB Course"
}
```

**`findOneAndUpdate()`**

- **First argument:** Which document should be updated.
- **Second argument:** What changes should be made.

Only the `description` field is updated.

---

## 17. Common Mongoose CRUD Methods

| Operation | Method                 | Description                         | Return         |
| --------- | ---------------------- | ----------------------------------- | -------------- |
| Create    | `create()`           | Adds a new document.                | —             |
| Read      | `find()`             | Returns all matching documents.     | Array          |
| Read One  | `findOne()`          | Returns only one matching document. | Object or null |
| Update    | `findOneAndUpdate()` | Updates one matching document.      | —             |
| Delete    | `findOneAndDelete()` | Deletes one matching document.      | —             |

---

## 18. Request Flow

```
Client (Postman / Browser)
        │
        │ HTTP Request
        ▼
Express Route (app.js)
        │
        │
        ▼
Mongoose Model
        │
        │
        ▼
MongoDB Atlas Database
        │
        │
        ▼
Data Returned
        │
        ▼
Express sends JSON Response
        │
        ▼
Client Receives Response
```

---

# 🖼️ Image Upload using Express, Multer, ImageKit & MongoDB

---

## 1. Project Flow

```
Client
   │
   ▼
Select Image + Caption
   │
   ▼
Express Server
   │
   ▼
Multer Middleware
   │
   ▼
ImageKit (Uploads Image)
   │
   ▼
Image URL Returned
   │
   ▼
Save URL + Caption in MongoDB
   │
   ▼
Send Response to Client
```

---

## 2. Loading Environment Variables

**Code:**

```javascript
require("dotenv").config()
```

**Explanation:**

This line loads all variables stored inside the `.env` file.

**Example:**

```
DATABASE_URL=......
IMAGE_KIT_PRIVATE_KEY=......
```

After loading them, they can be accessed using:

```javascript
process.env.DATABASE_URL
process.env.IMAGE_KIT_PRIVATE_KEY
```

> **🔒 Security**
> Using `.env` keeps passwords, API keys, and database URLs secure.

---

## 3. server.js

**Code:**

```javascript
const app = require("./src/app")
const connectDB = require("./src/db/db")

const port = 3000

app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})

connectDB()
```

**Explanation:**

- **Step 1:** Import the Express application.
- **Step 2:** Import the database connection function.
- **Step 3:** Start the Express server using `app.listen()`.
- **Step 4:** Connect the application to MongoDB.

After running the server, it will:

- Start listening on port 3000.
- Connect to the MongoDB database.

---

## 4. Connecting MongoDB

**Code:**

```javascript
const mongoose = require("mongoose")

async function connectDb() {

    await mongoose.connect(process.env.DATABASE_URL)

    console.log("Connected to DB")

}

module.exports = connectDb
```

**Explanation:**

`mongoose.connect()` creates a connection between the Node.js application and MongoDB Atlas.

The database URL is stored inside the `.env` file and accessed using:

```javascript
process.env.DATABASE_URL
```

If the connection is successful:

```
Connected to DB
```

is printed in the terminal.

---

## 5. Creating a Schema

**Code:**

```javascript
const postSchema = new mongoose.Schema({

    image:String,

    caption:String

})
```

**Explanation:**

A Schema defines how every document should look inside MongoDB.

Each Post document contains:

```
image   → Stores the image URL.
caption → Stores the caption of the image.
```

**Example Document:**

```json
{
    "image":"https://ik.imagekit.io/xyz/image.jpg",
    "caption":"Beautiful Sunset"
}
```

---

## 6. Creating a Model

**Code:**

```javascript
const postModel = mongoose.model("post", postSchema)

module.exports = postModel
```

**Explanation:**

A Model is created using a Schema.

The model allows us to interact with the MongoDB collection.

Using this model we can:

- Insert data
- Fetch data
- Update data
- Delete data

---

## 7. 🔧 ImageKit Configuration

**Code:**

```javascript
const ImageKit = require("@imagekit/nodejs").default
```

**Explanation:**

This imports the ImageKit Node.js SDK.

ImageKit is a cloud storage service used to upload and store images.

---

**Code:**

```javascript
const client = new ImageKit({

    privateKey: process.env.IMAGE_KIT_PRIVATE_KEY

})
```

**Explanation:**

Creates an ImageKit client.

The private key is stored securely inside the `.env` file.

This client is used to upload images to ImageKit.

---

## 8. uploadFile() Function

**Code:**

```javascript
async function uploadFile(buffer){

    const result = await client.files.upload({

        file: await toFile(buffer,"image.jpg"),

        fileName:"image.jpg"

    })

    return result

}
```

**Explanation:**

This function uploads an image to ImageKit.

**Parameter:** `buffer` — The uploaded image is received as binary data (Buffer).

**Steps:**

1. Convert the Buffer into a file.
2. Upload the file to ImageKit.
3. ImageKit stores the image.
4. ImageKit returns information about the uploaded image.

The returned object contains:

- Image URL
- File Name
- File ID
- File Size
- Other details

The image URL is later stored in MongoDB.

---

## 9. express.json()

**Code:**

```javascript
app.use(express.json())
```

**Explanation:**

This middleware converts incoming JSON data into a JavaScript object.

Without it, `req.body` will be `undefined`.

---

## 10. Multer Middleware

**Code:**

```javascript
const multer = require("multer")

const upload = multer({

    storage: multer.memoryStorage()

})
```

**Explanation:**

Multer is used to receive uploaded files.

`memoryStorage()` stores uploaded files temporarily in the computer's RAM instead of saving them to disk.

This is useful because the image will immediately be uploaded to ImageKit, so there is no need to save it locally.

---

## 11. upload.single("image")

**Code:**

```javascript
upload.single("image")
```

**Explanation:**

This middleware accepts only one uploaded file.

The string `"image"` must match the field name sent by the frontend.

**Example Form Data:**

```
image   → profile.jpg
caption → My first upload
```

After Multer processes the request:

- Uploaded image → `req.file`
- Other fields → `req.body`

---

## 12. Creating a Post

**Code:**

```javascript
app.post("/create-post",

upload.single("image"),

async(req,res)=>{

})
```

**Explanation:**

This route creates a new post.

**Flow:**

```
Client sends:
  - Image
  - Caption
        ↓
Multer receives the image.
        ↓
Image is uploaded to ImageKit.
        ↓
ImageKit returns the image URL.
        ↓
Image URL and caption are stored in MongoDB.
        ↓
Success response is sent back.
```

---

## 13. req.body

**Code:**

```javascript
console.log(req.body)
```

**Explanation:**

Contains all text fields sent by the client.

**Example:**

```javascript
{
    caption:"My First Image"
}
```

---

## 14. req.file

**Code:**

```javascript
console.log(req.file)
```

**Explanation:**

Contains information about the uploaded image.

**Example:**

```javascript
{
    originalname:"photo.jpg",
    mimetype:"image/jpeg",
    buffer:<Buffer...>,
    size:32561
}
```

The most important property is:

```javascript
req.file.buffer
```

This Buffer is uploaded to ImageKit.

---

## 15. Uploading Image

**Code:**

```javascript
const result = await uploadFile(req.file.buffer)
```

**Explanation:**

The image buffer is sent to the `uploadFile()` function.

ImageKit uploads the image and returns details about it.

**Example:**

```
result.url
    ↓
https://ik.imagekit.io/abc123/image.jpg
```

---

## 16. Saving Data in MongoDB

**Code:**

```javascript
const post = await postModel.create({

    image: result.url,

    caption: req.body.caption

})
```

**Explanation:**

A new document is inserted into MongoDB.

The database stores only:

- Image URL
- Caption

**Example:**

```json
{
    "image":"https://ik.imagekit.io/abc123/image.jpg",
    "caption":"Vacation"
}
```

The actual image remains stored in ImageKit.

---

## 17. Sending Response

**Code:**

```javascript
return res.status(201).json({

    message:"Post Created Successfully!",

    post

})
```

**Explanation:**

**Status Code:** `201` means the resource was created successfully.

The response contains:

- Success message
- Newly created document

---

## 18. Fetching All Posts

**Code:**

```javascript
app.get("/posts", async(req,res)=>{

    const posts = await postModel.find()

})
```

**Explanation:**

`find()` retrieves all documents from the database.

**Example Response:**

```javascript
[
    {
        image:"https://ik.imagekit.io/abc123/image.jpg",
        caption:"Trip"
    },
    {
        image:"https://ik.imagekit.io/abc123/photo.jpg",
        caption:"Nature"
    }
]
```

The data is returned to the client in JSON format.

---

## 19. Complete Request Flow

```
Frontend
   │
   │ Select Image + Caption
   ▼
POST /create-post
   │
   ▼
Express Route
   │
   ▼
Multer Middleware
   │
   │ Extracts Image
   ▼
req.file.buffer
   │
   ▼
uploadFile()
   │
   ▼
ImageKit
   │
   │ Uploads Image
   ▼
Returns Image URL
   │
   ▼
MongoDB
   │
   │ Stores:
   │ • Image URL
   │ • Caption
   ▼
Express
   │
   ▼
JSON Response Sent to Client
```

---

# 🔗 Frontend and Backend Integration

---

# 🌐 CORS (Cross-Origin Resource Sharing)

## What is CORS?

CORS stands for **Cross-Origin Resource Sharing**.

It is a security feature used by web browsers.

CORS controls **which websites are allowed to access your backend server**.

---

## Simple Example

Suppose your frontend is running on:

```
http://localhost:5173
```

Your backend is running on:

```
http://localhost:3000
```

Now the frontend tries to fetch data:

```
GET http://localhost:3000/posts
```

The browser asks:

> "Is this website allowed to access that server?"

If the server does **not** allow it, the browser blocks the request.

This is called a **CORS Error**.

---

## Why is CORS Needed?

Imagine anyone on the internet could send requests to your server without restrictions.

That would be a security risk.

CORS helps protect users by allowing the server to decide which websites can access it.

---

## How Do We Enable CORS?

**Install CORS package:**

```bash
npm i cors
```

**Import it:**

```javascript
const cors = require("cors")
```

**Use it as middleware:**

```javascript
app.use(cors())
```

Now your backend allows requests from other origins.

---

## Allow Only a Specific Frontend

Instead of allowing everyone:

```javascript
app.use(cors({
    origin: "http://localhost:5173"
}))
```

Now only the frontend running on port **5173** can access your backend.

---

## Flow

```
Frontend (localhost:5173)
          │
          │ Request
          ▼
Browser checks CORS
          │
          ▼
Backend (localhost:3000)
          │
          ├── CORS Allowed ✅ → Response Sent
          │
          └── CORS Not Allowed ❌ → Browser Blocks Request
```

---

## In Simple Words

CORS is a security mechanism that tells the browser **which websites are allowed to communicate with your backend server**.

---

# 📦 Axios

**Install:**

```bash
npm i axios
```

## What is Axios?

Axios is a JavaScript library used to send HTTP requests to a backend server or API.

It is commonly used to:

- Fetch data (GET)
- Send data (POST)
- Update data (PATCH/PUT)
- Delete data (DELETE)

**Example:**

```javascript
axios.get("/posts")
```

This sends a GET request to fetch all posts.

---

# 🧭 useNavigate

## What is useNavigate?

`useNavigate` is a React Router hook used to navigate from one page to another programmatically.

It is useful when navigation should happen after an action, such as:

- Login
- Form submission
- Logout

**Example:**

```javascript
const navigate = useNavigate()

navigate("/home")
```

This redirects the user to the **Home** page.

---

# 🔐 Authentication

## What is Authentication?

Authentication is the process of checking whether a user is really who they claim to be.

It verifies the user's identity before allowing access to an application.

---

## Example

When you log in to Instagram or Gmail:

1. You enter your email and password.
2. The server checks if they are correct.
3. If they are correct, you are logged in.
4. If they are incorrect, access is denied.

This process is called **Authentication**.

---

## In Simple Words

Authentication means **verifying a user's identity before giving them access to an application.**

---

# 🏛️ An Authentication System Consists of Four Things

---

## 1. Validation

Validation checks whether the data entered by the user is in the correct format.

**Examples:**

- Is the email format correct?
- Is the password at least 8 characters long?
- Are all required fields filled?

Validation only checks the format of the input.

---

## 2. Verification

Verification checks whether the provided information is valid or exists.

**Examples:**

- Does this email exist in the database?
- Is the OTP correct?
- Is the email verified?

---

## 3. Authentication

Authentication verifies the user's identity.

**Example:**
The server checks whether the entered email and password match the stored credentials.

If they match, the user is authenticated (logged in).

---

## 4. Authorization

Authorization determines what an authenticated user is allowed to do.

**Example:**

**Admin:**

- Add users
- Update users
- Delete users

**Normal User:**

- View data
- Update their own profile

> **📌 Note**
> Authorization happens **after authentication**.
> It decides what actions a user has permission to perform.

---

# 🔑 Token-Based Authentication

## What is Token-Based Authentication?

Token-Based Authentication is a method of verifying a user's identity using a **token** instead of checking the email and password on every request.

A token is a unique string generated by the server after a user logs in successfully.

---

## How It Works

1. The user enters their email and password.
2. The server verifies the credentials.
3. If they are correct, the server generates a token.
4. The token is sent to the user.
5. The user stores the token (usually in localStorage or cookies).
6. Whenever the user makes a request, the token is sent along with the request.
7. The server verifies the token.
8. If the token is valid, the user is allowed to access protected resources.

---

## Flow

```
User
  │
  │ Login (Email + Password)
  ▼
Server
  │
  │ Verify Credentials
  ▼
Generate Token
  │
  ▼
Send Token to User
  │
  ▼
User Stores Token
  │
  ▼
User Sends Token with Every Request
  │
  ▼
Server Verifies Token
  │
  ├── Valid Token ✅ → Access Granted
  │
  └── Invalid Token ❌ → Access Denied
```

---

## Why Use Tokens?

- The user does not need to log in for every request.
- More secure than sending email and password repeatedly.
- Commonly used in REST APIs and modern web applications.
- Makes authentication faster and easier.

---

## In Simple Words

Token-Based Authentication means **the server gives the user a unique token after login, and the user uses that token to prove their identity whenever they make future requests.**

---

# 🔐 JWT (JSON Web Token)

## 1. Install Package

```bash
npm i jsonwebtoken
```

Installs the JWT library to create and verify tokens.

---

## 2. Import JWT

```javascript
const jwt = require('jsonwebtoken')
```

Imports the JWT package into your project.

---

## 3. Create a Secret Key

Generate a secret key from:
[https://jwtsecrets.com/](https://jwtsecrets.com/)

Store it in the `.env` file:

```
JWT_SECRET=your_secret_key
```

This secret key is used to sign and verify JWT tokens.

---

## 4. Create a Token

```javascript
const token = jwt.sign(
    { id: user._id },
    process.env.JWT_SECRET
);
```

**Explanation:**

- `jwt.sign()` → Creates a JWT token.
- `{ id: user._id }` → Payload (stores the user's ID).
- `process.env.JWT_SECRET` → Secret key used to sign the token.

The generated token is sent to the user after a successful login.

---

## Why Use JWT?

After login, the client sends the token with every request.
The server verifies the token to identify the authenticated user without asking them to log in again.

---

# 🍪 Cookies Storage

## What are Cookies?

Cookies are small pieces of data stored in the user's browser by the server.

They are commonly used to store:

- Login tokens (JWT)
- User preferences
- Session information

---

## How Cookies Work

1. User logs in.
2. Server creates a JWT token.
3. Server stores the token in a cookie.
4. The browser automatically sends the cookie with every request to the server.
5. The server verifies the token and identifies the user.

---

## Why Use Cookies?

- Keeps the user logged in.
- Automatically sends data with each request.
- Makes authentication easier.

---

**Install cookie-parser middleware:**

```bash
npm i cookie-parser
```

---

## Example

**Server:**

```javascript
res.cookie("token", token);
```

Now the browser stores the token in a cookie.

On future requests, the browser automatically sends this cookie to the server.

---

# ❓ Why Tokens are Used?

Tokens are used to identify and authenticate a user after they log in.

Instead of asking the user to enter their email and password on every request,
the server gives the user a token after a successful login.

The user sends this token with every request, and the server verifies it.

## Benefits

- Keeps the user logged in.
- Improves security.
- No need to send email and password repeatedly.
- Helps the server identify the authenticated user.

## Example

1. User logs in.
2. Server creates a JWT token.
3. User stores the token (usually in a cookie or local storage).
4. User sends the token with every request.
5. Server verifies the token and allows access.

---

# ⚠️ Disadvantages of Tokens

## 1. Cannot Be Revoked Easily

Once a JWT is issued, it remains valid until it expires unless you maintain a blacklist.

## 2. Token Theft

If an attacker steals the token, they can access the user's account until the token expires.

## 3. Token Size

JWTs are larger than session IDs because they contain user data, increasing request size slightly.

## 4. Expiration Handling

If the token expires, the user must log in again or use a refresh token to get a new one.

## 5. Secure Storage Required

Tokens should be stored securely (e.g., in HttpOnly cookies) to reduce the risk of theft.

---


````md
# JEST

JEST is a JavaScript testing framework.

It is used to test JavaScript code and check whether it works as expected.

We can use Jest to test:

- JavaScript functions
- Express APIs
- React components
- Node.js applications

Jest compares the expected output with the actual output.

If both are the same, the test passes.  
If they are different, the test fails.

## Installation

```bash
npm i jest
```

## Example

### math.js

```javascript
function add(a, b) {
    return a + b;
}

module.exports = add;
```

### math.test.js

```javascript
const add = require("./math");

test("adds 2 + 3 = 5", () => {
    expect(add(2, 3)).toBe(5);
});
```

### Run the Test

```bash
npx jest
```

### Output

```text
PASS
✓ adds 2 + 3 = 5
```

---

# Supertest

Supertest is a library used to test Express APIs.

It sends fake HTTP requests to our Express application without opening a browser or Postman.

It can test:

- GET request
- POST request
- PUT request
- DELETE request
- Status code
- Response body
- Headers

## Installation

```bash
npm i supertest
```

## Example

### app.js

```javascript
const express = require("express");

const app = express();

app.get("/", (req, res) => {
    res.status(200).json({
        message: "Hello World"
    });
});

module.exports = app;
```

### app.test.js

```javascript
const request = require("supertest");
const app = require("./app");

test("GET / should return Hello World", async () => {
    const response = await request(app).get("/");

    expect(response.statusCode).toBe(200);
    expect(response.body.message).toBe("Hello World");
});
```

### Run

```bash
npx jest
```

---

# express-validator

express-validator is a middleware used to validate user input before executing the route.

It checks whether the request data is valid.

For example:

- Username should contain at least 3 characters.
- Email should be valid.
- Password should contain at least 6 characters.

If validation fails, it returns validation errors.

## Installation

```bash
npm i express-validator
```

## Example

```javascript
const express = require("express");
const { body, validationResult } = require("express-validator");

const app = express();

app.use(express.json());

app.post(
    "/register",

    body("username")
        .isLength({ min: 3 })
        .withMessage("Username must be at least 3 characters"),

    body("email")
        .isEmail()
        .withMessage("Invalid Email"),

    body("password")
        .isLength({ min: 6 })
        .withMessage("Password must be at least 6 characters"),

    (req, res) => {
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            return res.status(400).json({
                errors: errors.array()
            });
        }

        res.status(200).json({
            message: "User Registered Successfully"
        });
    }
);
```

## Valid Request

```json
{
    "username": "shahnawaz",
    "email": "test@gmail.com",
    "password": "123456"
}
```

### Response

```json
{
    "message": "User Registered Successfully"
}
```

## Invalid Request

```json
{
    "username": "ab",
    "email": "testgmail.com",
    "password": "123"
}
```

### Response

```json
{
    "errors": [
        {
            "msg": "Username must be at least 3 characters"
        },
        {
            "msg": "Invalid Email"
        },
        {
            "msg": "Password must be at least 6 characters"
        }
    ]
}
```

---

# Summary

| Package | Purpose |
|---------|---------|
| **Jest** | Testing framework for JavaScript. |
| **Supertest** | Sends HTTP requests to test Express APIs. |
| **express-validator** | Validates and sanitizes user input before processing the request. |

## Install All Packages

```bash
npm i jest supertest express-validator
```

## Run Tests

```bash
npx jest
```
````

## Summary

JWT tokens are fast and stateless, but they must be stored securely, have an expiration time, and can be misused if stolen.
