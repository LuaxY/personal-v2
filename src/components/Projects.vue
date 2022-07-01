<template>
  <div class="bg-emerald-10 dark:bg-zinc-900">
    <div class="mx-auto hidden w-full max-w-6xl grid-cols-2 gap-x-20 py-20 md:grid">
      <div class="flex flex-col gap-y-10">
        <div class="flex h-32 flex-col items-center justify-center">
          <div class="text-3xl font-medium text-emerald-1000 dark:text-white">Latest Works</div>
          <div class="text-emerald-900 dark:text-zinc-400">An overview on what I have build</div>
        </div>
        <div v-for="(project, i) in projects" :key="i">
          <div v-if="i % 2">
            <Project :name="project.name" :description="project.description" :class="project.class" />
          </div>
        </div>
        <div class="flex h-32 flex-col items-center justify-center" v-if="projects.length % 2 != 0">
          <div class="text-3xl font-medium text-emerald-1000 dark:text-white">All Projects</div>
          <div class="text-emerald-900 dark:text-zinc-400">If you want to know more, contact me</div>
        </div>
      </div>
      <div class="flex flex-col gap-y-10">
        <div v-for="(project, i) in projects" :key="i">
          <div v-if="!(i % 2)">
            <Project :name="project.name" :description="project.description" :class="project.class" />
          </div>
        </div>
        <div class="flex h-32 flex-col items-center justify-center" v-if="projects.length % 2 == 0">
          <div class="text-3xl font-medium text-emerald-1000 dark:text-white">All Projects</div>
          <div class="text-emerald-900 dark:text-zinc-400">If you want to know more, contact me</div>
        </div>
      </div>
    </div>
    <div class="mx-auto grid w-full max-w-6xl grid-cols-1 gap-y-10 px-5 py-10 md:hidden">
      <div class="flex h-32 flex-col items-center justify-center">
        <div class="text-3xl font-medium text-emerald-1000 dark:text-white">Latest Works</div>
        <div class="text-emerald-900 dark:text-zinc-400">An overview on what I have build</div>
      </div>
      <Project :name="project.name" :description="project.description" :class="project.class" v-for="(project, i) in projects" :key="i" />
      <div class="flex h-32 flex-col items-center justify-center">
        <div class="text-3xl font-medium text-emerald-1000 dark:text-white">All Projects</div>
        <div class="text-emerald-900 dark:text-zinc-400">If you want to know more, contact me</div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
undefined;
const projects = [
  {
    name: "ExploraVerse",
    description: "ExploraVerse — Mars Edition is a strategic play-and-earn mini-game where Explorers can conquer the planet of Mars.",
    class: "exploraverse",
  },
  {
    name: "Web3 Gaming SDK",
    description: "An SDK that provides the base layer for blockchain-enabled games. Web3.unity provides the missing link between the Unity game engine and EVM blockchains.",
    class: "gaming-sdk",
  },
  {
    name: "Omnichain NFT",
    description: "Coming soon.", // Fully on-chain NFT project than can travel across serval blockchains and keep a common context.
    class: "omnichain-nft",
  },
  {
    name: "NFT Cloner",
    description: "Creation of NFT Cloner, a simple website that allows you to mint a free NFT and update the metadata indefinitely. The NFT can be used on social media like Twitter to display it as hexagonal profile picture.",
    class: "nftcloner",
  },
  {
    name: "ToyzNFT",
    description: "Realization of the backend, the frontend, the smart contracts and image & video assets generation for Toyz NFT, a collection of 1,111 Generated Toyz with various pop culture references. The collection is based on the toys and games we used to play during our childhoods!",
    class: "toyznft",
  },
  {
    name: "Gasless Meta Transaction",
    description: "Creation of B2B gasless transaction service, to improve new users on-boarding by lowering the requirements to interact with business DApp. Businesses can now offer to pay for transaction for their users and remove friction on their end.",
    class: "metatx",
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
  {
    name: "Airbus Helicopters",
    description: "Development of the Avionics test software for Airbus Helicopters. The software’s purpose was to test the integrity of the embedded systems in order to authorize the certification for new helicopters to fly.",
    class: "airbus-helicopters",
  },
];
</script>

<style lang="stylus">
.project
  &.exploraverse:before
    background-image: url("@/assets/images/projects/exploraverse.png")

  &.gaming-sdk:before
    background-image: url("@/assets/images/projects/gaming-sdk.png")

  &.omnichain-nft:before
    background-image: url("@/assets/images/projects/omnichain-nft.png")

  &.nftcloner:before
    background-image: url("@/assets/images/projects/nftcloner.png")

  &.toyznft:before
    background-image: url("@/assets/images/projects/toyznft.png")

  &.metatx:before
    background-image: url("@/assets/images/projects/metatx.png")

  &.ubisoft-monitoring:before
    background-image: url("@/assets/images/projects/ubisoft-monitoring.png")

  &.nitro-encoder:before
    background-image: url("@/assets/images/projects/nitro-encoder.png")

  &.dofus-anti-cheat:before
    background-image: url("@/assets/images/projects/dofus-anti-cheat.png")

  &.airbus-helicopters:before
    background-image: url("@/assets/images/projects/airbus-helicopters.png")
</style>
