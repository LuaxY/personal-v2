<template>
  <div class="mx-auto grid max-w-6xl grid-cols-1 justify-between gap-y-10 py-10 md:grid-cols-2 md:pt-16">
    <div class="flex flex-col items-center justify-center gap-y-5 md:items-start">
      <div class="text-2xl text-emerald-600 dark:text-yellow-500">Get a project?<br />Let's talk.</div>
      <div class="text-sm text-emerald-300 dark:text-slate-400">If you are interested in colaborating with me,<br />please don't hesitate to send me an email.</div>
      <a href="mailto:hello@voidmx.net" class="flex items-center gap-x-2"><i class="fa-solid fa-envelope"></i> hello@voidmx.net</a>
    </div>
    <div class="flex flex-col gap-y-3 self-end text-right">
      <div class="flex justify-center gap-x-5 text-xl md:justify-end">
        <a :href="link.url" target="_blank" rel="noopener noreferrer" class="flex items-center gap-x-2 text-emerald-200 transition-colors duration-200 hover:text-emerald-50 dark:text-zinc-300 dark:hover:text-zinc-50" v-for="(link, i) in links" :key="i"><i :class="link.icon"></i></a>
      </div>
      <a href="https://github.com/LuaxY/personal-v2" target="_blank" rel="noopener noreferrer" class="flex items-center justify-center gap-x-2 text-right text-sm text-emerald-600 hover:text-emerald-400 dark:text-slate-500 dark:hover:text-slate-300 md:justify-end"><i class="fa-solid fa-code"></i> View Code Source</a>
    </div>
  </div>
</template>

<script setup lang="ts">
const links = [
  {
    url: "https://twitter.com/Luax0",
    icon: "fa-brands fa-twitter",
  },
  {
    url: "https://github.com/LuaxY",
    icon: "fa-brands fa-github",
  },
  {
    url: "https://keybase.io/luax",
    icon: "fa-brands fa-keybase",
  },
  {
    url: "https://www.linkedin.com/in/yann-guineau/",
    icon: "fa-brands fa-linkedin",
  },
  {
    url: "https://calendly.com/yann-guineau/30min",
    icon: "fa-solid fa-calendar-days",
  },
];
</script>
