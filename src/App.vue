<template>
  <Header />
  <RouterView />
  <Footer />
</template>

<script setup lang="ts">
import { RouterView } from "vue-router";

if (localStorage.theme === "dark" || (!("theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches)) {
  document.documentElement.classList.add("dark");
} else {
  document.documentElement.classList.remove("dark");
}
</script>

<style lang="stylus">
html
  @apply text-zinc-50 bg-emerald-1000

  &.dark
    @apply text-zinc-50 bg-zinc-800

// @media (prefers-color-scheme: light)
//   body
//     @apply text-zinc-50 bg-emerald-1000

// @media (prefers-color-scheme: dark)
//   body
//     @apply text-zinc-50 bg-zinc-800
</style>
