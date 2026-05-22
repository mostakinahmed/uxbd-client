import { Search } from "lucide-react";

const SearchBox = ({
  placeholder = "Search...",
  value,
  onChange,
  onSubmit,
  className = "",
}) => {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit?.(value);
      }}
      className={`relative w-full px-2 md:hidden ${className}`}
    >
      <input
        type="text"
        value={value}
        onChange={(e) => onChange?.(e.target.value)}
        placeholder={placeholder}
        className="w-full border bg-white border-blue-400 rounded-full px-6 py-2 pr-14 outline-none focus:ring-2 focus:ring-blue-300 transition"
      />

      <button
        type="submit"
        className="absolute right-3 top-1/2 -translate-y-1/2 h-[82%] px-5 bg-blue-500 text-white rounded-full flex items-center justify-center hover:bg-blue-600 transition"
      >
        <Search size={20} />
      </button>
    </form>
  );
};

export default SearchBox;