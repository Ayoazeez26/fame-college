<script setup lang="ts">
const cards = [
  {
    id: 'global',
    title: 'Global Standards',
    description:
      'IGCSE, A-Level & IELTS programs aligned with international benchmarks, designed to prepare students for global academic success and future career opportunities.',
    icon: '/icons/why/global.png',
    widthClass: 'lg:w-[305px]',
    iconClass: 'h-28 w-32 sm:h-32 sm:w-36',
  },
  {
    id: 'pathway',
    title: 'Complete Pathway',
    description:
      "One school for your child's full educational journey from early learning to advanced academic preparation in a supportive environment.",
    icon: '/icons/why/pathway.png',
    widthClass: 'lg:w-[412px]',
    iconClass: 'h-20 w-24 sm:h-24 sm:w-28',
  },
  {
    id: 'flexible',
    title: 'Flexible Learning',
    description:
      'On-campus classes plus interactive online tutorials, giving students the flexibility to learn from anywhere while staying engaged, supported, and on track for academic success.',
    icon: '/icons/why/flexible.png',
    widthClass: 'lg:w-[522px]',
    iconClass: 'h-20 w-24 sm:h-24 sm:w-28',
  },
  {
    id: 'results',
    title: 'Results + Character',
    description:
      'Strong exam performance while building leadership, integrity, confidence, discipline, and the character needed to thrive academically, socially, and in future careers.',
    icon: '/icons/why/results.png',
    widthClass: 'lg:w-[520px]',
    iconClass: 'h-20 w-24 sm:h-24 sm:w-28',
  },
  {
    id: 'support',
    title: 'Personal Support',
    description:
      'Small class sizes and dedicated mentoring, ensuring every student receives personalized attention, academic guidance, and the support needed to grow with confidence.',
    icon: '/icons/why/support.png',
    widthClass: 'lg:w-[412px]',
    iconClass: 'h-20 w-24 sm:h-24 sm:w-28',
  },
] as const

const globalCard = cards[0]
const pathwayCard = cards[1]
const flexibleCard = cards[2]
const resultsCard = cards[3]
const supportCard = cards[4]
</script>

