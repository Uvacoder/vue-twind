<template>
  <button :class="$tw(__button({ full }))">
    <slot />
  </button>
</template>

<script setup>
import { __button } from './Button.styles.js'

const props = defineProps({
  full: {
    type: Boolean,
    default: false,
  },
})
</script>
