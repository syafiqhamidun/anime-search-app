import { createAsyncThunk } from "@reduxjs/toolkit";
import { searchAnime, getAnimeById } from "../../api/jikan";
import { AnimeSearchResponse } from "./types";

export const fetchAnimeList = createAsyncThunk<
  AnimeSearchResponse,
  { query: string; page: number }
>("anime/fetchList", async ({ query, page }) => {
  const data = await searchAnime(query, page);
  return data;
});

export const fetchAnimeDetail = createAsyncThunk<
  any,
  { id: string }
>("anime/fetchDetail", async ({ id }) => {
  const data = await getAnimeById(id);
  return data.data;
});
