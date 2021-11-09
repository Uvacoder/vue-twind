<template>
  <button :class="$tw(__button(primary))" @click="toggle">
    <slot />
  </button>
</template>

<script setup>
import { ref } from 'vue'

import { __button } from './Button.styles.js'

const primary = ref(false)

const toggle = () => {
  primary.value = !primary.value
}
</script>
