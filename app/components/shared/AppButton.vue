<script setup lang="ts">
import { ArrowUpRight, Phone } from 'lucide-vue-next'

type Variant = 'primary' | 'secondary' | 'green' | 'ghost-green'

const props = withDefaults(
  defineProps<{
    variant?: Variant
    href?: string
    type?: 'button' | 'submit'
    icon?: 'arrow' | 'phone' | 'none'
    block?: boolean
    disabled?: boolean
    external?: boolean
  }>(),
  {
    variant: 'primary',
    type: 'button',
    icon: 'none',
    block: false,
    disabled: false,
    external: false,
  },
)

const variantClasses: Record<Variant, string> = {
  primary:
    'bg-navy-bg text-white hover:bg-navy-bg/90 focus-visible:ring-navy-bg disabled:cursor-not-allowed disabled:opacity-60',
  secondary:
    'border border-green/40 bg-white text-green hover:bg-green/5 focus-visible:ring-green',
  green:
    'bg-green text-white hover:bg-green/90 focus-visible:ring-green',
  'ghost-green':
    'bg-transparent text-green hover:text-green/80 focus-visible:ring-green',
}

const classes = computed(() => [
  'inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2',
  variantClasses[props.variant],
  props.block ? 'w-full' : '',
])
</script>

<template>
  <component
    :is="href ? 'a' : 'button'"
    :href="href"
    :target="href && external ? '_blank' : undefined"
    :rel="href && external ? 'noopener noreferrer' : undefined"
    :type="href ? undefined : type"
    :disabled="href ? undefined : disabled"
    :class="classes"
  >
    <slot />
    <Phone v-if="icon === 'phone'" class="size-4 shrink-0" aria-hidden="true" />
    <ArrowUpRight
      v-if="icon === 'arrow'"
      class="size-4 shrink-0"
      aria-hidden="true"
    />
  </component>
</template>
