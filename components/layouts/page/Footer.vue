
<template>
  <footer class="fixed bottom-0 right-0 w-full bg-transparent dark:bg-transparent">
    <div class="max-w-screen-2xl mx-auto px-4 py-2 flex justify-end text-xs text-gray-400">
      <div>
        Copyright © {{ new Date().getFullYear() }}
        <ULink
    target="_blank"
    href="https://book.io/"
    class="text-[#00AFE5] dark:text-[#00AFE5] underline-on-hover"
  >
    Book.io
  </ULink>. All rights reserved.
      </div>
    </div>
  </footer>
</template>

<style scoped>
  .underline-on-hover {
    text-decoration: underline;
  }
  .underline-on-hover:hover {
    text-decoration: none;
  }
</style>