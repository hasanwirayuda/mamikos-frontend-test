<template>
  <nav aria-label="Breadcrumb" class="flex items-center text-body-sm text-tertiary">
    <ol class="inline-flex items-center space-x-1 md:space-x-2">
      <li 
        v-for="(item, index) in items" 
        :key="index" 
        class="inline-flex items-center"
      >
        <ChevronRight v-if="index > 0" class="w-4 h-4 text-gray-400 mx-1 flex-shrink-0" />
        
        <NuxtLink
          v-if="item.to && index < items.length - 1"
          :to="item.to"
          class="hover:text-primary transition-colors duration-150"
        >
          {{ item.label }}
        </NuxtLink>
        <span v-else class="text-secondary font-semibold">
          {{ item.label }}
        </span>
      </li>
    </ol>
  </nav>
</template>

<script setup lang="ts">
import { ChevronRight } from 'lucide-vue-next'

export interface BreadcrumbItem {
  label: string
  to?: string
}

interface Props {
  items: BreadcrumbItem[]
}

defineProps<Props>()
</script>
