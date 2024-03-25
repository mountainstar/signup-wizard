<template>
  <UButton class="gradient-button"> <slot /> </UButton>
</template>

<style>
.gradient-button {
  background-image: linear-gradient(to right, #11e4ea, #00afe5);
}
</style>
