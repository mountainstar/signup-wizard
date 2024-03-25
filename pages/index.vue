<template>
  <NuxtLayout name="auth">
    <UCard class="max-w-2xl w-full">
      <template #header>
        <CommonTitle>Log in</CommonTitle>
      </template>

      <UForm :schema="schema" :state="state" class="space-y-4" @submit="onSubmit">
        <UFormGroup label="Email" name="email">
          <UInput v-model="state.email" />
        </UFormGroup>

        <UFormGroup label="Password" name="password">
          <UInput v-model="state.password" type="password" />
        </UFormGroup>

        <CommonButton type="submit"> Submit </CommonButton>
      </UForm>
      <div class="flex justify-end">
        <CommonLink to="/signup" target="_self"> Don't have an account? Sign up </CommonLink>
      </div>
    </UCard>
    <LayoutPageFooter />
  </NuxtLayout>
</template>

<script setup lang="ts">
import { object, string, type InferType } from 'yup';
import type { FormSubmitEvent } from '#ui/types';
import {useUserStore} from '../store/user';
const state = useUserStore()

const schema = object({
  email: string().email('Invalid email').required('Required'),
  password: string().min(8, 'Must be at least 8 characters').required('Required'),
});

type Schema = InferType<typeof schema>;



const onSubmit = async (event: FormSubmitEvent<Schema>) =>{
  const { email, password } = event.data;

  try{
    await $fetch('http://localhost:9000/login', {
      method: 'POST',
      body: {
        username: email,
        password,
      },
    });
   await navigateTo('/dashboard');

  } catch (error) {
    console.error('Error logging in user:', error);
// TODO: add some alert to show the user that the login failed

  }
}
</script>
