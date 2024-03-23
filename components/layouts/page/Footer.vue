<script lang="ts" setup>
</script>

<template>
  <footer class="flex border-t border-gray-900/10 dark:border-gray-50/[0.2]">
    <div
      class="flex-1 justify-between max-w-screen-2xl mx-auto px-4 flex flex-col md:flex-row py-2 space-y-2 md:space-y-0 items-center text-xs text-center md:text-left text-gray-400"
    >
      <div>
        Copyright ©
        {{ new Date().getFullYear() }}
        <ULink
    href="https://book.io/"
    active-class="text-primary"
    inactive-class="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200"
  >
    Link
  </ULink>. All rights reserved.
      </div>
    </div>
  </footer>
</template>
