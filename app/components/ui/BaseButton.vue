<template>
  <component
    :is="to ? NuxtLink : 'button'"
    :to="to"
    :type="to ? undefined : type"
    :disabled="disabled"
    :class="[
      buttonClasses,
      disabled ? 'opacity-50 cursor-not-allowed pointer-events-none' : ''
    ]"
  >
    <slot name="icon-left" />
    <slot />
    <slot name="icon-right" />
  </component>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const NuxtLink = resolveComponent('NuxtLink')

interface Props {
  variant?: 'primary' | 'secondary' | 'link'
  type?: 'button' | 'submit' | 'reset'
  disabled?: boolean
  to?: string
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'primary',
  type: 'button',
  disabled: false,
  to: undefined
})

const buttonClasses = computed(() => {
  switch (props.variant) {
    case 'secondary':
      return 'btn-secondary gap-2'
    case 'link':
      return 'btn-link hover:underline gap-1'
    case 'primary':
    default:
      return 'btn-primary gap-2'
  }
})
</script>
