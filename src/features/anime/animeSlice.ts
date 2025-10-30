import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchAnimeDetail, fetchAnimeList } from "./animeThunks";
import { Anime, AnimeSearchResponse } from "./types";

interface AnimeState {
  query: string;
  page: number;
  totalPages: number;
  items: Anime[];
  isLoading: boolean;
  error: string | null;
  detailsById: Record<string, Anime>;
}

const initialState: AnimeState = {
  query: "",
  page: 1,
  totalPages: 1,
  items: [],
  isLoading: false,
  error: null,
  detailsById: {}
};

const animeSlice = createSlice({
  name: "anime",
  initialState,
  reducers: {
    setQuery(state, action: PayloadAction<string>) {
      state.query = action.payload;
      state.page = 1;
    },
    setPage(state, action: PayloadAction<number>) {
      state.page = action.payload;
    },
    clearError(state) {
      state.error = null;
    }
  },
  extraReducers: (builder) => {
    builder
      
      .addCase(fetchAnimeList.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchAnimeList.fulfilled, (state, action) => {
        state.isLoading = false;
        const payload = action.payload;
        state.items = payload.data;
        state.totalPages = payload.pagination.last_visible_page ?? 1;
      })
      .addCase(fetchAnimeList.rejected, (state, action) => {
        state.isLoading = false;
        if (action.meta.aborted) {
          return;
        }
        state.error = action.error.message ?? "Failed to fetch anime list";
      })
      
      .addCase(fetchAnimeDetail.fulfilled, (state, action) => {
        const anime = action.payload as Anime;
        state.detailsById[String(anime.mal_id)] = anime;
      })
      .addCase(fetchAnimeDetail.rejected, (state, action) => {
        if (action.meta.aborted) {
          return;
        }
        state.error = action.error.message ?? "Failed to fetch anime detail";
      });
  }
});

export const { setQuery, setPage, clearError } = animeSlice.actions;
export default animeSlice.reducer;
