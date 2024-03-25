<template>
  <ULink
    :target="target"
    :href="href"
    :to="to" 
    class="text-[#00AFE5] dark:text-[#00AFE5] underline-on-hover"
  >
    <slot />
  </ULink>
</template>

<script lang="ts" setup>
import { defineProps } from 'vue';

const props = defineProps({
  target: {
    type: String as () => string | undefined,
    default: "_blank"
  },
  href: {
    type: String as () => string | undefined,
    default: ''
  },
  to: {
    type: String as () => string | undefined,
    default: ''
  }
});

</script>

<style scoped>
.underline-on-hover {
  text-decoration: underline;
}
.underline-on-hover:hover {
  text-decoration: none;
}
</style>
