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
          class="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent leading-[1.2] pb-2"
        >
          Payariq Tumani
          <span
            class="block font-black bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent leading-[1.2] pb-2"
          >
            2-son Texnikumi
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
            <div class="text-2xl md:text-3xl font-bold text-white">500+</div>
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
import WinterImage from "@/assets/herov.jpg";
export default {
  name: "Hero",
  data() {
    return {
      currentSeason: "spring",
      images: {
        spring:
          "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=1600",
        summer:
          "https://images.unsplash.com/photo-1473496169904-658ba7c44d8a?w=1600",
        autumn:
          "https://images.unsplash.com/photo-1445264918150-66a2371142a2?w=1600",
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
