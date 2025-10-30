export interface Anime {
	mal_id: number;
	title: string;
	images?: {
	  jpg?: {
		image_url?: string;
	  };
	  webp?: {
		image_url?: string;
	  };
	};
	synopsis?: string;
	year?: number;
	score?: number;
	episodes?: number;
  }
  
  export interface AnimeSearchResponse {
	data: Anime[];
	pagination: {
	  last_visible_page: number;
	  has_next_page: boolean;
	  current_page: number;
	  items: {
		count: number;
		total: number;
		per_page: number;
	  };
	};
  }
  