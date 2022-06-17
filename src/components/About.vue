<template>
  <div class="bg-emerald-10 dark:bg-zinc-900">
    <div class="mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 py-10 px-5 md:grid-cols-2 md:py-20 md:px-0">
      <div class="flex flex-col gap-y-5">
        <div v-for="(activity, i) in activities" :key="i" class="relative space-y-2 rounded-md bg-emerald-1000 p-5 shadow-md dark:bg-zinc-800 md:p-8">
          <div class="text-xl text-emerald-500 dark:text-yellow-500">{{ activity.name }}</div>
          <div class="text-slate-300">{{ activity.description }}</div>
          <div class="absolute right-0 top-0 p-2 text-xl text-emerald-500 dark:text-yellow-500 md:p-5"><i :class="activity.icon"></i></div>
        </div>
      </div>
      <div class="order-first flex flex-col gap-y-7 md:order-last md:pl-14">
        <div class="text-3xl font-medium text-emerald-1000 dark:text-white">About Me</div>
        <p class="text-justify text-emerald-900 dark:text-slate-300 md:text-lg">I am passionate about innovation in the Computer Science realm and I am continuously looking to find new technologies that will revolutionize the world we currently know, including Blockchains, Decentralization, Distributed Work, Cloud Computing, Machine Learning and more.s</p>
        <p class="text-justify text-emerald-900 dark:text-slate-300 md:text-lg">I have experience in different domains including Networking, Embedded Systems, Cyber Security, Video Games, Streaming Platforms, and Monitoring Systems. I am committed to discovering new practices and expand my knowledge of different technologies.</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const activities = [
  {
    name: "Blockchain",
    description: "Creation of smart contracts on Ethereum and others blockchains.",
    icon: "fa-brands fa-ethereum",
  },
  {
    name: "Cloud Computing",
    description: "Infrastructure design for cloud-powered projects.",
    icon: "fa-solid fa-cloud",
  },
  {
    name: "Backend Development",
    description: "Development of high performance backend services.",
    icon: "fa-solid fa-code",
  },
];
</script>
