<template>
  <article
    class="w-64 sm:w-72 shrink-0 rounded-md border border-border bg-white overflow-hidden hover:shadow-card transition-shadow cursor-pointer"
    @click="$emit('select', kost)"
  >
    <!-- Image + badges -->
    <div class="relative h-40 bg-gray-100">
      <img
        :src="kost.imageUrl"
        :alt="kost.title"
        class="w-full h-full object-cover"
        loading="lazy"
      />
      <BaseBadge
        v-if="kost.isManaged"
        variant="managed"
        class="absolute top-2 left-2 bg-white/95"
      >
        Dikelola Mamikos
      </BaseBadge>
      <BaseBadge
        v-if="kost.remainingRooms"
        variant="availability"
        class="absolute top-2 right-2 bg-white/95"
      >
        Sisa {{ kost.remainingRooms }} kamar
      </BaseBadge>
    </div>

    <div class="p-3 space-y-2">
      <!-- Type + rating -->
      <div class="flex items-center gap-2 text-body-sm text-tertiary">
        <span class="capitalize">{{ genderLabel }}</span>
        <span v-if="kost.rating" class="flex items-center gap-1 text-secondary">
          <Star class="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
          <span class="font-bold">{{ kost.rating.toFixed(1) }}</span>
        </span>
        <span v-if="kost.remainingRooms" class="text-primary font-bold">
          Sisa {{ kost.remainingRooms }} kamar
        </span>
      </div>

      <!-- Title + location -->
      <div>
        <h3 class="text-body-lg text-secondary line-clamp-2 leading-snug">
          {{ kost.title }}
        </h3>
        <p class="text-body-sm text-tertiary mt-0.5">{{ kost.location }}</p>
      </div>

      <!-- Facilities row -->
      <div class="flex items-center gap-2 text-tertiary">
        <component
          :is="icon"
          v-for="icon in facilityIcons"
          :key="icon.name"
          class="w-3.5 h-3.5"
        />
        <span v-if="hiddenFacilityCount > 0" class="text-label-sm">
          +{{ hiddenFacilityCount }}
        </span>
      </div>

      <!-- Price -->
      <div class="pt-1">
        <div v-if="kost.discountPercent" class="flex items-center gap-2">
          <BaseBadge variant="discount">
            Diskon {{ kost.discountPercent }}%
          </BaseBadge>
          <span class="text-label-sm text-tertiary line-through">
            {{ formatPrice(kost.originalPrice) }}
          </span>
        </div>
        <p class="text-headline-sm text-secondary">
          {{ formatPrice(kost.finalPrice) }}
          <span class="text-body-sm text-tertiary font-normal">/bulan</span>
        </p>
      </div>
    </div>
  </article>
</template>

<script setup lang="ts">
import { computed } from "vue";
import {
  Star,
  Wifi,
  Wind,
  Bath,
  BedDouble,
  Tv,
  Refrigerator,
  Check,
} from "lucide-vue-next";
import BaseBadge from "~/components/ui/BaseBadge.vue";
import type { Kost } from "~/types/kost";

const props = defineProps<{ kost: Kost }>();
defineEmits<{ (e: "select", kost: Kost): void }>();

const genderLabel = computed(() => {
  const map: Record<Kost["gender"], string> = {
    putra: "Putra",
    putri: "Putri",
    campur: "Campur",
  };
  return map[props.kost.gender];
});

const facilityIconMap: Record<string, unknown> = {
  "k. mandi dalam": Bath,
  "wi-fi": Wifi,
  wifi: Wifi,
  ac: Wind,
  kasur: BedDouble,
  tv: Tv,
  kulkas: Refrigerator,
};

const MAX_ICONS = 4;

const facilityIcons = computed(() =>
  props.kost.facilities
    .slice(0, MAX_ICONS)
    .map((name) => facilityIconMap[name.toLowerCase()] ?? Check),
);

const hiddenFacilityCount = computed(() =>
  Math.max(props.kost.facilities.length - MAX_ICONS, 0),
);

function formatPrice(value: number) {
  return `Rp${value.toLocaleString("id-ID")}`;
}
</script>
