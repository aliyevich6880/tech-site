<template>
  <section
    class="py-16 md:py-24 bg-gradient-to-br from-slate-50 to-slate-100 relative overflow-hidden"
  >
    <!-- Background Decoration -->
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

    <div class="max-w-6xl mx-auto px-4 relative z-10">
      <!-- Section Title -->
      <div class="text-center mb-12">
        <h2
          class="text-4xl md:text-5xl font-black mb-4 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent leading-[1.2] pb-2"
        >
          Bizning Manzil
        </h2>
        <p class="text-gray-600 text-lg">
          Biz bilan bog'lanish va tashrif buyurish uchun
        </p>
      </div>

      <!-- Map Container -->
      <div
        class="bg-white/60 backdrop-blur-xl rounded-3xl overflow-hidden border-2 border-white/50 shadow-2xl hover:shadow-indigo-500/20 transition-all duration-500"
      >
        <!-- Map Iframe -->
        <div class="w-full h-72 md:h-96 lg:h-[520px] relative">
          <iframe
            :src="embedUrl"
            class="w-full h-full border-0"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
            title="Kollej Manzili"
          ></iframe>
        </div>
      </div>

      <!-- Quick Contact Cards -->
      <div class="grid md:grid-cols-3 gap-6 mt-12">
        <div
          class="bg-white/60 backdrop-blur-xl rounded-2xl p-6 border border-white/50 shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
        >
          <div
            class="w-14 h-14 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl flex items-center justify-center mb-4 shadow-lg"
          >
            <svg
              class="w-7 h-7 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
              ></path>
            </svg>
          </div>
          <h3 class="font-bold text-gray-900 mb-2">Telefon</h3>
          <p class="text-gray-600 text-sm">Har kuni 9:00 - 18:00</p>
          <a
            :href="`tel:${phone.replace(/\s/g, '')}`"
            class="text-indigo-600 font-semibold mt-2 inline-block hover:underline"
            >{{ phone }}</a
          >
        </div>

        <div
          class="bg-white/60 backdrop-blur-xl rounded-2xl p-6 border border-white/50 shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
        >
          <div
            class="w-14 h-14 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl flex items-center justify-center mb-4 shadow-lg"
          >
            <svg
              class="w-7 h-7 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              ></path>
            </svg>
          </div>
          <h3 class="font-bold text-gray-900 mb-2">Email</h3>
          <p class="text-gray-600 text-sm">24/7 javob beramiz</p>
          <a
            :href="`mailto:${email}`"
            class="text-indigo-600 font-semibold mt-2 inline-block hover:underline break-all"
            >{{ email }}</a
          >
        </div>

        <div
          class="bg-white/60 backdrop-blur-xl rounded-2xl p-6 border border-white/50 shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
        >
          <div
            class="w-14 h-14 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl flex items-center justify-center mb-4 shadow-lg"
          >
            <svg
              class="w-7 h-7 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
              ></path>
            </svg>
          </div>
          <h3 class="font-bold text-gray-900 mb-2">Ish vaqti</h3>
          <p class="text-gray-600 text-sm">Dushanba - Shanba</p>
          <p class="text-indigo-600 font-semibold mt-2">9:00 - 18:00</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "MapComponent",
  data() {
    return {
      embedUrl:
        "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d1261.1782185574734!2d66.85549033856525!3d39.91230765021074!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2s!5e1!3m2!1sen!2s!4v1764956036819!5m2!1sen!2s",
      phone: "+998 97-923-90-01",
      email: "pt2texnikum@gmail.com",
      address: "Samarqand shahri, O'zbekiston",
      directionsUrl:
        "https://www.google.com/maps/dir//39.91230765021074,66.85549033856525",
    };
  },
};
</script>

<style scoped>
/* Smooth iframe loading */
iframe {
  transition: opacity 0.3s ease;
}

/* Mobile responsive adjustments */
@media (max-width: 640px) {
  iframe {
    height: 320px;
  }
}
</style>
