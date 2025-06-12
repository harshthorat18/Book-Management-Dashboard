import axios from 'axios';

const API_URL = "https://book-management-dashboard-lhug.onrender.com/books";


export const getBooks = () => axios.get(API_URL);
export const deleteBook = (id) => axios.delete(`${API_URL}/${id}`);
