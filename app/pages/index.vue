<template>
  <div class="max-w-4xl mx-auto p-8 space-y-8">
    <!-- Header Section using typography tokens -->
    <header class="text-center space-y-2">
      <h1 class="text-headline-display text-primary">Mamikos Design System Showcase</h1>
      <p class="text-body-lg text-tertiary">Testing custom utility & component classes from DESIGN.md</p>
    </header>

    <!-- Cards Section -->
    <div class="card-base space-y-6">
      <h2 class="text-headline-lg text-secondary">Typography Tokens</h2>
      <div class="space-y-3">
        <p class="text-headline-display">Headline Display (32px / 900)</p>
        <p class="text-headline-lg">Headline Large (24px / 700)</p>
        <p class="text-headline-md">Headline Medium (20px / 600)</p>
        <p class="text-headline-sm">Headline Small (18px / 600)</p>
        <p class="text-body-lg">Body Large (16px / 600)</p>
        <p class="text-body-md">Body Medium (16px / 400)</p>
        <p class="text-body-sm text-tertiary">Body Small (14px / 400)</p>
      </div>
    </div>

    <!-- Buttons & Chips Showcase -->
    <div class="card-base space-y-6">
      <h2 class="text-headline-lg text-secondary">Buttons & Chips</h2>
      
      <div class="flex flex-wrap items-center gap-4">
        <button class="btn-primary">Primary Button</button>
        <button class="btn-secondary">Secondary Button</button>
        <button class="btn-link">Link Button</button>
      </div>

      <div class="flex flex-wrap items-center gap-3 pt-2">
        <span class="chip-base">All Cities</span>
        <span class="chip-base">Jakarta</span>
        <span class="chip-base">Yogyakarta</span>
        <span class="chip-base">Bandung</span>
      </div>
    </div>

    <!-- Form Input Showcase -->
    <div class="card-base space-y-4">
      <h2 class="text-headline-lg text-secondary">Inputs & Tailwind Colors</h2>
      <div class="flex gap-4">
        <input 
          type="text" 
          placeholder="Search location or kost name..." 
          class="input-base flex-1"
        />
        <button class="btn-primary">Search</button>
      </div>
    </div>
  </div>
</template>
