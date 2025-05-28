import Book from '../models/Book.js';

class BookController {
    // Get all books
    async getAllBooks(req, res) {
        try {
            const books = await Book.find();
            res.status(200).json(books);
        } catch (error) {
            res.status(500).json({ message: 'Error retrieving books', error });
        }
    }

    // Get book by ID
    async getBookById(req, res) {
        try {
            const book = await Book.findById(req.params.id);
            
            if (!book) {
                return res.status(404).json({ message: 'Book not found' });
            }
            
            res.status(200).json(book);
        } catch (error) {
            res.status(500).json({ 
                message: 'Error retrieving book', 
                error: error.message 
            });
        }
    }

    // Create a new book
    async createBook(req, res) {
        try {
            const { title, author, price, publishedDate } = req.body;
            
            // Validate required fields
            if (!title || !author || !price || !publishedDate) {
                return res.status(400).json({ 
                    message: 'Missing required fields',
                    details: 'Title, author, price, and publishedDate are required'
                });
            }

            const newBook = new Book({
                title,
                author,
                price,
                publishedDate
            });

            const savedBook = await newBook.save();
            res.status(201).json(savedBook);
        } catch (error) {
            console.error('Book creation error:', error);
            res.status(400).json({ message: 'Error creating book', error: error.message });
        }
    }

    // Update a book
    async updateBook(req, res) {
        try {
            const updatedBook = await Book.findByIdAndUpdate(
                req.params.id, 
                req.body, 
                { new: true, runValidators: true }
            );
            
            if (!updatedBook) {
                return res.status(404).json({ message: 'Book not found' });
            }
            
            res.status(200).json(updatedBook);
        } catch (error) {
            res.status(400).json({ message: 'Error updating book', error });
        }
    }

    // Delete a book
    async deleteBook(req, res) {
        try {
            const deletedBook = await Book.findByIdAndDelete(req.params.id);
            
            if (!deletedBook) {
                return res.status(404).json({ message: 'Book not found' });
            }
            
            res.status(200).json({ message: 'Book deleted successfully' });
        } catch (error) {
            res.status(500).json({ message: 'Error deleting book', error });
        }
    }
}

export default BookController;