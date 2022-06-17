<template>
  <div class="bg-emerald-10 dark:bg-zinc-900">
    <div class="mx-auto hidden w-full max-w-6xl grid-cols-2 gap-x-20 py-20 md:grid">
      <div class="flex flex-col gap-y-10">
        <div class="flex h-32 flex-col items-center justify-center">
          <div class="text-3xl text-emerald-1000 dark:text-white">Latest Works</div>
          <div class="text-emerald-900 dark:text-zinc-400">An overview on what I have build</div>
        </div>
        <div v-for="(project, i) in projects" :key="i">
          <div v-if="i % 2">
            <Project :name="project.name" :description="project.description" :class="project.class" />
          </div>
        </div>
      </div>
      <div class="flex flex-col gap-y-10">
        <div v-for="(project, i) in projects" :key="i">
          <div v-if="!(i % 2)">
            <Project :name="project.name" :description="project.description" :class="project.class" />
          </div>
        </div>
        <div class="flex h-32 flex-col items-center justify-center">
          <div class="text-3xl text-emerald-1000 dark:text-white">All Projects</div>
          <div class="text-emerald-900 dark:text-zinc-400">If you want to know more, contact me</div>
        </div>
      </div>
    </div>
    <div class="mx-auto grid w-full max-w-6xl grid-cols-1 gap-y-10 px-5 py-10 md:hidden">
      <div class="flex h-32 flex-col items-center justify-center">
        <div class="text-3xl text-emerald-1000 dark:text-white">Latest Works</div>
        <div class="text-emerald-900 dark:text-zinc-400">An overview on what I have build</div>
      </div>
      <Project :name="project.name" :description="project.description" :class="project.class" v-for="(project, i) in projects" :key="i" />
      <div class="flex h-32 flex-col items-center justify-center">
        <div class="text-3xl text-emerald-1000 dark:text-white">All Projects</div>
        <div class="text-emerald-900 dark:text-zinc-400">If you want to know more, contact me</div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
undefined;
const projects = [
  {
    name: "Ubisoft Monitoring",
    description: "Implementation of a Monitoring-as-a-Service system, to monitor Ubisoft's entire network infrastructure and its hundreds of thousands of daily players. MonASS uses the power of the multi cloud to be highly available, fault tolerant and recoverable in case of disasters.",
    class: "ubisoft-monitoring",
  },
  {
    name: "Nitro Video Encoder",
    description: "Nitro Encoder is a powerful transcoder of video into streaming format in a distributed manner. It splits movies into small chunks to allow parallel encoding in the cloud at a reduced price of preemptible GCP instances.",
    class: "nitro-encoder",
  },
  {
    name: "Dofus Anti-Cheat",
    description: "Realization of an anti cheating system for the popular game Dofus in France. It aims to fight against bots using several techniques such as behavior detection, machine learning, crypto whiteboxing, and security by obscurity (blackboxing). It also allows the detection of illegal gold sellers and so far no one has been able to bypass this system.",
    class: "dofus-anti-cheat",
  },
  {
    name: "Ubisoft Monitoring",
    description: "Implementation of a Monitoring-as-a-Service system, to monitor Ubisoft's entire network infrastructure and its hundreds of thousands of daily players. MonASS uses the power of the multi cloud to be highly available, fault tolerant and recoverable in case of disasters.",
    class: "ubisoft-monitoring",
  },
  {
    name: "Nitro Video Encoder",
    description: "Nitro Encoder is a powerful transcoder of video into streaming format in a distributed manner. It splits movies into small chunks to allow parallel encoding in the cloud at a reduced price of preemptible GCP instances.",
    class: "nitro-encoder",
  },
  {
    name: "Dofus Anti-Cheat",
    description: "Realization of an anti cheating system for the popular game Dofus in France. It aims to fight against bots using several techniques such as behavior detection, machine learning, crypto whiteboxing, and security by obscurity (blackboxing). It also allows the detection of illegal gold sellers and so far no one has been able to bypass this system.",
    class: "dofus-anti-cheat",
  },
];
</script>

<style lang="stylus">
.project
  &.ubisoft-monitoring:before
    background-image: url("@/assets/images/projects/ubisoft-monitoring.png")

  &.nitro-encoder:before
    background-image: url("@/assets/images/projects/nitro-encoder.png")

  &.dofus-anti-cheat:before
    background-image: url("@/assets/images/projects/dofus-anti-cheat.png")
</style>
