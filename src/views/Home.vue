<template>
  <div class="home-page">
    <!-- Hero Section -->
    <Hero />

    <!-- About Section -->
    <section class="py-16 md:py-24 bg-white relative overflow-hidden">
      <div class="absolute inset-0 opacity-5">
        <div
          class="absolute inset-0"
          style="
            background-image: radial-gradient(
              circle at 2px 2px,
              #6366f1 1px,
              transparent 0
            );
            background-size: 40px 40px;
          "
        ></div>
      </div>

      <div class="max-w-7xl mx-auto px-4 relative z-10">
        <div class="grid md:grid-cols-2 gap-12 items-center">
          <!-- Text Content -->
          <div class="space-y-6">
            <div class="inline-block mb-2">
              <span
                class="px-4 py-2 bg-gradient-to-r from-indigo-500 to-purple-600 text-white text-sm font-semibold rounded-full shadow-lg"
              >
                Biz haqimizda
              </span>
            </div>
            <h2
              class="text-4xl md:text-5xl font-black bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent leading-[1.2] pb-2"
            >
              Kasbiy Ta'lim Agentligi
            </h2>
            <p class="text-gray-600 text-lg leading-relaxed">
              Kasbiy ta'lim va kasbga o'qitishda boshqaruv tizimini
              takomillashtirish orqali yagona yondashuv asosida kasbga o'qitish,
              ilg'or xorijiy tajribalarni samarali joriy etish va xalqaro
              standartlarga mos bo'lgan yuqori malakali mutaxasislarini
              tayorlash
            </p>
            <div class="grid grid-cols-2 gap-6 pt-1">
              <div class="space-y-2">
                <div class="flex items-center gap-2 text-indigo-600">
                  <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fill-rule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  <span class="font-semibold">Sifatli ta'lim</span>
                </div>
                <p class="text-gray-600 text-sm ml-8">
                  Professional o'qituvchilar
                </p>
              </div>
              <div class="space-y-2">
                <div class="flex items-center gap-2 text-indigo-600">
                  <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fill-rule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  <span class="font-semibold">Zamonaviy uskunalar</span>
                </div>
                <p class="text-gray-600 text-sm ml-8">
                  Innovatsion laboratoriyalar
                </p>
              </div>
            </div>
            <router-link
              to="/sections"
              class="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
            >
              Yo'nalishlar bilan tanishing
              <svg
                class="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                ></path>
              </svg>
            </router-link>
          </div>

          <!-- Image -->
          <div class="relative">
            <div
              class="absolute inset-0 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-3xl transform rotate-6"
            ></div>
            <img
              :src="aboutimg"
              alt="Students"
              class="relative rounded-3xl shadow-2xl w-full h-[400px] object-cover"
            />
          </div>
        </div>
      </div>
    </section>

    <!-- News Preview Section (Backend Integration) -->
    <section
      class="py-16 md:py-24 bg-gradient-to-br from-slate-50 to-slate-100"
    >
      <div class="max-w-7xl mx-auto px-4">
        <div class="text-center mb-12">
          <div class="inline-block mb-4">
            <span
              class="px-4 py-2 bg-gradient-to-r from-yellow-400 to-orange-500 text-white text-sm font-bold rounded-full shadow-lg"
            >
              📰 So'nggi Yangiliklar
            </span>
          </div>
          <h2
            class="text-4xl md:text-5xl font-black mb-4 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent leading-[1.2] pb-2"
          >
            Yangiliklar
          </h2>
        </div>

        <!-- Loading State -->
        <div v-if="newsLoading" class="text-center py-16">
          <div class="inline-block animate-spin rounded-full h-12 w-12 border-4 border-indigo-500 border-t-transparent"></div>
          <p class="mt-4 text-gray-600">Yuklanmoqda...</p>
        </div>

        <!-- News Cards -->
        <div v-else class="grid gap-8 md:grid-cols-3">
          <div
            v-for="(news, i) in latestNews"
            :key="news._id || i"
            class="group bg-white/60 backdrop-blur-xl rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border border-white/50"
          >
            <div class="relative overflow-hidden">
              <img
                :src="news.img || 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=400'"
                :alt="news.title"
                class="w-full h-56 object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div
                class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"
              ></div>
              
              <!-- Date Badge -->
              <div class="absolute top-4 right-4">
                <span class="px-3 py-1.5 bg-white/90 backdrop-blur-sm text-gray-800 text-xs font-semibold rounded-full shadow-lg">
                  {{ formatDate(news.publishedAt) }}
                </span>
              </div>
            </div>
            <div class="p-6">
              <h3
                class="text-2xl font-bold mb-3 text-gray-800 group-hover:text-indigo-600 transition-colors line-clamp-2"
              >
                {{ news.title }}
              </h3>
              <p class="text-gray-600 mb-4 line-clamp-3">
                {{ news.description }}
              </p>
              <router-link
                to="/news"
                class="text-indigo-600 font-semibold flex items-center group-hover:translate-x-2 transition-transform"
              >
                Batafsil
                <svg
                  class="w-4 h-4 ml-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  ></path>
                </svg>
              </router-link>
            </div>
          </div>
        </div>

        <div class="text-center mt-12">
          <router-link
            to="/news"
            class="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-2xl font-bold shadow-xl hover:shadow-2xl hover:scale-110 transition-all"
          >
            Barcha yangiliklar
            <svg
              class="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              ></path>
            </svg>
          </router-link>
        </div>
      </div>
    </section>

    <!-- Teachers Preview Section -->
    <TeachersPreview />

    <!-- Sections Preview (Inline) -->
    <section class="py-16 md:py-24 bg-white">
      <div class="max-w-7xl mx-auto px-4">
        <div class="text-center mb-12">
          <div class="inline-block mb-4">
            <span
              class="px-4 py-2 bg-gradient-to-r from-indigo-500 to-purple-600 text-white text-sm font-bold rounded-full shadow-lg"
            >
              🎓 Ta'lim Yo'nalishlari
            </span>
          </div>
          <h2
            class="text-4xl md:text-5xl font-black mb-4 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent leading-[1.2] pb-2"
          >
            Yo'nalishlar
          </h2>
        </div>

        <div class="grid md:grid-cols-3 gap-8">
          <div
            v-for="(section, i) in sectionsPreview"
            :key="i"
            class="bg-white/60 backdrop-blur-xl rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border border-white/50 cursor-pointer"
          >
            <div class="text-5xl mb-4">{{ section.icon }}</div>
            <h3 class="text-2xl font-bold mb-3 text-gray-900">
              {{ section.name }}
            </h3>
            <p class="text-gray-600 mb-4">{{ section.desc }}</p>
            <div class="text-sm text-indigo-600 font-semibold">
              {{ section.groups }} guruh
            </div>
          </div>
        </div>

        <div class="text-center mt-12">
          <router-link
            to="/sections"
            class="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-2xl font-bold shadow-xl hover:shadow-2xl hover:scale-110 transition-all"
          >
            Barcha yo'nalishlar
            <svg
              class="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              ></path>
            </svg>
          </router-link>
        </div>
      </div>
    </section>

    <!-- Map Section -->
    <Map />

    <!-- CTA Section -->
    <section
      class="py-16 md:py-24 bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 relative overflow-hidden"
    >
      <div class="absolute inset-0">
        <div class="absolute inset-0 bg-black/20"></div>
        <div
          v-for="i in 30"
          :key="i"
          class="absolute bg-white/5 rounded-full"
          :style="{
            width: Math.random() * 200 + 50 + 'px',
            height: Math.random() * 200 + 50 + 'px',
            left: Math.random() * 100 + '%',
            top: Math.random() * 100 + '%',
            animationDelay: Math.random() * 5 + 's',
          }"
        ></div>
      </div>

      <div class="max-w-4xl mx-auto px-4 text-center relative z-10">
        <h2 class="text-4xl md:text-5xl font-black text-white mb-6">
          Bizga qo'shiling!
        </h2>
        <p class="text-xl text-white/90 mb-8 leading-relaxed">
          Kelajagingizni bugun quring. Tech College bilan professional ta'lim
          oling va muvaffaqiyatli karyera boshlang.
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <router-link
            to="/contact"
            class="px-8 py-4 bg-white text-indigo-600 rounded-2xl font-bold shadow-xl hover:shadow-2xl hover:scale-110 active:scale-95 transition-all duration-300"
          >
            Hoziroq bog'laning
          </router-link>
          <router-link
            to="/sections"
            class="px-8 py-4 bg-white/20 backdrop-blur-xl text-white border-2 border-white/30 rounded-2xl font-bold hover:bg-white hover:text-indigo-600 transition-all duration-300 hover:scale-110 active:scale-95"
          >
            Yo'nalishlarni ko'ring
          </router-link>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { ref, computed, onMounted } from 'vue';
