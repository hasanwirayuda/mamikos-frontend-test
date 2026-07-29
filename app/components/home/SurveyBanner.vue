<template>
  <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
    <div
      class="card-base flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
    >
      <div>
        <h3 class="text-headline-sm text-secondary mb-1">
          Take the Kost Survey Now!
        </h3>
        <p class="text-body-sm text-tertiary max-w-md">
          Search, choose, and survey your ideal kost so renting feels safe and
          guaranteed. It's free.
        </p>
        <BaseButton variant="link" class="mt-2 underline">Read more</BaseButton>
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
