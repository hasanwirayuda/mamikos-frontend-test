<template>
  <div>
    <HeroSearch />
    <PromoBannerCarousel />
    <SurveyBanner />
    <TrustBanner />
    <KostCarouselSection
      title="Promo Ngebut"
      city-label="Semua Kota"
      :kosts="promoNgebutKosts"
    >
      <template #meta>
        <span class="text-body-sm text-tertiary">
          Berakhir dalam
          <span class="font-bold text-secondary">26 Hari 09:35:32</span>
        </span>
      </template>
    </KostCarouselSection>

    <KostCarouselSection
      title="Rekomendasi kos di"
      city-label="Jakarta"
      :kosts="recommendedKosts"
    />

    <KostCarouselSection
      title="Kos yang lagi promo di"
      city-label="Semua Kota"
      :kosts="onPromoKosts"
    />

    <PopularAreaGrid :cities="mockCities" />
    <CampusGrid :campuses="mockCampuses" />
    <AboutSection />
  </div>
</template>

<script setup lang="ts">
import AboutSection from "~/components/home/AboutSection.vue";
import CampusGrid from "~/components/home/CampusGrid.vue";
import HeroSearch from "~/components/home/HeroSearch.vue";
import PopularAreaGrid from "~/components/home/PopularAreaGrid.vue";
import PromoBannerCarousel from "~/components/home/PromoBannerCarousel.vue";
import SurveyBanner from "~/components/home/SurveyBanner.vue";
import TrustBanner from "~/components/home/TrustBanner.vue";
import KostCarouselSection from "~/components/kost/KostCarouselSection.vue";

import { mockKosts } from "~/data/kosts";
import { mockCities } from "~/data/cities";
import { mockCampuses } from "~/data/campuses";
import type { Kost } from "~/types/kost";

const promoNgebutKosts = mockKosts.filter((k) => k.isPromoNgebut);
const recommendedKosts = mockKosts.filter((k) => k.isRecommended);
const onPromoKosts = mockKosts.filter((k) => k.isOnPromo);

function goToDetail(kost: Kost) {
  console.log("Navigate to kost detail:", kost.slug);
}

useHead({
  title: "Mamikos - Cari, Bayar, & Sewa Kost Impianmu Secara Online",
});
</script>
