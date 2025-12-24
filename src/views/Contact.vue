<template>
  <div class="contact-page">
    <!-- Hero Section -->
    <section
      class="relative w-full h-96 md:h-[500px] bg-gradient-to-br from-rose-600 via-pink-600 to-purple-600 flex items-center justify-center overflow-hidden"
    >
      <div class="absolute inset-0 bg-black/20"></div>

      <!-- Animated Background -->
      <div class="absolute inset-0">
        <div
          v-for="i in 20"
          :key="i"
          class="absolute bg-white/10 rounded-full animate-pulse"
          :style="{
            width: Math.random() * 200 + 50 + 'px',
            height: Math.random() * 200 + 50 + 'px',
            left: Math.random() * 100 + '%',
            top: Math.random() * 100 + '%',
            animationDelay: Math.random() * 3 + 's',
            animationDuration: Math.random() * 5 + 3 + 's',
          }"
        ></div>
      </div>

      <div
        class="relative z-10 bg-white/20 backdrop-blur-2xl p-8 md:p-12 rounded-3xl text-center text-white max-w-4xl mx-4 border border-white/30 shadow-2xl"
      >
        <div class="inline-block mb-4">
          <span
            class="px-4 py-2 bg-gradient-to-r from-yellow-400 to-orange-500 text-white text-sm font-bold rounded-full shadow-lg"
          >
            📞 Biz bilan bog'laning
          </span>
        </div>
        <h1
          class="text-4xl md:text-5xl lg:text-6xl font-black mb-4 drop-shadow-lg"
        >
          Aloqa
        </h1>
        <p class="text-lg md:text-xl lg:text-2xl text-white/90 font-light">
          Savollaringiz bormi? Biz har doim yordam berishga tayyormiz!
        </p>
      </div>
    </section>

    <!-- Contact Form & Info Section -->
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

      <div class="max-w-7xl mx-auto px-4 relative z-10">
        <div class="grid md:grid-cols-2 gap-8 lg:gap-12">
          <!-- Contact Form -->
          <div
            class="bg-white/60 backdrop-blur-xl rounded-3xl p-8 md:p-10 shadow-2xl border border-white/50"
          >
            <h2
              class="text-3xl md:text-4xl font-black mb-6 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent"
            >
              Xabar Yuboring
            </h2>
            <p class="text-gray-600 mb-8">
              Formani to'ldiring, tez orada siz bilan bog'lanamiz
            </p>

            <form @submit.prevent="submitForm" class="space-y-6">
              <!-- Name -->
              <div>
                <label class="block text-sm font-semibold text-gray-700 mb-2">
                  Ismingiz <span class="text-red-500">*</span>
                </label>
                <input
                  v-model="form.name"
                  type="text"
                  required
                  placeholder="Ismingizni kiriting"
                  class="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/20 outline-none transition-all bg-white/80 backdrop-blur-sm"
                />
              </div>

              <!-- Email -->
              <div>
                <label class="block text-sm font-semibold text-gray-700 mb-2">
                  Email <span class="text-red-500">*</span>
                </label>
                <input
                  v-model="form.email"
                  type="email"
                  required
                  placeholder="example@email.com"
                  class="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/20 outline-none transition-all bg-white/80 backdrop-blur-sm"
                />
              </div>

              <!-- Phone -->
              <div>
                <label class="block text-sm font-semibold text-gray-700 mb-2">
                  Telefon raqam
                </label>
                <input
                  v-model="form.phone"
                  type="tel"
                  placeholder="+998 90 123 45 67"
                  class="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/20 outline-none transition-all bg-white/80 backdrop-blur-sm"
                />
              </div>

              <!-- Subject -->
              <div>
                <label class="block text-sm font-semibold text-gray-700 mb-2">
                  Mavzu <span class="text-red-500">*</span>
                </label>
                <select
                  v-model="form.subject"
                  required
                  class="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/20 outline-none transition-all bg-white/80 backdrop-blur-sm"
                >
                  <option value="">Tanlang</option>
                  <option value="qabul">Qabul haqida</option>
                  <option value="oquv">O'quv jarayoni</option>
                  <option value="yonalish">Yo'nalishlar</option>
                  <option value="boshqa">Boshqa savol</option>
                </select>
              </div>

              <!-- Message -->
              <div>
                <label class="block text-sm font-semibold text-gray-700 mb-2">
                  Xabar <span class="text-red-500">*</span>
                </label>
                <textarea
                  v-model="form.message"
                  required
                  rows="5"
                  placeholder="Xabaringizni yozing..."
                  class="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/20 outline-none transition-all resize-none bg-white/80 backdrop-blur-sm"
                ></textarea>
              </div>

              <!-- Submit Button -->
              <button
                type="submit"
                :disabled="isLoading"
                class="w-full py-4 bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-xl font-bold shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 active:scale-95 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <span v-if="!isLoading">Yuborish</span>
                <span v-else>Yuborilmoqda...</span>
                <svg
                  v-if="!isLoading"
                  class="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  ></path>
                </svg>
              </button>
            </form>

            <!-- Success/Error Messages -->
            <div v-if="statusMessage" class="mt-4 p-4 rounded-xl" :class="statusType === 'success' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'">
              {{ statusMessage }}
            </div>
          </div>

          <!-- Contact Info -->
          <div class="space-y-6">
            <!-- Info Card -->
            <div
              class="bg-white/60 backdrop-blur-xl rounded-3xl p-8 shadow-xl border border-white/50"
            >
              <h3 class="text-2xl font-bold mb-6 text-gray-900">
                Aloqa Ma'lumotlari
              </h3>

              <div class="space-y-6">
                <!-- Address -->
                <div class="flex items-start gap-4 group">
                  <div
                    class="w-14 h-14 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform"
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
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      ></path>
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      ></path>
                    </svg>
                  </div>
                  <div>
                    <h4 class="font-bold text-gray-900 mb-1">Manzil</h4>
                    <p class="text-gray-600">
                      Payariq tumani Qumchuq MFY, Furqat ko'cha 4-uy
                    </p>
                  </div>
                </div>

                <!-- Phone -->
                <div class="flex items-start gap-4 group">
                  <div
                    class="w-14 h-14 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform"
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
                  <div>
                    <h4 class="font-bold text-gray-900 mb-1">Telefon</h4>
                    <a
                      href="tel:+998979239001"
                      class="text-indigo-600 font-semibold hover:underline"
                      >+998 97-923-90-01</a
                    >
                    <p class="text-gray-500 text-sm mt-1">
                      Dushanba - Shanba: 9:00 - 16:00
                    </p>
                  </div>
                </div>

                <!-- Email -->
                <div class="flex items-start gap-4 group">
                  <div
                    class="w-14 h-14 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform"
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
                  <div>
                    <h4 class="font-bold text-gray-900 mb-1">Email</h4>
                    <a
                      href="mailto:pt2texnikum@gmail.com"
                      class="text-indigo-600 font-semibold hover:underline break-all"
                      >pt2texnikum@gmail.com</a
                    >
                    <p class="text-gray-500 text-sm mt-1">24/7 javob beramiz</p>
                  </div>
                </div>
              </div>
            </div>

            <!-- Social Media -->
            <div
              class="bg-white/60 backdrop-blur-xl rounded-3xl p-8 shadow-xl border border-white/50"
            >
              <h3 class="text-2xl font-bold mb-6 text-gray-900">
                Creator Ijtimoiy Tarmoqlari
              </h3>

              <div class="flex flex-wrap gap-4">
                <a
                  href="https://www.facebook.com/aliyevich8"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="group flex items-center gap-3 px-5 py-3 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl hover:from-blue-500 hover:to-indigo-600 transition-all duration-300 hover:scale-110 active:scale-95 border border-blue-200 hover:border-transparent"
                >
                  <svg
                    class="w-6 h-6 text-blue-600 group-hover:text-white transition-colors"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"
                    />
                  </svg>
                  <span
                    class="font-semibold text-blue-600 group-hover:text-white transition-colors"
                    >Facebook</span
                  >
                </a>

                <a
                  href="https://t.me/aliyevich8"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="group flex items-center gap-3 px-5 py-3 bg-gradient-to-r from-sky-50 to-cyan-50 rounded-xl hover:from-sky-500 hover:to-cyan-600 transition-all duration-300 hover:scale-110 active:scale-95 border border-sky-200 hover:border-transparent"
                >
                  <svg
                    class="w-6 h-6 text-sky-600 group-hover:text-white transition-colors"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.14.18-.357.295-.6.295-.002 0-.003 0-.005 0l.213-3.054 5.56-5.022c.24-.213-.054-.334-.373-.121l-6.869 4.326-2.96-.924c-.64-.203-.658-.64.135-.954l11.566-4.458c.538-.196 1.006.128.832.941z"
                    />
                  </svg>
                  <span
                    class="font-semibold text-sky-600 group-hover:text-white transition-colors"
                    >Telegram</span
                  >
                </a>

                <a
                  href="https://www.instagram.com/al1yevich_8/"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="group flex items-center gap-3 px-5 py-3 bg-gradient-to-r from-pink-50 to-rose-50 rounded-xl hover:from-pink-500 hover:to-rose-600 transition-all duration-300 hover:scale-110 active:scale-95 border border-pink-200 hover:border-transparent"
                >
                  <svg
                    class="w-6 h-6 text-pink-600 group-hover:text-white transition-colors"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"
                    />
                  </svg>
                  <span
                    class="font-semibold text-pink-600 group-hover:text-white transition-colors"
                    >Instagram</span
                  >
                </a>
              </div>
            </div>

            <!-- Working Hours -->
            <div
              class="bg-gradient-to-br from-indigo-600 to-purple-600 rounded-3xl p-8 shadow-xl text-white"
            >
              <h3 class="text-2xl font-bold mb-6">Ish Vaqti</h3>
              <div class="space-y-3">
                <div class="flex justify-between items-center">
                  <span class="font-medium">Dushanba - Juma</span>
                  <span class="font-bold">9:00 - 16:00</span>
                </div>
                <div class="flex justify-between items-center">
                  <span class="font-medium">Shanba</span>
                  <span class="font-bold">9:00 - 15:00</span>
                </div>
                <div class="flex justify-between items-center opacity-60">
                  <span class="font-medium">Yakshanba</span>
                  <span class="font-bold">Dam olish</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Map Section -->
    <Map />
  </div>
