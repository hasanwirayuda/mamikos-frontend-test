<template>
  <section class="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-3">
    <div
      class="card-base flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 rounded-xl shadow-lg"
    >
      <div>
        <h3 class="text-headline-lg font-extrabold text-secondary mb-1">
          Survei Kos Idaman Kamu Sekarang!
        </h3>
        <p class="text-body-lg font-light text-secondary">
          Untungnya ada fitur Survei Kos di Mamikos. Cari, pilih, survei, hingga
          sewa kos idaman dijamin aman dan <br />
          GRATIS.
        </p>
        <BaseButton variant="link" class="mt-2 underline font-bold"
          >Baca selengkapnya</BaseButton
        >
      </div>
      <div
        class="hidden sm:grid grid-cols-6 gap-1.5 shrink-0"
        aria-hidden="true"
      >
        <span
          v-for="i in 24"
          :key="i"
          class="w-1.5 h-1.5 rounded-full bg-primary/20"
        />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import BaseButton from "~/components/ui/BaseButton.vue";
</script>
