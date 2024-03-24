<script setup lang="ts">
definePageMeta({
  layout: false,
})
</script>

<template>
<NuxtLayout name="page" > 
    <template #header color="blue">Dashboard</template>
  <template #content>
    <p>This page will be displayed at the /Dashboard route.</p>
  </template>
    </NuxtLayout>
</template>