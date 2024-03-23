<script setup lang="ts">
definePageMeta({
  layout: false,
})
</script>

<template>
<NuxtLayout name="page" > 
    <template #header>about</template>
  <template #content>
    <p>This page will be displayed at the /about route.</p>
  </template>
    </NuxtLayout>
</template>