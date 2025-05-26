export interface Series {
  id: number;
  title: string;
  coverImage: string;
  chapters: number;
  rating: number;
  status: 'Ongoing' | 'Completed';
  type: 'Manga' | 'Manhwa';
  genres: string[];
  views: number;
  updated: string;
  updatedDate: string;
  addedDate: string;
  description: string;
}