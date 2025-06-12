import axios from 'axios';

const API_URL = 'http://localhost:3001/books';

export const getBooks = () => axios.get(API_URL);
export const deleteBook = (id) => axios.delete(`${API_URL}/${id}`);
