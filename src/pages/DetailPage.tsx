import { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { fetchAnimeDetail } from "../features/anime/animeThunks";
import ErrorPopup from "../components/ErrorPopup";
import { clearError } from "../features/anime/animeSlice";

const DetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const dispatch = useAppDispatch();
  const { detailsById, error } = useAppSelector((s) => s.anime);
  const anime = id ? detailsById[id] : null;

  useEffect(() => {
    if (id && !anime) {
      dispatch(fetchAnimeDetail({ id }));
    }
  }, [id, anime, dispatch]);

  return (
    <div className="max-w-3xl mx-auto px-4 py-6">
      {error && <ErrorPopup message={error} onClose={() => dispatch(clearError())} />}

      <Link to="/" className="text-sm text-emerald-400 hover:underline">
        ← Back to search
      </Link>

      {!anime ? (
        <div className="mt-6 animate-pulse space-y-4">
          <div className="h-6 bg-slate-800 rounded w-1/2"></div>
          <div className="h-4 bg-slate-800 rounded w-full"></div>
          <div className="h-4 bg-slate-800 rounded w-3/4"></div>
          <div className="h-60 bg-slate-900 rounded"></div>
        </div>
      ) : (
        <div className="mt-6 flex gap-6 flex-col md:flex-row">
          <div className="w-full md:w-1/3 bg-slate-900/40 rounded-xl overflow-hidden">
            <img
              src={
                anime.images?.webp?.image_url ||
                anime.images?.jpg?.image_url ||
                ""
              }
              alt={anime.title}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex-1 space-y-3">
            <h1 className="text-2xl font-semibold">{anime.title}</h1>
            <p className="text-slate-400 text-sm">
              Score: {anime.score ?? "N/A"} • Episodes: {anime.episodes ?? "?"} •
              Year: {anime.year ?? "Unknown"}
            </p>
            <p className="text-slate-200 leading-relaxed">
              {anime.synopsis ?? "No synopsis available."}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default DetailPage;
