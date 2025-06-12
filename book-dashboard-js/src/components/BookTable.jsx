import React from "react";

export default function BookTable({ books, onDelete }) {
  return (
    <div className="container mt-4 d-flex justify-content-center">
      <div className="table-responsive" style={{ maxWidth: "1000px", width: "100%" }}>
        <table className="table table-bordered table-striped text-center shadow-sm">
          <thead className="table-dark">
            <tr>
              <th>Title</th>
              <th>Author</th>
              <th>Genre</th>
              <th>Year</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {books.length === 0 ? (
              <tr>
                <td colSpan="6" className="text-muted">
                  No books found.
                </td>
              </tr>
            ) : (
              books.map((book) => (
                <tr key={book.id}>
                  <td>{book.title}</td>
                  <td>{book.author}</td>
                  <td>{book.genre}</td>
                  <td>{book.year}</td>
                  <td>{book.status}</td>
                  <td>
                    <button
                      className="btn btn-sm btn-outline-danger"
                      onClick={() => onDelete(book.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
