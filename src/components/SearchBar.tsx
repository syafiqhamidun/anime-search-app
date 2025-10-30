import React from "react";

interface SearchBarProps {
  value: string;
  onChange: (v: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ value, onChange }) => {
  return (
    <div className="relative">
      <input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Search anime…"
        className="w-full bg-slate-900/60 border border-slate-700 rounded-xl py-2 pl-10 pr-4 focus:outline-none focus:ring-2 focus:ring-emerald-400/60 transition"
      />
      <span className="absolute left-3 top-2.5 text-slate-500">🔎</span>
    </div>
  );
};

export default SearchBar;
