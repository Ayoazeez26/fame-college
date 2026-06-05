<script setup lang="ts">
import { ArrowUp, Instagram, Linkedin, Youtube } from 'lucide-vue-next'
import {
  email,
  footerExplore,
  footerLegal,
  footerProgrammes,
  phones,
  socialLinks,
} from '~/data/site'

const iconMap = {
  instagram: Instagram,
  youtube: Youtube,
  linkedin: Linkedin,
} as const

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}
</script>

<template>
  <footer class="bg-navy-footer text-white">
    <div class="section-container py-14 lg:py-16 lg:pt-[100px]">
      <div class="flex flex-col md:flex-row justify-between gap-20">
        <div class="flex flex-col gap-4">
          <div class="flex items-center gap-3">
            <img src="/fame-logo.png" alt="" class="size-10" width="40" height="46">
            <div>
              <p class="font-serif text-lg font-normal">Fame College</p>
              <p class="text-xs text-white/70">International Schools</p>
            </div>
          </div>
          <p class="mt-4 max-w-xs text-sm leading-relaxed text-white/70">
            A future-focused learning community in Eket — preparing students for
            academic, personal and global success.
          </p>
          <div class="mt-6 flex gap-3">
            <a
              v-for="social in socialLinks"
              :key="social.label"
              :href="social.href"
              class="flex size-10 items-center justify-center rounded-full border border-white/30 text-white transition hover:border-green hover:text-green"
              :aria-label="social.label"
            >
              <component
                :is="iconMap[social.icon]"
                class="size-5"
                aria-hidden="true"
              />
            </a>
          </div>
        </div>
        <div class="flex flex-col md:flex-row items-start gap-12 md:gap-32">
          <div>
            <h4 class="text-sm font-semibold text-green">Explore</h4>
            <ul class="mt-4 space-y-2">
              <li v-for="link in footerExplore" :key="link.label">
                <a
                  :href="link.href"
                  class="text-sm text-white/70 transition hover:text-white"
                >
                  {{ link.label }}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 class="text-sm font-semibold text-green">Programmes</h4>
            <ul class="mt-4 space-y-2">
              <li v-for="link in footerProgrammes" :key="link.label">
                <a
                  :href="link.href"
                  class="text-sm text-white/70 transition hover:text-white"
                >
                  {{ link.label }}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 class="text-sm font-semibold text-green">Contact</h4>
            <ul class="mt-4 space-y-2 text-sm text-white/70">
              <li v-for="phone in phones" :key="phone">
                <a :href="`tel:${phone}`" class="hover:text-white">{{ phone }}</a>
              </li>
              <li>
                <a :href="`mailto:${email}`" class="hover:text-white">{{ email }}</a>
              </li>
              <li class="leading-relaxed">
                Eket, Akwa Ibom
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div
        class="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 sm:flex-row"
      >
        <p class="text-xs text-white/60">
          ©2026 Fame College International School. All rights reserved.
        </p>
        <div class="flex flex-wrap items-center gap-4">
          <a
            v-for="link in footerLegal"
            :key="link.label"
            :href="link.href"
            class="text-xs text-white/60 hover:text-white"
          >
            {{ link.label }}
          </a>
          <button
            type="button"
            class="flex size-10 items-center justify-center rounded-full bg-green text-navy transition hover:bg-green/90"
            aria-label="Scroll to top"
            @click="scrollToTop"
          >
            <ArrowUp class="size-5" aria-hidden="true" />
          </button>
        </div>
      </div>
    </div>
  </footer>
</template>
