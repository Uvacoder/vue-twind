<template>
  <button :class="$tw(__mode({ dark }))" @click="toggle">
    <Icon :icon="icon" />
  </button>
</template>

<script setup>
import { ref, computed } from 'vue'
import Icon from '~/components/atoms/icon/Icon.vue'

import { __mode } from './Mode.styles'

const dark = ref(localStorage.theme === 'dark')
const icon = computed(() => (dark.value ? 'SunIcon' : 'MoonIcon'))

const toggle = () => {
  const value = !dark.value

  dark.value = value

  if (value) {
    document.documentElement.classList.add('dark')
    localStorage.setItem('theme', 'dark')
  } else {
    document.documentElement.classList.remove('dark')
    localStorage.setItem('theme', 'light')
  }
}
</script>