import axios from 'axios';
import aboutimg from "@/assets/library.jpg";
import Hero from "@/components/Hero.vue";
import TeachersPreview from "@/components/TeachersPreview.vue";
import Map from "@/components/Map.vue";

export default {
  name: "Home",
  components: {
    Hero,
    TeachersPreview,
    Map,
  },
  setup() {
    const newsList = ref([]);
    const newsLoading = ref(true);

    // Eng oxirgi 3 ta yangilikni olish
    const latestNews = computed(() => {
      return newsList.value.slice(0, 3);
    });

    const formatDate = (date) => {
      if (!date) return 'Noma\'lum';
      const d = new Date(date);
      const months = [
        'Yanvar', 'Fevral', 'Mart', 'Aprel', 'May', 'Iyun',
        'Iyul', 'Avgust', 'Sentabr', 'Oktabr', 'Noyabr', 'Dekabr'
      ];
      return `${d.getDate()} ${months[d.getMonth()]}`;
    };

    const fetchLatestNews = async () => {
      newsLoading.value = true;
      
      try {
        const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFkbWluIiwicm9sZSI6ImFkbWluIiwiaWF0IjoxNzY1OTgzMDQ5LCJleHAiOjE3NjYwNjk0NDl9.o2p-HAhmNa4zksOBhms1TQ38g2HgwZBt5Pz41FoCm8A";
        
        console.log("🔄 Fetching latest news...");
        const res = await axios.get("http://localhost:5001/api/news", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        
        console.log("✅ News API Response:", res.data);
        
        // Turli javob formatlarini qo'llab-quvvatlash
        let newsData = [];
        if (Array.isArray(res.data)) {
          newsData = res.data;
        } else if (res.data.news && Array.isArray(res.data.news)) {
          newsData = res.data.news;
        } else if (res.data.data && Array.isArray(res.data.data)) {
          newsData = res.data.data;
        }
        
        // Eng yangilarini birinchi qo'yish (publishedAt bo'yicha saralash)
        newsData.sort((a, b) => {
          const dateA = new Date(a.publishedAt);
          const dateB = new Date(b.publishedAt);
          return dateB - dateA; // Eng yangi birinchi
        });
        
        newsList.value = newsData;
        console.log(`✅ ${newsList.value.length} ta yangilik yuklandi`);
        console.log(`📰 Eng oxirgi 3 ta:`, latestNews.value);
        
      } catch (err) {
        console.error("❌ News API error:", err);
        
        // Demo data (agar API ishlamasa)
        newsList.value = [];
      } finally {
        newsLoading.value = false;
      }
    };

    onMounted(() => {
      fetchLatestNews();
      window.scrollTo({ top: 0, behavior: "smooth" });
    });

    return {
      aboutimg,
      newsList,
      newsLoading,
      latestNews,
      formatDate,
      sectionsPreview: [
        {
          name: "Avtomobillarni Ta'mirlash",
          icon: "🚗",
          desc: "Professional ta'lim",
          groups: "12",
        },
        {
          name: "Tikuvchi",
          icon: "✂️",
          desc: "Kreativ yo'nalish",
          groups: "4",
        },
        {
          name: "Traktorchi Mashinist",
          icon: "🚜",
          desc: "Texnik yo'nalish",
          groups: "9",
        },
      ],
    };
  },
};
</script>

<style scoped>
.home-page {
  animation: fadeIn 0.5s ease-out;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes float {
  0%,
  100% {
    transform: translateY(0) rotate(0deg);
  }
  50% {
    transform: translateY(-20px) rotate(10deg);
  }
}

.absolute.bg-white\/5 {
  animation: float linear infinite;
  animation-duration: 10s;
}

.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.line-clamp-3 {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>