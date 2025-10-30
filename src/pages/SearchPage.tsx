import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import {
  clearError,
  setPage,
  setQuery
} from "../features/anime/animeSlice";
import { fetchAnimeList } from "../features/anime/animeThunks";
import SearchBar from "../components/SearchBar";
import AnimeGrid from "../components/AnimeGrid";
import SkeletonCard from "../components/SkeletonCard";
import Pagination from "../components/Pagination";
import ErrorPopup from "../components/ErrorPopup";

function useDebounce<T>(value: T, delay: number) {
  const [debounced, setDebounced] = useState(value);
  useEffect(() => {
    const timer = setTimeout(() => setDebounced(value), delay);
    return () => clearTimeout(timer);
  }, [value, delay]);
  return debounced;
}

const SearchPage = () => {
  const dispatch = useAppDispatch();
  const { query, items, isLoading, page, totalPages, error } = useAppSelector(
    (state) => state.anime
  );
  const [searchInput, setSearchInput] = useState(query);
  const debouncedQuery = useDebounce(searchInput, 250);

  useEffect(() => {
    dispatch(setQuery(debouncedQuery));
  }, [debouncedQuery, dispatch]);

  useEffect(() => {
    dispatch(fetchAnimeList({ query: debouncedQuery, page }));
  }, [debouncedQuery, page, dispatch]);

  return (
    <div className="max-w-6xl mx-auto px-4 py-6 space-y-6">
      {error && <ErrorPopup message={error} onClose={() => dispatch(clearError())} />}

      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h2 className="text-xl font-semibold">Search Anime</h2>
        </div>
      </div>

      <SearchBar value={searchInput} onChange={setSearchInput} />

      {isLoading ? (
        <div className="grid gap-4 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
          {Array.from({ length: 10 }).map((_, i) => (
            <SkeletonCard key={i} />
          ))}
        </div>
      ) : items.length === 0 ? (
        <div className="text-center py-16 text-slate-400">
          No results. Try searching “naruto” or “one piece”.
        </div>
      ) : (
        <>
          <AnimeGrid items={items} />
          <Pagination
            current={page}
            total={totalPages}
            onChange={(p) => dispatch(setPage(p))}
          />
        </>
      )}
    </div>
  );
};

export default SearchPage;
