export const useWebsiteStore = defineStore('booksStore', {
  state: () => [
    {
      id: '',
      title: '',
      author: '',
      description: '',
      cover_url: '',
    },
  ],
  actions: {
    async fetch() {
      const { data } = await $fetch('https://localhost:9000/books');
      this.books = data;
    },
  },
});
