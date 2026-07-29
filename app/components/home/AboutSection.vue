<template>
  <section class="bg-[#f5f5f5]">
    <div class="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-10 text-center">
      <h2 class="text-headline-md text-black mb-5 font-extrabold">
        Mamikos - Aplikasi Anak Kos No. 1 di Indonesia
      </h2>
      <p class="text-body-md text-secondary leading-relaxed text-left">
        Mamikos memanfaatkan teknologi untuk berkembang dari aplikasi cari kos
        menjadi aplikasi yang memudahkan calon anak kos untuk booking properti
        kos dan juga melakukan pembayaran kos. Saat ini kami memiliki lebih dari
        2 juta kamar kos yang tersebar di lebih dari 140 kota di seluruh
        Indonesia. Mamikos juga menyediakan layanan manajemen properti, bernama
        Singgahsini dan Apik, untuk menjawab kebutuhan calon penghuni yang
        menginginkan kos eksklusif atau kos murah. Mamikos berusaha untuk bisa
        terus menyajikan daftar rumah kos dengan data ketersediaan kamar yang
        akurat, fasilitas kos terperinci, dilengkapi dengan foto serta detail
        harga kos, dan kemudahan survei via fitur virtual tour agar calon
        penghuni mendapatkan kenyamanan dalam proses pencarian dan booking kos.
      </p>

      <button
        type="button"
        class="mt-6 inline-flex items-center gap-1.5 text-headline-md text-secondary font-bold"
        @click="isOpen = !isOpen"
      >
        Fitur yang dapat dimanfaatkan di Mamikos
        <ChevronDown
          class="w-4 h-4 transition-transform"
          :class="isOpen ? 'rotate-180' : ''"
        />
      </button>

      <div
        v-if="isOpen"
        class="mt-4 text-body-sm text-tertiary text-left max-w-xl mx-auto space-y-1"
      >
        <p>• Cari dan booking kos langsung dari aplikasi</p>
        <p>• Pembayaran sewa kos via MamikosPay</p>
        <p>• Survei kos idaman sebelum menyewa</p>
        <p>• Kos dikelola langsung oleh Mamikos (Singgahsini & Apik)</p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { ChevronDown } from "lucide-vue-next";

const isOpen = ref(false);
</script>
