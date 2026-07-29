<template>
  <footer class="bg-white border-t border-border mt-auto">
    <div class="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div class="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
        <!-- Brand & Download Block -->
        <div class="space-y-4 md:col-span-1">
          <NuxtLink to="/" class="flex items-center gap-2">
            <div
              class="w-8 h-8 rounded-md bg-primary flex items-center justify-center text-white font-black text-lg"
            >
              m
            </div>
            <span class="text-xl font-black tracking-tight text-primary">
              mamikos
            </span>
          </NuxtLink>
          <p class="text-body-sm text-tertiary">
            Dapatkan pengalaman mencari dan menyewa kost dengan mudah, cepat,
            dan terpercaya di seluruh Indonesia.
          </p>

          <!-- App Badges -->
          <div class="pt-2 flex flex-col gap-2">
            <span class="text-label-sm text-secondary">Download Aplikasi</span>
            <div class="flex items-center gap-2">
              <a
                v-for="badge in appBadges"
                :key="badge.label"
                :href="badge.to"
                class="inline-block bg-secondary text-white text-xs font-semibold px-3 py-2 rounded hover:opacity-90 transition-opacity"
              >
                {{ badge.label }}
              </a>
            </div>
          </div>
        </div>

        <!-- Dynamic Link Columns via v-for -->
        <div v-for="col in footerColumns" :key="col.title" class="space-y-3">
          <h3 class="text-label-md text-secondary uppercase tracking-wider">
            {{ col.title }}
          </h3>
          <ul class="space-y-2 text-body-sm text-tertiary">
            <li v-for="link in col.links" :key="link.label">
              <NuxtLink
                :to="link.to"
                class="hover:text-primary transition-colors"
              >
                {{ link.label }}
              </NuxtLink>
            </li>
          </ul>
        </div>
      </div>

      <!-- Bottom Bar: Social Icons & Copyright -->
      <div
        class="pt-8 border-t border-gray-100 flex flex-col md:flex-row items-center justify-between gap-4 text-body-sm text-tertiary"
      >
        <p>© {{ currentYear }} Mamikos Clone. All rights reserved.</p>

        <!-- Social Icons via v-for -->
        <div class="flex items-center space-x-4 text-tertiary">
          <a
            v-for="social in socialLinks"
            :key="social.label"
            :href="social.to"
            :aria-label="social.label"
            class="hover:text-primary transition-colors"
          >
            <component :is="social.icon" class="w-5 h-5" />
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { Facebook, Instagram, Twitter, Linkedin } from "lucide-vue-next";

const currentYear = computed(() => new Date().getFullYear());

const appBadges = [
  { label: "Google Play", to: "#" },
  { label: "App Store", to: "#" },
];

const footerColumns = [
  {
    title: "Mamikos",
    links: [
      { label: "Tentang Kami", to: "#" },
      { label: "Karir", to: "#" },
      { label: "Blog Mamikos", to: "#" },
      { label: "Promo Sewa Kost", to: "#" },
    ],
  },
  {
    title: "Kebijakan",
    links: [
      { label: "Kebijakan Privasi", to: "#" },
      { label: "Syarat dan Ketentuan", to: "#" },
      { label: "Aturan Sewa Kost", to: "#" },
      { label: "Pusat Keamanan", to: "#" },
    ],
  },
  {
    title: "Hubungi Kami",
    links: [
      { label: "Pusat Bantuan", to: "#" },
      { label: "Daftarkan Kost Anda", to: "#" },
      { label: "Mamikos GoldPlus", to: "#" },
      { label: "Kontak CS 24/7", to: "#" },
    ],
  },
];

const socialLinks = [
  { label: "Facebook", icon: Facebook, to: "#" },
  { label: "Instagram", icon: Instagram, to: "#" },
  { label: "Twitter", icon: Twitter, to: "#" },
  { label: "LinkedIn", icon: Linkedin, to: "#" },
];
</script>
