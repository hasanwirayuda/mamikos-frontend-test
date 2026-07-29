<!-- app/components/home/CampusGrid.vue -->
<template>
  <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
    <h2 class="text-headline-lg text-secondary mb-4">Kos Sekitar Kampus</h2>

    <div class="grid grid-cols-2 sm:grid-cols-4 gap-4">
      <a
        v-for="campus in campuses"
        :key="campus.id"
        href="#"
        class="flex items-center gap-3 p-3 rounded-md border border-border bg-white hover:border-primary transition-colors"
      >
        <span
          class="flex items-center justify-center w-10 h-10 rounded-full bg-chip shrink-0"
        >
          <component
            :is="resolveIcon(campus.iconName)"
            class="w-5 h-5 text-primary"
          />
        </span>
        <span>
          <span
            class="block text-body-lg text-secondary font-bold leading-tight"
          >
            {{ campus.name }}
          </span>
          <span class="block text-body-sm text-tertiary">{{
            campus.city
          }}</span>
        </span>
      </a>

      <NuxtLink
        to="#"
        class="flex items-center justify-center p-3 rounded-md border border-border bg-white hover:border-primary transition-colors"
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
import { ArrowRight, GraduationCap, School, Landmark } from "lucide-vue-next";
import type { Campus } from "~/types/kost";

defineProps<{ campuses: Campus[] }>();

const iconMap: Record<string, unknown> = {
  graduation: GraduationCap,
  school: School,
  landmark: Landmark,
};

function resolveIcon(iconName?: string) {
  return (iconName && iconMap[iconName]) ?? GraduationCap;
}
</script>
