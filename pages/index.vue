<script setup lang="ts">
import { object, string, type InferType } from 'yup';
import type { FormSubmitEvent } from '#ui/types';

const schema = object({
  email: string().email('Invalid email').required('Required'),
  password: string().min(8, 'Must be at least 8 characters').required('Required'),
});

type Schema = InferType<typeof schema>;

const state = reactive({
  email: undefined,
  password: undefined,
});

async function onSubmit(event: FormSubmitEvent<Schema>) {
  // Do something with event.data
  console.log(event.data);
}
</script>

<template>
  <NuxtLayout name="auth">
    <UCard class="max-w-2xl w-full">
      <template #header>
        <LayoutPageTitle>Sign in</LayoutPageTitle>
      </template>

      <UForm :schema="schema" :state="state" class="space-y-4" @submit="onSubmit">
        <UFormGroup label="Email" name="email">
          <UInput v-model="state.email" />
        </UFormGroup>

        <UFormGroup label="Password" name="password" >
          <UInput v-model="state.password" type="password" />
        </UFormGroup>

        <CommonButton type="submit"> Submit </CommonButton>
      </UForm>
      <div class="flex justify-end">
        <CommonLink to="/signup" target="_self"> Sign up </CommonLink>
      </div>
    </UCard>
    <LayoutPageFooter />
  </NuxtLayout>
</template>