</template>

<script>
  import emailjs from "@emailjs/browser";
import Map from "@/components/Map.vue";


export default {
  name: "Contact",
  components: { Map , emailjs  },
  data() {
    return {
      form: { name: "", email: "", phone: "", subject: "", message: "" },
      isLoading: false,
      statusMessage: "",
      statusType: "",
    };
  },
  methods: {
  async submitForm() {
    this.isLoading = true;
    this.statusMessage = "";

    try {
      const result = await emailjs.send(
        "service_yxnmk5a","template_xrgfjjh",    // EmailJS Template ID
        {
          from_name: this.form.name,
          from_email: this.form.email,
          subject: this.form.subject,
          message: this.form.message,
          to_email: "pt2texnikum@gmail.com",
        },
        "AtuCOkDZFW-i-Yik2"       // EmailJS Public Key
      );

      console.log("EmailJS response:", result);

      this.statusMessage =
        "✅ Xabaringiz muvaffaqiyatli yuborildi! Tez orada siz bilan bog'lanamiz.";
      this.statusType = "success";

      // Formani tozalash
      this.form = { name: "", email: "", phone: "", subject: "", message: "" };

    } catch (error) {
      console.error("EmailJS Error:", error);
      this.statusMessage =
        "❌ Xatolik yuz berdi. Iltimos qaytadan urinib ko'ring yoki telefon orqali bog'laning.";
      this.statusType = "error";
    } finally {
      this.isLoading = false;

      // 5 soniyadan keyin xabarni o'chirish
      setTimeout(() => {
        this.statusMessage = "";
      }, 5000);
    }
  },
},

  mounted() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  },
};
</script>

<style scoped>
.contact-page {
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
</style>