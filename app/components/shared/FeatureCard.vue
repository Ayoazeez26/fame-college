<script setup lang="ts">
defineProps<{
  title: string
  description?: string
  compact?: boolean
}>()
</script>

<template>
  <div
    class="rounded-2xl border border-border bg-white"
    :class="compact ? 'p-4' : 'p-5'"
  >
    <div v-if="$slots.icon" class="mb-3">
      <slot name="icon" />
    </div>
    <p
      class="font-serif font-normal text-navy"
      :class="compact ? 'text-base' : 'text-lg'"
    >
      {{ title }}
    </p>
    <p
      v-if="description"
      class="mt-1 text-sm text-gray-body"
    >
      {{ description }}
    </p>
    <slot />
  </div>
</template>
