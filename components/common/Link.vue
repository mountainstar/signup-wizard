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

<script>
export default {
  props: {
    target: {
      type: String,
      default: "_blank"
    },
    href: {
      type: String | undefined,
      default: undefined
    },
    to: {
      type: [String, Object, undefined],
      default: undefined
    }
  }
};
</script>

<style scoped>
  .underline-on-hover {
    text-decoration: underline;
  }
  .underline-on-hover:hover {
    text-decoration: none;
  }
</style>
