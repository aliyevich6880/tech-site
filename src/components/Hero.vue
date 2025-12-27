<template>
  <section
    class="relative min-h-screen flex items-center overflow-hidden pt-16"
    :style="{ backgroundImage: `url(${currentImage})` }"
  >
    <!-- Background image settings -->
    <div class="absolute inset-0 bg-cover bg-center"></div>


    <!-- Content -->
    <div class="relative z-10 w-full px-4 animate-fade-in">
      <div
        class="mx-auto max-w-4xl text-center bg-white/10 backdrop-blur-sm rounded-2xl p-8 md:p-10 shadow-xl border border-white/20"
      >
        <!-- Title -->
        <h1
          class="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white leading-[1.2] pb-2"
        >
          Payariq tuman
          <span
            class="block font-black text-white leading-[1.2] pb-2"
          >
            2-son texnikumi
          </span>
        </h1>

        <!-- Subtitle -->
        <p
          class="text-base sm:text-lg md:text-xl text-white mb-8 leading-relaxed"
        >
          Zamonaviy ta’lim va kuchli mutaxassislar tayyorlash markazi
        </p>

        <!-- Buttons -->
        <div class="flex flex-wrap justify-center gap-4">
          <router-link
            to="/sections"
            class="px-6 py-3 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all"
          >
            Yo‘nalishlar
          </router-link>

          <router-link
            to="/contact"
            class="px-6 py-3 rounded-xl bg-white/10 text-white border border-white/30 hover:bg-white hover:text-indigo-600 transition-all font-semibold"
          >
            Bog‘lanish
          </router-link>
        </div>

        <!-- Stats -->
        <div class="grid grid-cols-3 gap-6 mt-10 pt-6 border-t border-white/20">
          <div>
            <div class="text-2xl md:text-3xl font-bold text-white">1000+</div>
            <div class="text-sm text-white/70">Talabalar</div>
          </div>
          <div>
            <div class="text-2xl md:text-3xl font-bold text-white">70+</div>
            <div class="text-sm text-white/70">O‘qituvchilar</div>
          </div>
          <div>
            <div class="text-2xl md:text-3xl font-bold text-white">7</div>
            <div class="text-sm text-white/70">Yo‘nalishlar</div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import WinterImage from "@/assets/sneg.jpg";
import SpringImage from "@/assets/glavne2.jpg";
import SummerImage from "@/assets/glavne2.jpg";
import AutumnImage from "@/assets/glavne2.jpg";
export default {
  name: "Hero",
  data() {
    return {
      currentSeason: "spring",
      images: {
        spring:
          SpringImage,
        summer:
          SummerImage,
        autumn:
          AutumnImage,
        winter: WinterImage,
      },
    };
  },
  computed: {
    currentImage() {
      return this.images[this.currentSeason];
    },
  },
  mounted() {
    const month = new Date().getMonth() + 1;
    if (month >= 3 && month <= 5) this.currentSeason = "spring";
    else if (month >= 6 && month <= 8) this.currentSeason = "summer";
    else if (month >= 9 && month <= 11) this.currentSeason = "autumn";
    else this.currentSeason = "winter";
  },
};
</script>

<style scoped>
section {
  background-size: cover;
  background-position: center;
}
</style>
