# 📚 Bookstore API

This is a simple RESTful API for managing a collection of books using **Node.js**, **Express.js**, and **MongoDB (Mongoose)**.

---

## 📌 Features

- Add a new book to the collection
- Get details of all books
- Get details of a specific book by ID
- Update book details
- Delete a book

---

## 🛠️ Tech Stack

- **Node.js**
- **Express.js**
- **MongoDB** with **Mongoose**
- **Postman** for API testing

---

## 🗃️ Book Schema

```js
{
  title: String (required),
  author: String (required),
  price: Number (required),
  publishedDate: Date (required)
}
