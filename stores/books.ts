import { defineStore } from 'pinia';
interface Book {
  id: string;
  title: string;
  author: string;
  description: string;
  cover_url: string;
}
export const useBookStore = defineStore('books', () => {
  const books = ref<Book[]>([]);
  const fetchBooks = async () => {
    const { data }: any = await $fetch('http://localhost:9000/books');
    if (data.books) {
      books.value = data.books;
    }
  };

  return {
    books,
    fetchBooks,
  };
});
