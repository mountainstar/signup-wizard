

<template>
  <NuxtLayout name="auth">
    <UCard class="max-w-2xl w-full">
      <template #header>
        <CommonT>Sign up</CommonT>
      </template>

      <UForm :schema="schema" :state="state" class="space-y-4" @submit="onSubmit">
        <UFormGroup label="Email" name="email">
          <UInput v-model="state.email" />
        </UFormGroup>

        <UFormGroup label="Password" name="password" help="Password must be at least 8 characters">
          <UInput v-model="state.password" type="password" />
        </UFormGroup>
        <UFormGroup label="Pick your favorite book!" name="favoriteBook">
          <USelect v-model="state.favoriteBook" :options="books" option-attribute="title" placeholder="Select a book" />
        </UFormGroup>
        <CommonButton type="submit"> Submit </CommonButton>
      </UForm>
      <div class="flex justify-end">
        <CommonLink to="/" target="_self">Back to Log in</CommonLink>
      </div>
    </UCard>
    <LayoutPageFooter />
  </NuxtLayout>
</template>
<script setup lang="ts">
import { object, string, type InferType } from 'yup';
import type { FormSubmitEvent } from '#ui/types';
import { fetchBooks } from '../api/books';
import type { BookType } from '../api/books';
import { reactive, onMounted } from 'vue';
import {useUserStore} from '../store/user';
const state = useUserStore()


const books = reactive<BookType[]>([]);

onMounted(async () => {
  try {
    const fetchedBooks = await fetchBooks();
    books.push(...fetchedBooks);
  } catch (error) {
    console.error('Error fetching books:', error);
  }
});

const schema = object({
  email: string().email('Invalid email').required('Required'),
  password: string().min(8, 'Must be at least 8 characters').required('Required'),
  favoriteBook: string().required('Required'),
});
type Schema = InferType<typeof schema>;

const onSubmit = async (event: FormSubmitEvent<Schema>) => {
  try {
    const { email, password, favoriteBook } = event.data;
    const book = books.find((b) => b.title === favoriteBook);

    await $fetch('http://localhost:9000/users/new', {
      method: 'POST',
      body: {
        username: email,
        password,
      },
    });
    await $fetch(`http://localhost:9000/users/${email}/favorites`, {
      method: 'POST',
      body: {
        book: book?.id,
      },
    });
    await navigateTo('/');
  } catch (error) {
    console.error(error);
  }
};
</script>