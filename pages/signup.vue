<script setup lang="ts">

import { object, string } from 'yup';
import type { FormSubmitEvent } from '#ui/types';
import { storeToRefs } from 'pinia';
import { useBookStore } from '@/stores/books';
import { reactive } from 'vue';

const store = useBookStore();
const { fetchBooks } = store; // have all non reactiave stuff here
const { books } = storeToRefs(store); // have all reactive states here

await fetchBooks();

const schema = object({
  email: string().email('Invalid email').required('Required'),
  password: string()
    .min(8, 'Must be at least 8 characters')
    .required('Required'),
  favoriteBook: string().required('Required')
});


const state = reactive({
  email: '',
  password: '',
  favoriteBook: ''
});

async function onSubmit(event: FormSubmitEvent) {
  // Do something with event.data
  console.log(event.data);
}
</script>


<template>
  <NuxtLayout name="auth">
    <UCard class="max-w-2xl w-full">
      <template #header>
        <LayoutPageTitle>Sign up</LayoutPageTitle>
      </template>

      <UForm :schema="schema" :state="state" class="space-y-4" @submit="onSubmit">
    <UFormGroup label="Email" name="email">
      <UInput v-model="state.email" />
    </UFormGroup>

    <UFormGroup label="Password" name="password" help="Password must be at least 8 characters">
      <UInput v-model="state.password" type="password" />
    </UFormGroup>
    <UFormGroup label="Pick your favorite book!" name="favoriteBook">
      <USelect v-model="state.favoriteBook" :options="books" option-attribute="title" />
      </UFormGroup> 

<!-- TODO: add favorite book search? -->
    <CommonButton type="submit">
      Submit
    </CommonButton>
  </UForm>
       <div class="flex justify-end">
        <CommonLink to="/" target="_self">Back to Log in</CommonLink>
      </div>
    </UCard>
    <LayoutPageFooter />
  </NuxtLayout>
</template>
