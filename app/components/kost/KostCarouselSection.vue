<template>
  <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
    <div class="flex items-center justify-between mb-4 gap-3">
      <div class="flex items-center gap-2 flex-wrap">
        <h2 class="text-headline-lg text-secondary">{{ title }}</h2>
        <BaseChip
          v-if="cityLabel"
          :clickable="false"
          class="!bg-transparent !text-primary !px-1"
        >
          {{ cityLabel }}
          <template #icon>
            <ChevronDown class="w-3.5 h-3.5" />
          </template>
        </BaseChip>
        <slot name="meta" />
      </div>

      <div class="flex items-center gap-3 shrink-0">
        <BaseButton variant="link" class="whitespace-nowrap">
          Lihat semua
        </BaseButton>
        <div class="hidden sm:flex items-center gap-2">
          <button
            aria-label="Sebelumnya"
            class="flex items-center justify-center w-8 h-8 rounded-full border border-border hover:border-primary transition-colors"
            @click="scroll(-1)"
          >
            <ChevronLeft class="w-4 h-4 text-secondary" />
          </button>
          <button
            aria-label="Selanjutnya"
            class="flex items-center justify-center w-8 h-8 rounded-full border border-border hover:border-primary transition-colors"
            @click="scroll(1)"
          >
            <ChevronRight class="w-4 h-4 text-secondary" />
          </button>
        </div>
      </div>
    </div>

    <div
      ref="trackRef"
      class="flex gap-4 overflow-x-auto scroll-smooth snap-x snap-mandatory no-scrollbar"
    >
      <KostCard
        v-for="kost in kosts"
        :key="kost.id"
        :kost="kost"
        class="snap-start"
        @select="$emit('select', kost)"
      />
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { ChevronLeft, ChevronRight, ChevronDown } from "lucide-vue-next";
import BaseButton from "~/components/ui/BaseButton.vue";
import BaseChip from "~/components/ui/BaseChip.vue";
import KostCard from "~/components/kost/KostCard.vue";
import type { Kost } from "~/types/kost";

defineProps<{
  title: string;
  kosts: Kost[];
  cityLabel?: string;
}>();
defineEmits<{ (e: "select", kost: Kost): void }>();

const trackRef = ref<HTMLElement | null>(null);

function scroll(direction: 1 | -1) {
  const el = trackRef.value;
  if (!el) return;
  const cardWidth =
    (el.firstElementChild as HTMLElement | null)?.clientWidth ?? 280;
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
