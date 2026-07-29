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
  </div>
</template>

<script setup lang="ts">
import HeroSearch from "~/components/home/HeroSearch.vue";
import PromoBannerCarousel from "~/components/home/PromoBannerCarousel.vue";
import SurveyBanner from "~/components/home/SurveyBanner.vue";
import TrustBanner from "~/components/home/TrustBanner.vue";

import { mockKosts } from "~/data/kosts";
import KostCarouselSection from "~/components/kost/KostCarouselSection.vue";

const promoNgebutKosts = mockKosts.filter((k) => k.isPromoNgebut);
const recommendedKosts = mockKosts.filter((k) => k.isRecommended);
const onPromoKosts = mockKosts.filter((k) => k.isOnPromo);
</script>
