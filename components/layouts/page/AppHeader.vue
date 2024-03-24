<script setup lang="ts">
const colorMode = useColorMode()
const isDark = computed({
  get () {
    return colorMode.value === 'dark'
  },
  set () {
    colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark'
  }
})
</script>

<template>
  <ClientOnly>
    <div class="flex items-center justify-between w-full header-container fixed">
      <div class="flex items-center">
        <img class="logo-image" src="~/assets/img/cropped-book.png" alt="Logo" />
      </div>
    <UButton
      :icon="isDark ? 'i-heroicons-moon-20-solid' : 'i-heroicons-sun-20-solid'"
      color="gray"
      variant="ghost"
      aria-label="Theme"
      @click="isDark = !isDark"
    >{{ isDark ? 'Dark mode' : 'Light Mode' }}</UButton>
        </div>

    <template #fallback>
      <div class="w-8 h-8" />
    </template>
  </ClientOnly>
</template>

<style>
.header-container {
padding: 1rem 2rem;    }
.logo-image {
    width: 134px;
    height: 47px
}
</style>