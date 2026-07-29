<template>
  <section class="relative overflow-hidden bg-white">
    <div
      class="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-8 md:pt-14 md:pb-12"
    >
      <div class="relative z-10 max-w-xl">
        <h1 class="text-headline-display text-secondary mb-2">Mau cari kos?</h1>
        <p class="text-body-md text-tertiary mb-6">
          Dapatkan infonya dan langsung sewa di Mamikos.
        </p>

        <form
          class="flex flex-col sm:flex-row gap-3"
          @submit.prevent="handleSearch"
        >
          <div class="relative flex-1">
            <Search
              class="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-tertiary pointer-events-none"
            />
            <input
              v-model="query"
              type="text"
              placeholder="Masukkan nama lokasi/area/alamat"
              class="input-base w-full pl-11"
            />
          </div>
          <BaseButton type="submit" variant="primary" class="sm:w-auto w-full">
            Cari
          </BaseButton>
        </form>
      </div>
    </div>

    <!-- Decorative background illustration (placeholder for the city skyline) -->
    <div
      class="pointer-events-none absolute inset-y-0 right-0 hidden lg:block w-1/2 opacity-70"
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 500 300"
        class="w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="80" cy="60" r="18" fill="#E8E8E8" />
        <circle cx="105" cy="55" r="24" fill="#E8E8E8" />
        <circle cx="130" cy="62" r="16" fill="#E8E8E8" />
        <circle cx="380" cy="40" r="14" fill="#E8E8E8" />
        <circle cx="400" cy="36" r="20" fill="#E8E8E8" />
        <g stroke="#E8E8E8" stroke-width="2" fill="none">
          <rect x="180" y="150" width="40" height="130" />
          <rect x="230" y="110" width="50" height="170" />
          <rect x="290" y="170" width="35" height="110" />
          <rect x="335" y="90" width="55" height="190" />
          <rect x="400" y="140" width="45" height="140" />
          <line x1="255" y1="110" x2="255" y2="90" />
          <line x1="245" y1="95" x2="265" y2="95" />
        </g>
      </svg>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { Search } from "lucide-vue-next";
import BaseButton from "~/components/ui/BaseButton.vue";

const query = ref("");

function handleSearch() {
  // UI-only per AGENT.md — no real search integration in this test
  console.log("Search query:", query.value);
}
</script>
