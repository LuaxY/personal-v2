<template>
  <Popover class="relative">
    <div class="mx-auto flex max-w-6xl items-center justify-between p-5 md:py-10">
      <div class="text-4xl"><span class="font-bold">Yann</span> Guineau</div>
      <div class="md:hidden">
        <PopoverButton class="inline-flex items-center justify-center rounded-md border-2 border-emerald-600 p-2 text-zinc-400 hover:border-emerald-500 hover:text-zinc-300 focus:outline-none dark:border-yellow-600 dark:hover:border-yellow-500">
          <span class="sr-only">Open menu</span>
          <i class="fa-solid fa-bars"></i>
        </PopoverButton>
      </div>
      <div class="hidden items-center gap-x-6 md:flex">
        <a :href="link.url" target="_blank" rel="noopener noreferrer" class="flex items-center gap-x-2 text-zinc-300 transition-colors duration-200 hover:text-zinc-50" v-for="(link, i) in links" :key="i"><i :class="link.icon"></i> {{ link.name }}</a>
        <a href="https://www.linkedin.com/in/yann-guineau/" target="_blank" rel="noopener noreferrer" class="flex items-center gap-x-2 rounded-md bg-emerald-500 px-5 py-2 font-bold text-emerald-900 hover:bg-emerald-400 hover:text-emerald-800 dark:bg-yellow-500 dark:text-yellow-900 dark:hover:bg-yellow-400 dark:hover:text-yellow-800"><i class="fa-solid fa-handshake-simple"></i> Hire me</a>
      </div>
      <div class="absolute top-0 right-0 hidden p-7 md:block md:p-5">
        <button @click="toggleTheme" class="rounded-md border-2 border-emerald-600 py-1 px-2 text-zinc-400 hover:border-emerald-500 hover:text-zinc-300 focus:outline-none dark:border-yellow-600 dark:hover:border-yellow-500">
          <div v-if="isLightMode">
            <i class="fa-solid fa-moon"></i>
          </div>
          <div v-if="!isLightMode">
            <i class="fa-solid fa-brightness"></i>
          </div>
        </button>
      </div>
    </div>
    <transition enter-active-class="duration-200 ease-out" enter-from-class="opacity-0 scale-95" enter-to-class="opacity-100 scale-100" leave-active-class="duration-100 ease-in" leave-from-class="opacity-100 scale-100" leave-to-class="opacity-0 scale-95">
      <PopoverPanel focus class="absolute inset-x-0 top-0 origin-top-right transform p-2 transition md:hidden">
        <div class="divide-y-2 divide-gray-50 rounded-lg border-2 border-emerald-500 bg-emerald-1100 shadow-lg ring-1 ring-black ring-opacity-5 dark:border-yellow-500 dark:bg-zinc-900">
          <div class="px-5 pt-5 pb-6">
            <div class="flex items-center justify-between">
              <div>
                <div class="text-3xl"><span class="font-bold">Yann</span> Guineau</div>
              </div>
              <div class="-mr-2">
                <PopoverButton class="inline-flex items-center justify-center rounded-md p-2 text-zinc-400 hover:bg-emerald-800 hover:text-zinc-300 focus:outline-none dark:hover:bg-yellow-800">
                  <span class="sr-only">Close menu</span>
                  <i class="fa-solid fa-xmark-large"></i>
                </PopoverButton>
              </div>
            </div>
            <div class="mt-6">
              <nav class="grid gap-y-4">
                <a :href="link.url" target="_blank" rel="noopener noreferrer" class="flex items-center gap-x-4 rounded-md py-3 px-5 text-xl text-zinc-300 transition-colors duration-200 hover:bg-emerald-800 hover:text-zinc-50 dark:hover:bg-yellow-800" v-for="(link, i) in links" :key="i"> <i :class="link.icon" class="text-emerald-500 dark:text-yellow-500"></i> {{ link.name }} </a>
                <a href="https://www.linkedin.com/in/yann-guineau/" target="_blank" rel="noopener noreferrer" class="flex items-center gap-x-4 rounded-md bg-emerald-500 px-5 py-3 text-xl font-bold text-emerald-900 hover:bg-emerald-400 hover:text-emerald-800 dark:bg-yellow-500 dark:text-yellow-900 dark:hover:bg-yellow-400 dark:hover:text-yellow-800"><i class="fa-solid fa-handshake-simple"></i> Hire me</a>
                <div class="flex justify-center">
                  <button @click="toggleTheme" class="rounded-md border-2 border-emerald-600 py-2 px-3 text-xl text-zinc-400 hover:border-emerald-500 hover:text-zinc-300 focus:outline-none dark:border-yellow-600 dark:hover:border-yellow-500">
                    <div v-if="isLightMode">
                      <i class="fa-solid fa-moon"></i>
                    </div>
                    <div v-if="!isLightMode">
                      <i class="fa-solid fa-brightness"></i>
                    </div>
                  </button>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </PopoverPanel>
    </transition>
  </Popover>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { Popover, PopoverButton, PopoverGroup, PopoverPanel } from "@headlessui/vue";

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
