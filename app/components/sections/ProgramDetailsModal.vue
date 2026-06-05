<script setup lang="ts">
import { useScrollLock } from '@vueuse/core'
import { ArrowUpRight, X } from 'lucide-vue-next'
import type { ProgramCard } from '~/data/programs'

const props = defineProps<{
  program: ProgramCard | null
  open: boolean
}>()

const emit = defineEmits<{
  close: []
  enquire: []
}>()

const titleId = 'program-modal-title'
const isModalOpen = computed(() => props.open && !!props.program)
const scrollLocked = useScrollLock()

watch(
  isModalOpen,
  (isOpen) => {
    scrollLocked.value = isOpen
    if (import.meta.client) {
      document.documentElement.classList.toggle('overflow-hidden', isOpen)
    }
  },
  { immediate: true },
)

onUnmounted(() => {
  scrollLocked.value = false
  if (import.meta.client) {
    document.documentElement.classList.remove('overflow-hidden')
  }
})

function onBackdropClick() {
  emit('close')
}

function onEnquire() {
  emit('enquire')
}

function onKeydown(event: KeyboardEvent) {
  if (event.key === 'Escape' && props.open) {
    emit('close')
  }
}

onMounted(() => {
  window.addEventListener('keydown', onKeydown)
})

onUnmounted(() => {
  window.removeEventListener('keydown', onKeydown)
})
</script>

<template>
  <Teleport to="body">
    <Transition
      enter-active-class="transition duration-200 ease-out"
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="transition duration-150 ease-in"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <div
        v-if="open && program"
        class="fixed inset-0 z-50 mt-16 flex items-end justify-center overscroll-none p-4 sm:items-center sm:p-6"
        role="presentation"
      >
        <div
          class="absolute inset-0 bg-navy/60 backdrop-blur-sm"
          aria-hidden="true"
          @click="onBackdropClick"
          @touchmove.prevent
        />

        <Transition
          enter-active-class="transition duration-200 ease-out"
          enter-from-class="opacity-0 scale-95"
          enter-to-class="opacity-100 scale-100"
          leave-active-class="transition duration-150 ease-in"
          leave-from-class="opacity-100 scale-100"
          leave-to-class="opacity-0 scale-95"
          appear
        >
          <div
            v-if="open && program"
            role="dialog"
            aria-modal="true"
            :aria-labelledby="titleId"
            class="relative flex max-h-[min(80dvh,700px)] w-full max-w-2xl flex-col overflow-hidden rounded-3xl rounded-b-none bg-white shadow-[0_24px_60px_rgba(11,24,50,0.2)] sm:max-h-[min(80vh,700px)] sm:rounded-3xl"
          >
            <div class="overflow-y-auto px-6 pb-6 pt-6 sm:px-8 sm:pt-8">
              <div class="flex items-start justify-between gap-4">
                <span
                  class="rounded-full bg-[#E7F6EE] px-3 py-1 text-xs font-medium uppercase tracking-wide text-green"
                >
                  {{ program.badge }}
                </span>
                <button
                  type="button"
                  class="flex size-10 shrink-0 items-center justify-center rounded-full border border-border text-navy transition hover:border-navy/30 hover:bg-[#F0F2F5]"
                  aria-label="Close program details"
                  @click="emit('close')"
                >
                  <X class="size-5" aria-hidden="true" />
                </button>
              </div>

              <h2
                :id="titleId"
                class="mt-6 font-serif text-2xl font-normal text-navy sm:text-3xl"
              >
                {{ program.title }}
              </h2>
              <p class="mt-2 text-sm leading-relaxed text-gray-body sm:text-base">
                {{ program.description }}
              </p>

              <div class="mt-6 space-y-6">
                <div
                  v-for="(section, sectionIndex) in program.details"
                  :key="sectionIndex"
                >
                  <h3
                    v-if="section.heading"
                    class="mb-3 text-xs font-semibold uppercase tracking-wide text-gray-body"
                  >
                    {{ section.heading }}
                  </h3>
                  <ul class="space-y-2.5">
                    <li
                      v-for="(item, itemIndex) in section.items"
                      :key="itemIndex"
                      class="flex gap-3 text-sm leading-relaxed text-gray-body"
                    >
                      <span
                        class="mt-2 size-1.5 shrink-0 rounded-full bg-green"
                        aria-hidden="true"
                      />
                      <span>{{ item }}</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div
              class="flex shrink-0 flex-col gap-3 border-t border-border px-6 py-5 sm:flex-row sm:px-8"
            >
              <button
                type="button"
                class="flex-1 rounded-full border border-navy px-6 py-3.5 text-sm font-medium text-navy transition hover:bg-[#F0F2F5]"
                @click="emit('close')"
              >
                Cancel
              </button>
              <button
                type="button"
                class="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-navy-bg px-6 py-3.5 text-sm font-medium text-white shadow-[0_8px_24px_rgba(11,24,50,0.2)] transition hover:bg-navy-bg/90"
                @click="onEnquire"
              >
                Enquire About This Program
                <ArrowUpRight class="size-4 shrink-0" aria-hidden="true" />
              </button>
            </div>
          </div>
        </Transition>
      </div>
    </Transition>
  </Teleport>
</template>
