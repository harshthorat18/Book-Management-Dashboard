import axios from 'axios';

const API_URL = import.meta.env.DEV
  ? "http://localhost:3001/books"
  : "https://book-management-backend-grlr.onrender.com/books/books";



export const getBooks = () => axios.get(API_URL);
export const deleteBook = (id) => axios.delete(`${API_URL}/${id}`);
export const addBook = (data) => axios.post(API_URL, data);