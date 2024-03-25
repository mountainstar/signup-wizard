export interface BookType {
  id: string;
  title: string;
  author: string;
  description: string;
  cover_url: string;
}

export const fetchBooks = async () => {
  const response = await fetch('http://localhost:9000/books');
  const { data } = await response.json();

  return data.books;
};

export const getFavoriteBooks = async (username: string) => {
  const response = await fetch(`http://localhost:9000/users/${username}/favorites`);
  const { data } = await response.json();
  return data.favorites.book;
};
