<template>
  <div class="sections-page">
    <!-- Hero Section -->
    <section
      class="relative w-full h-full md:h-[520px] flex items-center justify-center overflow-hidden"
    >
      <!-- Background Image -->
      <div
        class="absolute inset-0 bg-cover bg-center"
        style="
          background-image: url('https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=1600');
        "
      ></div>

      <!-- Bottom Overlay -->
      <div
        class="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent"
      ></div>

      <!-- Hero Content -->
      <div class="relative z-10 max-w-4xl mx-auto px-4 text-center">
        <div
          class="bg-black/35 backdrop-blur-md rounded-2xl px-6 py-6 md:px-10 md:py-8 border border-white/20 shadow-xl"
        >
          <div
            class="inline-block mb-4 px-4 py-2 bg-white/15 backdrop-blur-sm rounded-full text-sm font-semibold text-white"
          >
            🎓 Ta'lim Yo‘nalishlari
          </div>
          <h1
            class="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-4 text-white leading-tight"
          >
            Yo‘nalishlar
          </h1>
          <p
            class="text-base sm:text-lg md:text-xl text-white/90 max-w-2xl mx-auto"
          >
            O‘zingizga mos kasbiy yo‘nalishni tanlang va professional bo‘ling
          </p>
        </div>
      </div>
    </section>

    <!-- Statistics Section -->
    <section
      class="py-12 bg-white/20 backdrop-blur-md border-b border-gray-200 relative z-10 -mt-16"
    >
      <div class="max-w-7xl mx-auto px-4">
        <div class="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div class="text-center">
            <div class="text-4xl md:text-5xl font-black text-indigo-600 mb-2">
              7
            </div>
            <div class="text-gray-600 font-medium">Yo'nalishlar</div>
          </div>
          <div class="text-center">
            <div class="text-4xl md:text-5xl font-black text-indigo-600 mb-2">
              25+
            </div>
            <div class="text-gray-600 font-medium">Guruhlar</div>
          </div>
          <div class="text-center">
            <div class="text-4xl md:text-5xl font-black text-indigo-600 mb-2">
              500+
            </div>
            <div class="text-gray-600 font-medium">Talabalar</div>
          </div>
          <div class="text-center">
            <div class="text-4xl md:text-5xl font-black text-indigo-600 mb-2">
              95%
            </div>
            <div class="text-gray-600 font-medium">Ish bilan ta'minlash</div>
          </div>
        </div>
      </div>
    </section>

    <!-- Sections Accordion -->
    <section
      class="py-16 md:py-24 bg-gradient-to-br from-slate-50 to-slate-100 relative overflow-hidden"
    >
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

      <div class="max-w-5xl mx-auto px-4 relative z-10">
        <div class="text-center mb-12">
          <h2
            class="text-4xl md:text-5xl font-black mb-4 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent"
          >
            Barcha Yo'nalishlar
          </h2>
          <p class="text-gray-600 text-lg">
            O'zingizga mos yo'nalishni tanlang
          </p>
        </div>

        <div class="space-y-6">
          <div
            v-for="(section, index) in sections"
            :key="index"
            @click="toggleSection(index)"
            class="group bg-white/60 backdrop-blur-xl rounded-3xl shadow-xl border border-white/50 overflow-hidden transition-all duration-500 cursor-pointer"
            :class="{
              'ring-4 ring-indigo-500/50 scale-[1.02]': activeCard === index,
            }"
          >
            <!-- Header -->
            <div class="p-6 md:p-8 flex justify-between items-center">
              <div class="flex items-center gap-4">
                <div
                  class="w-14 h-14 md:w-16 md:h-16 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300"
                >
                  <span class="text-2xl md:text-3xl">{{ section.icon }}</span>
                </div>
                <div>
                  <h3
                    class="text-xl md:text-2xl font-bold text-gray-900 group-hover:text-indigo-600 transition-colors"
                  >
                    {{ section.name }}
                  </h3>
                  <p class="text-sm text-gray-500 mt-1">
                    {{ section.groups.length }} ta guruh
                  </p>
                </div>
              </div>
              <div class="flex-shrink-0">
                <div
                  class="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-indigo-100 to-purple-100 rounded-xl flex items-center justify-center transition-all duration-500"
                  :class="{
                    'rotate-180 bg-gradient-to-br from-indigo-500 to-purple-600':
                      activeCard === index,
                  }"
                >
                  <svg
                    class="w-6 h-6 transition-colors"
                    :class="
                      activeCard === index ? 'text-white' : 'text-indigo-600'
                    "
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M19 9l-7 7-7-7"
                    ></path>
                  </svg>
                </div>
              </div>
            </div>

            <!-- Content -->
            <transition
              enter-active-class="transition-all duration-500 ease-out"
              enter-from-class="opacity-0 max-h-0"
              enter-to-class="opacity-100 max-h-[1000px]"
              leave-active-class="transition-all duration-300 ease-in"
              leave-from-class="opacity-100 max-h-[1000px]"
              leave-to-class="opacity-0 max-h-0"
            >
              <div
                v-show="activeCard === index"
                class="px-6 md:px-8 pb-6 md:pb-8"
              >
                <div
                  class="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl p-6 space-y-4"
                >
                  <div
                    v-for="(group, gIndex) in section.groups"
                    :key="gIndex"
                    class="bg-white/80 backdrop-blur-sm rounded-xl p-4 hover:shadow-md transition-all duration-300 border border-indigo-100"
                  >
                    <div class="flex items-start gap-3">
                      <div
                        class="w-8 h-8 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center flex-shrink-0 mt-1"
                      >
                        <svg
                          class="w-4 h-4 text-white"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z"
                          ></path>
                        </svg>
                      </div>
                      <div class="flex-1">
                        <h4 class="font-bold text-gray-900 mb-2">
                          {{ group.name }}
                        </h4>
                        <ul class="space-y-2">
                          <li
                            v-for="(course, cIndex) in group.courses"
                            :key="cIndex"
                            class="flex items-center gap-2 text-gray-700"
                          >
                            <svg
                              class="w-4 h-4 text-indigo-500 flex-shrink-0"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path
                                fill-rule="evenodd"
                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                clip-rule="evenodd"
                              ></path>
                            </svg>
                            <span>{{ course }}</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </transition>
          </div>
        </div>

        <!-- CTA Section -->
        <div
          class="mt-16 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-3xl p-8 md:p-12 text-center text-white shadow-2xl"
        >
          <h3 class="text-3xl md:text-4xl font-black mb-4">
            O'z yo'nalingizni topa olmadingizmi?
          </h3>
          <p class="text-lg md:text-xl text-white/90 mb-8">
            Biz bilan bog'laning, maslahat beramiz!
          </p>
          <router-link
            to="/contact"
            class="inline-flex items-center gap-2 px-8 py-4 bg-white text-indigo-600 rounded-2xl font-bold shadow-xl hover:shadow-2xl hover:scale-110 active:scale-95 transition-all duration-300"
          >
            <span>Bog'lanish</span>
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
  </div>
