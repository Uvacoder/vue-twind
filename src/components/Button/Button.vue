<template>
  <button :class="__button">
    <slot />
  </button>
</template>

<script setup>
import { __button } from './Button.styles.js'
</script>
