<template>
  <header :class="$tw(__header)">
    <div class="max-w-screen-lg px-4 mx-auto">
      <div class="header__content">
        <h1 class="text-hero">Vwind</h1>

        <Mode />
      </div>
    </div>
  </header>
</template>

<script setup>
import Mode from '~/components/Mode/Mode.vue'

import { __header } from './Header.styles'
</script>
