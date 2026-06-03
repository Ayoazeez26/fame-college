<script setup lang="ts">
import { tickerItems } from '~/data/site'

const items = [...tickerItems, ...tickerItems]
</script>

<template>
  <section class="overflow-hidden bg-white py-16" aria-label="Subjects and programmes">
    <div class="flex w-max animate-marquee items-center gap-6">
      <template v-for="(item, i) in items" :key="`${item}-${i}`">
        <span class="size-1.5 shrink-0 rounded-full bg-green" aria-hidden="true" />
        <span class="font-serif text-xl uppercase tracking-wide text-navy sm:text-2xl">
          {{ item }}
        </span>
      </template>
    </div>
  </section>
</template>
