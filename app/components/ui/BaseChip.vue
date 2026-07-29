<template>
  <component
    :is="clickable ? 'button' : 'span'"
    :type="clickable ? 'button' : undefined"
    :class="[
      'chip-base inline-flex items-center gap-1.5 transition-colors duration-150',
      active ? '!bg-primary !text-white' : 'hover:bg-gray-200',
      clickable ? 'cursor-pointer select-none' : ''
    ]"
    @click="handleClick"
  >
    <slot name="icon" />
    <slot />
  </component>
</template>

<script setup lang="ts">
interface Props {
  active?: boolean
  clickable?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  active: false,
  clickable: true
})

const emit = defineEmits<{
  (e: 'click', event: MouseEvent): void
}>()

const handleClick = (event: MouseEvent) => {
  if (props.clickable) {
    emit('click', event)
  }
}
</script>