<template>
  <section class="py-16 lg:py-24">
    <div class="section-container">
      <div class="grid gap-8 lg:grid-cols-[1fr_400px] lg:items-center">
        <div>
          <SectionEyebrow label="Why Fame College" />
          <h2
            class="mt-4 w-full max-w-2xl font-serif text-3xl font-normal leading-[120%] text-navy sm:text-5xl"
          >
            A School Built Around Outcomes That Travel With Your Child.
          </h2>
        </div>
        <p class="text-sm leading-relaxed text-gray-body">
          Five commitments that define every classroom, every term, every
          learner — from Primary 1 to A-Levels.
        </p>
      </div>

      <!-- Mobile / tablet: stacked -->
      <div class="mt-12 flex flex-col gap-5 lg:hidden">
        <article
          v-for="card in cards"
          :key="card.id"
          class="why-card relative flex min-h-[200px] min-w-0 flex-col overflow-hidden rounded-2xl border border-border bg-white p-6"
        >
          <div
            class="why-card-icon pointer-events-none absolute right-4 top-4 bg-[#EAEAEA]"
            :class="card.iconClass"
            :style="{
              WebkitMaskImage: `url(${card.icon})`,
              maskImage: `url(${card.icon})`,
            }"
            aria-hidden="true"
          />
          <div class="relative mt-auto flex h-full flex-col justify-end pt-16">
            <h3 class="font-serif text-xl font-normal text-navy">
              {{ card.title }}
            </h3>
            <p class="mt-2 text-sm leading-relaxed text-gray-body">
              {{ card.description }}
            </p>
          </div>
        </article>
      </div>

      <!-- Desktop: 305 | (412 + 522) / (520 + 412), 20px gaps → 1279px -->
      <div class="mt-12 hidden lg:flex lg:gap-5">
        <article
          class="why-card relative flex min-h-[460px] shrink-0 flex-col overflow-hidden rounded-2xl border border-border bg-white p-6"
          :class="globalCard.widthClass"
        >
          <div
            class="why-card-icon pointer-events-none absolute right-4 top-4 bg-[#EAEAEA]"
            :class="globalCard.iconClass"
            :style="{
              WebkitMaskImage: `url(${globalCard.icon})`,
              maskImage: `url(${globalCard.icon})`,
            }"
            aria-hidden="true"
          />
          <div class="relative mt-auto flex h-full flex-col justify-end pt-16">
            <h3 class="font-serif text-xl font-normal text-navy">
              {{ globalCard.title }}
            </h3>
            <p class="mt-2 text-sm leading-relaxed text-gray-body">
              {{ globalCard.description }}
            </p>
          </div>
        </article>

        <div class="flex flex-col gap-5">
          <div class="flex gap-5">
            <article
              class="why-card relative flex min-h-[220px] shrink-0 flex-col overflow-hidden rounded-2xl border border-border bg-white p-6"
              :class="pathwayCard.widthClass"
            >
              <div
                class="why-card-icon pointer-events-none absolute right-4 top-4 bg-[#EAEAEA]"
                :class="pathwayCard.iconClass"
                :style="{
                  WebkitMaskImage: `url(${pathwayCard.icon})`,
                  maskImage: `url(${pathwayCard.icon})`,
                }"
                aria-hidden="true"
              />
              <div class="relative mt-auto flex h-full flex-col justify-end pt-16">
                <h3 class="font-serif text-xl font-normal text-navy">
                  {{ pathwayCard.title }}
                </h3>
                <p class="mt-2 text-sm leading-relaxed text-gray-body">
                  {{ pathwayCard.description }}
                </p>
              </div>
            </article>
            <article
              class="why-card relative flex min-h-[220px] shrink-0 flex-col overflow-hidden rounded-2xl border border-border bg-white p-6"
              :class="flexibleCard.widthClass"
            >
              <div
                class="why-card-icon pointer-events-none absolute right-4 top-4 bg-[#EAEAEA]"
                :class="flexibleCard.iconClass"
                :style="{
                  WebkitMaskImage: `url(${flexibleCard.icon})`,
                  maskImage: `url(${flexibleCard.icon})`,
                }"
                aria-hidden="true"
              />
              <div class="relative mt-auto flex h-full flex-col justify-end pt-16">
                <h3 class="font-serif text-xl font-normal text-navy">
                  {{ flexibleCard.title }}
                </h3>
                <p class="mt-2 text-sm leading-relaxed text-gray-body">
                  {{ flexibleCard.description }}
                </p>
              </div>
            </article>
          </div>
          <div class="flex gap-5">
            <article
              class="why-card relative flex min-h-[220px] shrink-0 flex-col overflow-hidden rounded-2xl border border-border bg-white p-6"
              :class="resultsCard.widthClass"
            >
              <div
                class="why-card-icon pointer-events-none absolute right-4 top-4 bg-[#EAEAEA]"
                :class="resultsCard.iconClass"
                :style="{
                  WebkitMaskImage: `url(${resultsCard.icon})`,
                  maskImage: `url(${resultsCard.icon})`,
                }"
                aria-hidden="true"
              />
              <div class="relative mt-auto flex h-full flex-col justify-end pt-16">
                <h3 class="font-serif text-xl font-normal text-navy">
                  {{ resultsCard.title }}
                </h3>
                <p class="mt-2 text-sm leading-relaxed text-gray-body">
                  {{ resultsCard.description }}
                </p>
              </div>
            </article>
            <article
              class="why-card relative flex min-h-[220px] shrink-0 flex-col overflow-hidden rounded-2xl border border-border bg-white p-6"
              :class="supportCard.widthClass"
            >
              <div
                class="why-card-icon pointer-events-none absolute right-4 top-4 bg-[#EAEAEA]"
                :class="supportCard.iconClass"
                :style="{
                  WebkitMaskImage: `url(${supportCard.icon})`,
                  maskImage: `url(${supportCard.icon})`,
                }"
                aria-hidden="true"
              />
              <div class="relative mt-auto flex h-full flex-col justify-end pt-16">
                <h3 class="font-serif text-xl font-normal text-navy">
                  {{ supportCard.title }}
                </h3>
                <p class="mt-2 text-sm leading-relaxed text-gray-body">
                  {{ supportCard.description }}
                </p>
              </div>
            </article>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.why-card-icon {
  mask-size: contain;
  mask-repeat: no-repeat;
  mask-position: center;
  -webkit-mask-size: contain;
  -webkit-mask-repeat: no-repeat;
  -webkit-mask-position: center;
}
</style>
