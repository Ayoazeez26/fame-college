<script setup lang="ts">
import { Menu, Phone, X } from 'lucide-vue-next'
import { navLinks } from '~/data/site'

const mobileOpen = ref(false)
const headerRef = ref<HTMLElement | null>(null)

const sectionHrefs = navLinks.map((link) => link.href)
const headerOffset = computed(() => headerRef.value?.offsetHeight ?? 80)

const { activeHref } = useScrollSpy(sectionHrefs, () => headerOffset.value)

function isActive(href: string) {
  return activeHref.value === href
}

function onNavClick() {
  closeMobile()
}

function closeMobile() {
  mobileOpen.value = false
}
</script>

<template>
  <header
    ref="headerRef"
    class="site-header sticky top-0 z-50 bg-white"
  >
    <div class="section-container flex h-16 items-center justify-between gap-4 lg:h-20">
      <NuxtLink
        to="/"
        class="flex shrink-0 items-center gap-1.5 self-center"
        @click="closeMobile"
      >
        <img
          src="/fame-logo.png"
          alt=""
          class="h-11 w-auto sm:h-12"
          width="64"
          height="54"
        >
        <span class="font-serif text-sm font-normal tracking-wide text-navy sm:text-base">
          FAME COLLEGE
        </span>
      </NuxtLink>

      <nav class="hidden h-auto lg:flex" aria-label="Main">
        <a
          v-for="link in navLinks"
          :key="link.href"
          :href="link.href"
          class="flex items-center border-b-2 px-6 py-4 text-sm font-medium transition-colors"
          :class="
            isActive(link.href)
              ? 'border-green text-green'
              : 'border-transparent text-gray-body hover:text-navy'
          "
          :aria-current="isActive(link.href) ? 'true' : undefined"
          @click="onNavClick"
        >
          {{ link.label }}
        </a>
      </nav>

      <div class="hidden items-center gap-4 self-center lg:flex">
        <a
          href="#contact"
          class="inline-flex items-center gap-1.5 text-sm font-medium text-green hover:text-green/80"
        >
          Speak to Advisor
          <Phone class="size-4" aria-hidden="true" />
        </a>
        <AppButton href="#contact" variant="primary" icon="arrow">
          Apply Now
        </AppButton>
      </div>

      <button
        type="button"
        class="inline-flex items-center justify-center self-center rounded-lg p-2 text-navy lg:hidden"
        :aria-expanded="mobileOpen"
        aria-label="Toggle menu"
        @click="mobileOpen = !mobileOpen"
      >
        <X v-if="mobileOpen" class="size-6" />
        <Menu v-else class="size-6" />
      </button>
    </div>

    <div
      v-show="mobileOpen"
      class="border-t border-[#0E1E3E]/[0.08] bg-white lg:hidden"
    >
      <nav class="section-container flex flex-col gap-1 py-4" aria-label="Mobile">
        <a
          v-for="link in navLinks"
          :key="link.href"
          :href="link.href"
          class="rounded-lg px-3 py-2.5 text-sm font-medium"
          :class="
            isActive(link.href)
              ? 'bg-green/10 text-green'
              : 'text-gray-body hover:bg-gray-50'
          "
          :aria-current="isActive(link.href) ? 'true' : undefined"
          @click="onNavClick"
        >
          {{ link.label }}
        </a>
        <div class="mt-3 flex flex-col gap-2 border-t border-border pt-4">
          <AppButton href="#contact" variant="secondary" icon="phone" block>
            Speak to an Advisor
          </AppButton>
          <AppButton href="#contact" variant="primary" icon="arrow" block>
            Apply Now
          </AppButton>
        </div>
      </nav>
    </div>
  </header>
</template>

<style scoped>
.site-header {
  box-shadow:
    inset 0 -1px 0 0 rgb(14 30 62 / 0.08),
    0 8px 24px 0 rgb(14 30 62 / 0.08);
}
</style>
