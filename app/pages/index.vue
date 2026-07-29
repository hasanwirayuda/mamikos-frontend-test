<template>
  <div class="max-w-4xl mx-auto p-8 space-y-8">
    <header class="space-y-4">
      <!-- Breadcrumb Component -->
      <Breadcrumb :items="breadcrumbItems" />

      <h1 class="text-headline-display text-primary">ISSUE-02 Base UI Components</h1>
      <p class="text-body-lg text-tertiary">Testing BaseButton, BaseChip, BaseBadge, and Breadcrumb</p>
    </header>

    <!-- BaseButton Showcase -->
    <section class="card-base space-y-4">
      <h2 class="text-headline-md text-secondary">1. BaseButton Component</h2>
      <div class="flex flex-wrap items-center gap-4">
        <BaseButton variant="primary">Primary Button</BaseButton>
        <BaseButton variant="secondary">Secondary Button</BaseButton>
        <BaseButton variant="link">Link Button</BaseButton>
        <BaseButton variant="primary" disabled>Disabled Button</BaseButton>
      </div>
    </section>

    <!-- BaseChip Showcase -->
    <section class="card-base space-y-4">
      <h2 class="text-headline-md text-secondary">2. BaseChip Component</h2>
      <div class="flex flex-wrap items-center gap-3">
        <BaseChip 
          v-for="city in cities" 
          :key="city.name" 
          :active="selectedCity === city.name"
          @click="selectedCity = city.name"
        >
          {{ city.name }}
        </BaseChip>
      </div>
      <p class="text-body-sm text-tertiary">Selected: <span class="font-bold text-secondary">{{ selectedCity }}</span></p>
    </section>

    <!-- BaseBadge Showcase -->
    <section class="card-base space-y-4">
      <h2 class="text-headline-md text-secondary">3. BaseBadge Component</h2>
      <div class="flex flex-wrap items-center gap-3">
        <BaseBadge variant="managed">Dikelola Mamikos</BaseBadge>
        <BaseBadge variant="discount">Diskon 20%</BaseBadge>
        <BaseBadge variant="rating">★ 4.8</BaseBadge>
        <BaseBadge variant="availability">Sisa 2 kamar</BaseBadge>
        <BaseBadge variant="neutral">Kost Putri</BaseBadge>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import BaseButton from '~/components/ui/BaseButton.vue'
import BaseChip from '~/components/ui/BaseChip.vue'
import BaseBadge from '~/components/ui/BaseBadge.vue'
import Breadcrumb from '~/components/ui/Breadcrumb.vue'

const breadcrumbItems = [
  { label: 'Home', to: '/' },
  { label: 'Kost Jogja', to: '/kost' },
  { label: 'Kost Apik Monjali', to: '#' }
]

const cities = [
  { name: 'Semua Kota' },
  { name: 'Jakarta' },
  { name: 'Yogyakarta' },
  { name: 'Bandung' },
  { name: 'Surabaya' }
]

const selectedCity = ref('Semua Kota')
</script>
