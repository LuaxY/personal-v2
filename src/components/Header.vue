<template>
  <div class="mx-auto flex max-w-6xl justify-between p-5 md:py-10">
    <div class="text-4xl"><span class="font-bold">Yann</span> Guineau</div>
    <div class="hidden items-center gap-x-6 md:flex">
      <a :href="link.url" target="_blank" rel="noopener noreferrer" class="flex items-center gap-x-2 text-zinc-300 transition-colors duration-200 hover:text-zinc-50" v-for="(link, i) in links" :key="i"><i :class="link.icon"></i> {{ link.name }}</a>
      <a href="https://www.linkedin.com/in/yann-guineau/" target="_blank" rel="noopener noreferrer" class="flex items-center gap-x-2 rounded-md bg-emerald-500 px-5 py-2 font-bold text-emerald-900 hover:bg-emerald-400 hover:text-emerald-800 dark:bg-yellow-500 dark:text-yellow-900 dark:hover:bg-yellow-400 dark:hover:text-yellow-800"><i class="fa-solid fa-handshake-simple"></i> Hire me</a>
    </div>
    <div class="absolute top-0 right-0 p-7 md:p-5">
      <button @click="toggleTheme">
        <div v-if="isLightMode">
          <i class="fa-solid fa-moon"></i>
        </div>
        <div v-if="!isLightMode">
          <i class="fa-solid fa-brightness"></i>
        </div>
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const isLightMode = ref(false);

if (localStorage.theme === "dark" || (!("theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches)) {
  isLightMode.value = false;
} else {
  isLightMode.value = true;
}

const toggleTheme = () => {
  console.log("toggleTheme");
  if (localStorage.theme === "dark" || (!("theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches)) {
    document.documentElement.classList.remove("dark");
    localStorage.theme = "light";
    isLightMode.value = true;
  } else {
    document.documentElement.classList.add("dark");
    localStorage.theme = "dark";
    isLightMode.value = false;
  }
};

const links = [
  {
    name: "Twitter",
    url: "https://twitter.com/Luax0",
    icon: "fa-brands fa-twitter",
  },
  {
    name: "GitHub",
    url: "https://github.com/LuaxY",
    icon: "fa-brands fa-github",
  },
  {
    name: "Keybase",
    url: "https://keybase.io/luax",
    icon: "fa-brands fa-keybase",
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/yann-guineau/",
    icon: "fa-brands fa-linkedin",
  },
  // {
  //   name: "Meeting",
  //   url: "https://calendly.com/yann-guineau/30min",
  //   icon: "fa-solid fa-calendar-days",
  // },
  {
    name: "Resume",
    url: "https://www.dropbox.com/s/qyyjbiiq897cuf3/Yann_Guineau_-_Sr._Blockchain_Developer.pdf?dl=0",
    icon: "fa-solid fa-file-user",
  },
];
</script>

<style scoped lang="stylus"></style>
