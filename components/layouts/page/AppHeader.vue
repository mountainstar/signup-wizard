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
    <div :class="{ 'header-container-dark': isDark, 'header-container-light': !isDark }" class="flex items-center justify-between w-full fixed header-container">
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

<style scoped>
.header-container {
  padding: 1rem 2rem;
}

.logo-image {
  width: 134px;
  height: 47px;
}

.header-container-dark {
  background-color: #1f2937; /* Dark mode background color */
  color: #f9fafb; /* Dark mode text color */
}

.header-container-light {
  background-color: #ffffff; /* Light mode background color */
  color: #1f2937; /* Light mode text color */
}
</style>
