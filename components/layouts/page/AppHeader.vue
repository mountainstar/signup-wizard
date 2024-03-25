
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
      >{{ isDark ? 'Switch to Light mode' : 'Switch to Dark Mode' }}</UButton>
    </div>
    <template #fallback>
      <div class="w-8 h-8" />
    </template>
  </ClientOnly>
</template>

<style scoped>
.header-container {
  padding: 2rem 2rem;
  border-bottom: 1px solid rgba(0, 0, 0, 0.12);
}

.logo-image {
  width: 134px;
  height: 47px;
}

.header-container-dark {
  background-color: #1f2937; 
  color: #f9fafb; 
}

.header-container-light {
  background-color: #ffffff; 
  color: #1f2937; 
}
</style>

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
