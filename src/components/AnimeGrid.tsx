import { Anime } from "../features/anime/types";
import AnimeCard from "./AnimeCard";

interface AnimeGridProps {
  items: Anime[];
}

const AnimeGrid = ({ items }: AnimeGridProps) => {
  return (
    <div className="grid gap-4 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
      {items.map((anime) => (
        <AnimeCard key={anime.mal_id} anime={anime} />
      ))}
    </div>
  );
};

export default AnimeGrid;