</template>

<script>
export default {
  name: "Sections",
  data() {
    return {
      activeCard: null,
      sections: [
        {
          name: "Suv Ta'minoti",
          icon: "💧",
          groups: [{ name: "101 Guruh", courses: ["1-kurs dual ta'lim"] }],
        },
        {
          name: "Payvandlovchi",
          icon: "🔧",
          groups: [{ name: "119 Guruh", courses: ["1-kurs"] }],
        },
        {
          name: "Tikuvchi",
          icon: "✂️",
          groups: [
            { name: "111 Guruh", courses: ["1-kurs"] },
            { name: "112 Guruh", courses: ["1-kurs"] },
            { name: "210 Guruh", courses: ["2-kurs"] },
            { name: "211 Guruh", courses: ["2-kurs"] },
          ],
        },
        {
          name: "Avtomobillarni Ta'mirlash",
          icon: "🚗",
          groups: [
            { name: "101 Guruh", courses: ["1-kurs"] },
            { name: "110 Guruh", courses: ["1-kurs"] },
            { name: "201 Guruh", courses: ["2-kurs"] },
            { name: "202 Guruh", courses: ["2-kurs"] },
            { name: "203 Guruh", courses: ["2-kurs"] },
            { name: "204 Guruh", courses: ["2-kurs"] },
            { name: "205 Guruh", courses: ["2-kurs"] },
            { name: "206 Guruh", courses: ["2-kurs"] },
            { name: "207 Guruh", courses: ["2-kurs"] },
            { name: "208 Guruh", courses: ["2-kurs"] },
            { name: "209 Guruh", courses: ["2-kurs"] },
          ],
        },
        {
          name: "Sotuvchi",
          icon: "🛒",
          groups: [{ name: "215 Guruh", courses: ["2-kurs"] }],
        },
        {
          name: "Payvandlovchi (Elektrgaz)",
          icon: "⚡",
          groups: [{ name: "217 Guruh", courses: ["2-kurs"] }],
        },
        {
          name: "Traktorchi Mashinist",
          icon: "🚜",
          groups: [
            { name: "113-118 Guruh", courses: ["1-kurs (6 ta guruh)"] },
            { name: "212-214 Guruh", courses: ["2-kurs (3 ta guruh)"] },
          ],
        },
      ],
    };
  },
  methods: {
    toggleSection(index) {
      this.activeCard = this.activeCard === index ? null : index;
    },
  },
};
</script>

<style scoped>
.sections-page {
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

/* Smooth max-height transition */
.max-h-0 {
  max-height: 0;
}
.max-h-\[1000px\] {
  max-height: 1000px;
}
</style>
