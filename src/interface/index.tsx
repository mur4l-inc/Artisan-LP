export interface IResult {
  adult: boolean;
  backdrop_path: string;
  id: number;
  title: string;
  original_language: string;
  original_title: string;
  overview: string;
  poster_path: string;
  media_type: string;
  genre_ids: number[]; // assuming that the genre_ids array contains numbers
  popularity: number;
  release_date: string; // you might want to use Date type if you're going to work with dates
  video: boolean;
  vote_average: number;
  vote_count: number;
}
