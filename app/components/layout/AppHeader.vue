<template>
  <header class="sticky top-0 z-50 bg-white border-b border-border">
    <div
      class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between"
    >
      <!-- Left: Logo & Brand -->
      <NuxtLink to="/" class="flex items-center gap-2 group">
        <NuxtImg src="/mamikos-logo.jpeg" alt="Mamikos Logo" class="w-8" />
        <span
          class="text-xl font-black tracking-tight text-primary transition-colors"
        >
          mamikos
        </span>
      </NuxtLink>

      <!-- Right: Navigation Links + Avatar (Desktop) & Mobile Toggle -->
      <div class="flex items-center gap-6">
        <!-- Desktop Nav Links -->
        <nav
          class="hidden md:flex items-center space-x-6 text-nav-link text-secondary"
        >
          <NuxtLink
            v-for="item in navItems"
            :key="item.label"
            :to="item.to"
            class="flex items-center gap-1.5 hover:text-primary transition-colors py-2"
          >
            <component :is="item.icon" class="w-4 h-4 text-tertiary" />
            <span class="font-bold">{{ item.label }}</span>
          </NuxtLink>

          <!-- More Dropdown -->
          <div class="relative group cursor-pointer py-2">
            <button
              class="flex items-center gap-1 hover:text-primary transition-colors"
            >
              <span class="font-bold">Lainnya</span>
              <ChevronDown class="w-4 h-4 text-tertiary" />
            </button>
          </div>
        </nav>

        <!-- User Avatar -->
        <button
          aria-label="User Profile"
          class="flex items-center justify-center w-9 h-9 rounded-full bg-gray-100 border border-border text-secondary hover:border-primary transition-colors"
        >
          <User class="w-5 h-5 text-tertiary" />
        </button>

        <!-- Mobile Menu Toggle Button -->
        <button
          aria-label="Toggle Navigation Menu"
          class="md:hidden p-2 rounded-md text-secondary hover:text-primary hover:bg-gray-100 transition-colors"
          @click="isMobileMenuOpen = !isMobileMenuOpen"
        >
          <Menu v-if="!isMobileMenuOpen" class="w-6 h-6" />
          <X v-else class="w-6 h-6" />
        </button>
      </div>
    </div>

    <!-- Mobile Drawer Menu -->
    <div
      v-if="isMobileMenuOpen"
      class="md:hidden border-b border-border bg-white px-4 pt-2 pb-4 space-y-3"
    >
      <NuxtLink
        v-for="item in navItems"
        :key="item.label"
        :to="item.to"
        class="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-gray-50 text-secondary"
        @click="isMobileMenuOpen = false"
      >
        <component :is="item.icon" class="w-5 h-5 text-tertiary" />
        <span class="font-medium">{{ item.label }}</span>
      </NuxtLink>
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref } from "vue";
import {
  Search,
  Heart,
  MessageSquare,
  Bell,
  ChevronDown,
  User,
  Menu,
  X,
} from "lucide-vue-next";

const isMobileMenuOpen = ref(false);

const navItems = [
  { label: "Cari Kost", to: "/", icon: Search },
  { label: "Favorit", to: "#", icon: Heart },
  { label: "Chat", to: "#", icon: MessageSquare },
  { label: "Notifikasi", to: "#", icon: Bell },
];
</script>
