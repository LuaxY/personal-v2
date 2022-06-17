<template>
  <div class="project group relative z-10 h-56 w-full cursor-pointer self-center rounded-lg shadow-md md:h-80" :class="class">
    <h4 class="absolute inset-0 flex h-full w-full items-center justify-center text-2xl transition-opacity duration-200 group-hover:opacity-0 md:text-3xl">{{ name }}</h4>
    <p class="absolute inset-0 flex h-full w-full items-center justify-center p-10 text-justify text-sm opacity-0 transition-opacity duration-200 group-hover:opacity-100 md:text-base">{{ description }}</p>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  name: String,
  description: String,
  class: String,
});
</script>

<style lang="stylus">
.project
  h4
    text-shadow 0 0 15px #000

  &:before
    @apply absolute block inset-0 rounded-lg z-0 bg-no-repeat bg-cover bg-center transition-opacity
    content ""

.project
  &:before
    opacity: 1

  &:hover
    &:before
      opacity: .2
    p
      @apply text-emerald-1000

.dark .project
  &:before
    opacity: .6

  &:hover
    &:before
      opacity: .2
    p
      @apply text-white
</style>
