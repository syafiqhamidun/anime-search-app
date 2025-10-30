import { useEffect, useMemo, useRef } from 'react';
import SearchBar from '../components/SearchBar';
import AnimeCard from '../components/AnimeCard';
import Pagination from '../components/Pagination';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import { setPage, setQuery } from '../features/anime/animeSlice';
import { fetchAnimeList } from '../features/anime/animeThunks';

export default function Home() {
	const dispatch = useAppDispatch();
	const { query, page, items, isLoading, error, totalPages } = useAppSelector((s) => s.anime);

	const lastPromiseRef = useRef<any | null>(null);

	useEffect(() => {
		if (lastPromiseRef.current && typeof lastPromiseRef.current.abort === 'function') {
			lastPromiseRef.current.abort();
		}
		if (!query) {
			return;
		}
		const p = dispatch(fetchAnimeList({ query, page }));
		lastPromiseRef.current = p;
		return () => {
			if (p && typeof p.abort === 'function') p.abort();
		};
	}, [query, page, dispatch]);

	const grid = useMemo(() => (
		<div className="grid gap-4 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
			{items.map((a) => (
				<AnimeCard anime={a} key={a.mal_id} />
			))}
		</div>
	), [items]);

	return (
		<div className="space-y-6">
			<SearchBar value={query} onChange={(v) => dispatch(setQuery(v))} />

			{isLoading && !items.length ? (
				<p className="text-sm text-gray-500">Searching…</p>
			) : null}

			{error ? (
				<p className="text-sm text-red-600">{error}</p>
			) : null}

			{items.length ? grid : (!isLoading && query ? <p className="text-sm text-gray-500">No results</p> : null)}

			<Pagination
				current={page}
				total={totalPages}
				onChange={(p) => dispatch(setPage(p))}
			/>
		</div>
	);
}


