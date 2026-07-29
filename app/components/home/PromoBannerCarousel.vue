<template>
  <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
    <div class="relative">
      <div
        ref="trackRef"
        class="flex gap-4 overflow-x-auto scroll-smooth snap-x snap-mandatory no-scrollbar"
      >
        <a
          v-for="promo in promos"
          :key="promo.id"
          :href="promo.link ?? '#'"
          class="relative snap-start shrink-0 w-[85%] sm:w-[60%] lg:w-[32%] h-48 rounded-md overflow-hidden group"
        >
          <img
            :src="promo.imageUrl"
            :alt="promo.title"
            class="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <div
            class="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent"
          />
          <div class="absolute inset-0 p-4 flex flex-col justify-between">
            <BaseBadge v-if="promo.badge" variant="neutral" class="self-start">
              {{ promo.badge }}
            </BaseBadge>
            <div>
              <h3 class="text-headline-sm text-white font-bold leading-snug">
                {{ promo.title }}
              </h3>
              <p v-if="promo.subtitle" class="text-body-sm text-white/90 mt-1">
                {{ promo.subtitle }}
              </p>
            </div>
          </div>
        </a>
      </div>

      <button
        aria-label="Previous promo"
        class="hidden sm:flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 items-center justify-center w-9 h-9 rounded-full bg-white border border-border shadow-subtle hover:border-primary transition-colors"
        @click="scroll(-1)"
      >
        <ChevronLeft class="w-4 h-4 text-secondary" />
      </button>
      <button
        aria-label="Next promo"
        class="hidden sm:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 items-center justify-center w-9 h-9 rounded-full bg-white border border-border shadow-subtle hover:border-primary transition-colors"
        @click="scroll(1)"
      >
        <ChevronRight class="w-4 h-4 text-secondary" />
      </button>
    </div>

    <div class="flex justify-center mt-4">
      <BaseButton variant="link" class="underline">View all promo</BaseButton>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { ChevronLeft, ChevronRight } from "lucide-vue-next";
import BaseBadge from "~/components/ui/BaseBadge.vue";
import BaseButton from "~/components/ui/BaseButton.vue";
import { mockPromos } from "~/data/promos";

const promos = mockPromos;
const trackRef = ref<HTMLElement | null>(null);

function scroll(direction: 1 | -1) {
  const el = trackRef.value;
  if (!el) return;
  const cardWidth =
    (el.firstElementChild as HTMLElement | null)?.clientWidth ?? 300;
  el.scrollBy({ left: direction * (cardWidth + 16), behavior: "smooth" });
}
</script>

<style scoped>
.no-scrollbar {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
.no-scrollbar::-webkit-scrollbar {
  display: none;
}
</style>
