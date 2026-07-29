<template>
  <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
    <h2 class="text-headline-lg text-secondary mb-4">Area Kos Terpopuler</h2>

    <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
      <a
        v-for="city in cities"
        :key="city.id"
        href="#"
        class="relative h-28 sm:h-32 rounded-md overflow-hidden group"
      >
        <img
          :src="city.imageUrl"
          :alt="`Kos ${city.name}`"
          class="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          loading="lazy"
        />
        <div class="absolute inset-0 bg-black/35" />
        <div class="absolute inset-0 flex items-center justify-center p-2">
          <span class="text-headline-sm text-white font-bold text-center">
            Kos {{ city.name }}
          </span>
        </div>
      </a>

      <NuxtLink
        to="#"
        class="h-28 sm:h-32 rounded-md border border-border bg-white flex items-center justify-center hover:border-primary transition-colors"
      >
        <span
          class="text-body-lg text-secondary font-bold flex items-center gap-1.5"
        >
          Lihat semua
          <ArrowRight class="w-4 h-4" />
        </span>
      </NuxtLink>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ArrowRight } from "lucide-vue-next";
import type { City } from "~/types/kost";

defineProps<{ cities: City[] }>();
</script>
