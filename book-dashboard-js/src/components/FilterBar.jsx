export default function FilterBar({ search, onSearchChange, filter, onFilterChange }) {
  return (
    <div className="flex flex-wrap gap-4 mb-4">
      <input
        type="text"
        placeholder="Search by title or author"
        value={search}
        onChange={(e) => onSearchChange(e.target.value)}
        className="p-2 border rounded w-full md:w-64"
      />

      <select
        value={filter.genre}
        onChange={(e) => onFilterChange({ ...filter, genre: e.target.value })}
        className="p-2 border rounded"
      >
        <option value="">All Genres</option>
        <option value="Fiction">Fiction</option>
        <option value="Programming">Programming</option>
        <option value="Mystery">Mystery</option>
        <option value="Sci-Fi">Sci-Fi</option>
        {/* Add more genres if needed */}
      </select>

      <select
        value={filter.status}
        onChange={(e) => onFilterChange({ ...filter, status: e.target.value })}
        className="p-2 border rounded"
      >
        <option value="">All Status</option>
        <option value="Available">Available</option>
        <option value="Issued">Issued</option>
      </select>
    </div>
  );
}
