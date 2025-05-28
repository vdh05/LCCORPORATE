# Book Store API

This is a simple REST API for a Book Store application. It allows users to manage a collection of books with functionalities to create, read, update, and delete book records.

## Project Structure

```
book-store-api
├── src
│   ├── app.js                # Initializes the Express application and sets up middleware
│   ├── server.js             # Starts the server and listens on a specified port
│   ├── config
│   │   └── db.js            # Database configuration and connection logic
│   ├── controllers
│   │   └── bookController.js # Contains methods for handling book-related requests
│   ├── models
│   │   └── Book.js           # Defines the Book schema
│   ├── routes
│   │   └── bookRoutes.js     # Sets up routes for the book API
│   ├── middleware
│   │   └── index.js          # Middleware functions for validation and error handling
│   └── utils
│       └── index.js          # Utility functions used across the application
├── data
│   └── books.json            # JSON file for data storage of book records
├── .env                       # Environment variables for configuration
├── .gitignore                 # Files and directories to be ignored by Git
├── package.json               # npm configuration file
└── README.md                  # Project documentation
```

## Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   ```

2. Navigate to the project directory:
   ```
   cd book-store-api
   ```

3. Install the dependencies:
   ```
   npm install
   ```

## Usage

1. Create a `.env` file in the root directory and add your environment variables (e.g., database connection strings).

2. Start the server:
   ```
   npm start
   ```

3. The API will be available at `http://localhost:PORT`, where `PORT` is the port specified in your configuration.

## API Endpoints

- **GET /books**: Retrieve all books
- **POST /books**: Add a new book
- **PUT /books/:id**: Update an existing book by ID
- **DELETE /books/:id**: Remove a book by ID

## License

This project is licensed under the MIT License.