
<template>
  <div class="text-2xl font-bold">
    <slot>{{ text }}</slot>
  </div>
</template>

<script lang="ts" setup>
defineProps({
  text: {
    type: String,
    default: '',
  },
})
</script>