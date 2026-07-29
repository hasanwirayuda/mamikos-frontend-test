<template>
  <span
    :class="[
      'inline-flex items-center gap-1 text-label-sm rounded-sm px-2 py-0.5 font-bold',
      badgeClasses
    ]"
  >
    <slot name="icon" />
    <slot />
  </span>
</template>

<script setup lang="ts">
import { computed } from 'vue'

interface Props {
  variant?: 'discount' | 'rating' | 'availability' | 'managed' | 'neutral'
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'neutral'
})

const badgeClasses = computed(() => {
  switch (props.variant) {
    case 'discount':
      return 'bg-red-50 text-error border border-red-200'
    case 'rating':
      return 'bg-amber-50 text-amber-700 border border-amber-200'
    case 'availability':
      return 'bg-orange-50 text-orange-600 border border-orange-200'
    case 'managed':
      return 'bg-emerald-50 text-primary border border-emerald-200'
    case 'neutral':
    default:
      return 'bg-gray-100 text-secondary border border-gray-200'
  }
})
</script>
