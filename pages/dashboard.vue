<template>
  <NuxtLayout name="page">
    <template #header>Welcome {{ state.email }}</template>
    <template #content>
      <div class="mb-4">
        <div v-if="myFavoriteBook" class="mb-4 flex flex-col items-center">
          <h2 class="text-lg font-semibold">Your favorite book:</h2>
          <div class="w-1/2">
            <UCard class="w-full" :style="favoriteCardStyle">
              <template #header>
                <CommonBookTitle>{{ myFavoriteBook.title }}</CommonBookTitle> Author: {{ myFavoriteBook.author }}
              </template>
              <div class="flex justify-between gap-4">
              <img :src="myFavoriteBook.cover_url" class="w-1/2" alt="Book Cover">
              <div >{{ myFavoriteBook.description }}</div>
              </div>
            </UCard>
          </div>
        </div>
        <h2 class="text-xl font-semibold mb-4">Here are some books you may like:</h2>

        <div class="flex flex-wrap justify-between">
          <div v-for="(book, index) in books" :key="index" class="w-full sm:w-1/2 md:w-1/2 lg:w-1/3 p-3">
            <UCard class="h-full" :style="book.id === favoriteBookId ? favoriteCardStyle : ''">
              <template #header>
                <CommonBookTitle>{{ book.title }}</CommonBookTitle> Author: {{ book.author }}
              </template>
              <img :src="book.cover_url" class="w-full h-52 object-cover" alt="Book Cover">
              <template #footer>
                {{ book.description }}
              </template>
            </UCard>
          </div>
        </div>
      </div>
    </template>
  </NuxtLayout>
</template>

<script setup lang="ts">
import type { BookType } from '~/api/books';
import { fetchBooks, getFavoriteBooks } from '~/api/books';
import { reactive, onMounted } from 'vue';
import { useUserStore } from '~/store/user';
const state = useUserStore()

definePageMeta({
  layout: false,
});

const books = reactive<BookType[]>([]);
let favoriteBookId: string | null = null;
let myFavoriteBook: BookType | null = null;
onMounted(async () => {
  try {
    favoriteBookId = await getFavoriteBooks(state.email);
    const fetchedBooks = await fetchBooks();
       myFavoriteBook = fetchedBooks.find((book: BookType) => book.id === favoriteBookId);
    const filteredBooks = fetchedBooks.filter((book: BookType) => book.id !== favoriteBookId);
    books.push(...filteredBooks);
  } catch (error) {
    console.error('Error fetching books:', error);
  }
});

const favoriteCardStyle = {
  backgroundImage: 'linear-gradient(to right, #11e4ea, #00afe5)'
};
</script>

<style scoped>
/* Ensure all cards have the same height */
.UCard {
  display: flex;
  flex-direction: column;
}

/* Ensure all cards have the same height */
.UCard > div {
  flex-grow: 1;
}
</style>
