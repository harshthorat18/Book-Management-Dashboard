import { useForm } from "react-hook-form";
import axios from "axios";

const API_URL = import.meta.env.DEV
  ? "http://localhost:3001/books"
  : "https://book-management-backend-grlr.onrender.com/books";


export default function BookForm({ onAdd }) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const res = await axios.post(API_URL, data);
      onAdd(res.data);
      reset();
      alert("Book added successfully!");
    } catch (err) {
      console.error("Add failed", err);
      alert("Error adding book!");
    }
  };

  return (
    <div className="container mt-4">
      <form onSubmit={handleSubmit(onSubmit)} className="card p-4 shadow">
        <h4 className="mb-3">Add New Book</h4>

        <div className="row g-3">
          <div className="col-md-6">
            <input
              className={`form-control ${errors.title ? "is-invalid" : ""}`}
              placeholder="Title"
              {...register("title", { required: true })}
            />
          </div>

          <div className="col-md-6">
            <input
              className={`form-control ${errors.author ? "is-invalid" : ""}`}
              placeholder="Author"
              {...register("author", { required: true })}
            />
          </div>

          <div className="col-md-6">
            <input
              className={`form-control ${errors.genre ? "is-invalid" : ""}`}
              placeholder="Genre"
              {...register("genre", { required: true })}
            />
          </div>

          <div className="col-md-3">
            <input
              className={`form-control ${errors.year ? "is-invalid" : ""}`}
              placeholder="Published Year"
              type="number"
              {...register("year", { required: true })}
            />
          </div>

          <div className="col-md-3">
            <select
              className={`form-select ${errors.status ? "is-invalid" : ""}`}
              {...register("status", { required: true })}
            >
              <option value="">Select Status</option>
              <option value="Available">Available</option>
              <option value="Issued">Issued</option>
            </select>
          </div>
        </div>

        <div className="mt-4">
          <button type="submit" className="btn btn-primary">
            Add Book
          </button>
        </div>
      </form>
    </div>
  );
}
