<template>
  <div class="bg-emerald-10 dark:bg-zinc-900">
    <div class="mx-auto hidden max-w-6xl items-center justify-between gap-x-10 py-10 md:flex">
      <a :href="company.url" target="_blank" rel="noopener noreferrer" v-for="(company, i) in companies" :key="i">
        <img :src="company.logo" :alt="company.name" class="object-cover opacity-30 invert transition-opacity duration-200 hover:opacity-95 dark:invert-0" />
      </a>
    </div>
    <div class="block py-10 md:hidden">
      <swiper
        :slides-per-view="2"
        :space-between="30"
        :modules="modules"
        :navigation="{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }"
        class="px-5"
      >
        <swiper-slide v-for="(company, i) in companies" :key="i">
          <a :href="company.url" target="_blank" rel="noopener noreferrer">
            <img :src="company.logo" :alt="company.name" class="object-cover opacity-30 invert transition-opacity duration-200 hover:opacity-95 dark:invert-0" />
          </a>
        </swiper-slide>
      </swiper>
      <div class="mt-5 flex items-center justify-center gap-x-10 px-5">
        <div class="swiper-button-prev flex cursor-pointer justify-items-center rounded-full border-2 border-zinc-400 p-3 text-zinc-400 dark:border-zinc-600 dark:text-zinc-600">
          <i class="fa-solid fa-chevron-left h-5 w-5 self-center"></i>
        </div>
        <div class="swiper-button-next flex cursor-pointer justify-items-center rounded-full border-2 border-zinc-400 p-3 text-zinc-400 dark:border-zinc-600 dark:text-zinc-600">
          <i class="fa-solid fa-chevron-right h-5 w-5 self-center"></i>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation, FreeMode } from "swiper";
import "swiper/css";

import AirbusLogo from "@/assets/images/companies/airbus.png";
import AnkamaLogo from "@/assets/images/companies/ankama.png";
import UbisoftLogo from "@/assets/images/companies/ubisoft.png";
import AtosBullLogo from "@/assets/images/companies/atos-bull.png";
import DigitalVirogoLogo from "@/assets/images/companies/digital-virgo.png";
import ChainSafeLogo from "@/assets/images/companies/chainsafe.png";

const modules = [Navigation, FreeMode];

const companies = [
  {
    name: "Airbus Helicopters",
    url: "https://www.airbus.com/helicopters.html",
    logo: AirbusLogo,
  },
  {
    name: "Ankama Games",
    url: "https://www.ankama.com/",
    logo: AnkamaLogo,
  },
  {
    name: "ChainSafe Systems",
    url: "https://chainsafe.io/",
    logo: ChainSafeLogo,
  },
  {
    name: "Ubisoft Montreal",
    url: "https://montreal.ubisoft.com/",
    logo: UbisoftLogo,
  },
  {
    name: "Atos Buss",
    url: "https://atos.net/",
    logo: AtosBullLogo,
  },
  {
    name: "Digital Virgo",
    url: "https://www.digitalvirgo.com/",
    logo: DigitalVirogoLogo,
  },
];
</script>

<style lang="stylus">
.swiper-wrapper
  @apply flex items-center
</style>
