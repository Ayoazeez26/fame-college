<script setup lang="ts">
defineProps<{
  label: string
  centered?: boolean
}>()
</script>

<template>
  <div
    class="flex items-center gap-2"
    :class="centered ? 'justify-center' : ''"
  >
    <span
      class="text-sm font-bold uppercase text-green"
    >
      {{ label.startsWith('—') ? label : `— ${label}` }}
    </span>
  </div>
</template>
