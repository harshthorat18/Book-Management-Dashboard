import { useEffect, useState } from "react";
import {
    Container,
  Typography,
  Box,
  CircularProgress,
  Grid,
  Paper
} from "@mui/material";
import { getBooks, deleteBook } from "../api/books";
import BookForm from "../components/BookForm";
import BookTable from "../components/BookTable";
import FilterBar from "../components/FilterBar";
import Pagination from "../components/Pagination";

export default function Dashboard() {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState({ genre: "", status: "" });
  const [currentPage, setCurrentPage] = useState(1);
  const booksPerPage = 10;

  const fetchBooks = async () => {
    try {
      const res = await getBooks();
      setBooks(res.data);
    } catch (err) {
      console.error("Fetch error", err);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Delete this book?")) return;
    try {
      await deleteBook(id);
      setBooks((prev) => prev.filter((book) => book.id !== id));
    } catch (err) {
      console.error("Delete error", err);
    }
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  const filteredBooks = books.filter((book) => {
    const matchesSearch =
      book.title.toLowerCase().includes(search.toLowerCase()) ||
      book.author.toLowerCase().includes(search.toLowerCase());

    const matchesGenre = !filter.genre || book.genre === filter.genre;
    const matchesStatus = !filter.status || book.status === filter.status;

    return matchesSearch && matchesGenre && matchesStatus;
  });

  const totalPages = Math.ceil(filteredBooks.length / booksPerPage);
  const paginatedBooks = filteredBooks.slice(
    (currentPage - 1) * booksPerPage,
    currentPage * booksPerPage
  );

  return (
    <Container maxWidth="lg" sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom>
        Book Management Dashboard
      </Typography>

      {loading ? (
        <Box textAlign="center" mt={4}>
          <CircularProgress />
        </Box>
      ) : (
        <>
          <Box mb={2}>
            <FilterBar
              search={search}
              onSearchChange={setSearch}
              filter={filter}
              onFilterChange={setFilter}
            />
          </Box>

          <Box mb={4}>
            <BookForm onAdd={(book) => setBooks((prev) => [...prev, book])} />
          </Box>

          <Paper elevation={3}>
            <BookTable books={paginatedBooks} onDelete={handleDelete} />
          </Paper>

          <Box mt={4}>
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={setCurrentPage}
            />
          </Box>
        </>
      )}
    </Container>
  );
}
