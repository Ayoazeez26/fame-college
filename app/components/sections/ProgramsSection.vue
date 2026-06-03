<script setup lang="ts">
import { ArrowUpRight } from 'lucide-vue-next'
import {
  programPathways,
  programs,
  type ProgramCard,
  type ProgramPathway,
} from '~/data/programs'

const activePathway = ref<ProgramPathway>('School')
const selectedProgram = ref<ProgramCard | null>(null)
const modalOpen = ref(false)

const filteredPrograms = computed(() =>
  programs.filter((p) => p.pathway === activePathway.value),
)

function openProgramDetails(program: ProgramCard) {
  selectedProgram.value = program
  modalOpen.value = true
}

function closeModal() {
  modalOpen.value = false
}

watch(activePathway, closeModal)

function enquireAboutProgram() {
  closeModal()
  if (import.meta.client) {
    nextTick(() => {
      document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
    })
  }
}
</script>

<template>
  <section id="programs" class="py-16 lg:py-24">
    <div class="section-container">
      <div class="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <SectionEyebrow label="ACADEMIC PROGRAMS" />
          <h2
            class="mt-4 w-full max-w-2xl font-serif text-3xl font-normal leading-[120%] text-navy sm:text-5xl"
          >
            A Complete Academic Universe
            <span class="block">Explore by Pathway.</span>
          </h2>
        </div>
        <div class="flex flex-wrap gap-2">
          <button
            v-for="pathway in programPathways"
            :key="pathway"
            type="button"
            class="rounded-full px-5 py-2.5 text-sm font-medium transition"
            :class="
              activePathway === pathway
                ? 'bg-navy-bg text-white'
                : 'border border-border bg-white text-navy hover:border-navy/30'
            "
            @click="activePathway = pathway"
          >
            {{ pathway }}
          </button>
        </div>
      </div>

      <div class="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <article
          v-for="program in filteredPrograms"
          :key="program.id"
          class="group flex flex-col rounded-2xl border border-border bg-white p-6 transition-[border-color,box-shadow] duration-300 hover:border-green hover:shadow-[0_8px_30px_rgba(11,24,50,0.12)]"
        >
          <div class="flex items-start justify-between gap-4">
            <span
              class="rounded-full bg-[#E7F6EE] px-3 py-1 text-xs font-medium text-green"
            >
              {{ program.badge }}
            </span>
            <span
              class="flex size-12 shrink-0 items-center justify-center rounded-full bg-[#F0F2F5] transition-colors duration-300 group-hover:bg-navy"
            >
              <ArrowUpRight
                class="size-6 text-navy transition-colors duration-300 group-hover:text-white"
                aria-hidden="true"
              />
            </span>
          </div>
          <h3 class="mt-6 font-serif text-xl font-normal text-navy md:text-2xl">
            {{ program.title }}
          </h3>
          <p class="mt-2 text-gray-body">
            {{ program.description }}
          </p>
          <button
            type="button"
            class="mt-auto inline-flex items-center gap-1 self-start pt-6 text-sm font-medium text-navy transition hover:text-green"
            @click="openProgramDetails(program)"
          >
            View Program Details
            <ArrowUpRight class="size-4" aria-hidden="true" />
          </button>
        </article>
        <p
          v-if="filteredPrograms.length === 0"
          class="col-span-full py-8 text-gray-body"
        >
          Programmes for this pathway coming soon.
        </p>
      </div>
    </div>

    <ProgramDetailsModal
      :program="selectedProgram"
      :open="modalOpen"
      @close="closeModal"
      @enquire="enquireAboutProgram"
    />
  </section>
</template>
