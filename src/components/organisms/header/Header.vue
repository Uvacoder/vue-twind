<template>
  <header :class="$tw(__header)">
    <div class="max-w-screen-lg px-4 mx-auto">
      <div class="header__content">
        <Logo />

        <Mode />
      </div>
    </div>
  </header>
</template>

<script setup>
import Logo from '~/components/atoms/logo/Logo.vue'
import Mode from '~/components/atoms/mode/Mode.vue'

import { __header } from './Header.styles'
</script>
