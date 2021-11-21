<template>
  <Global />

  <Header />

  <div class="max-w-screen-lg px-4 py-10 mx-auto">
    <h2 class="text-title">Cards</h2>

    <List :sizes="sizes">
      <Card
        v-for="card in cards"
        :key="card.id"
        :title="card.title"
        :subtitle="card.subtitle"
        :icon="card.icon"
      >
        <p v-if="card.content" v-html="card.content" />
      </Card>
    </List>

    <h2 class="mt-10 text-title">Buttons</h2>

    <List :sizes="sizes" direction="column">
      <Button>Normal Button</Button>
      <Button full>Full Button with <strong class="text-bold">Bold</strong> Text</Button>
    </List>

    <h2 class="mt-10 text-title">Accordions</h2>

    <List :sizes="sizes">
      <Accordion v-for="item in 9" :key="item" title="Accordion">
        Lorem ipsum dolor sit amet consectetur <b class="font-bold">adipisicing elit</b>. Vitae
        ratione, est error distinctio optio sequi temporibus enim quidem ut ad,
        <b class="font-bold">tempora pariatur</b> assumenda nemo nulla sapiente fugiat quia, vel
        voluptatem!
      </Accordion>
    </List>
  </div>
</template>

<script setup>
import Global from '~/components/Global/Global.vue'
import Header from '~/components/Header/Header.vue'
import List from '~/components/List/List.vue'
import Card from '~/components/Card/Card.vue'
import Button from '~/components/Button/Button.vue'
import Accordion from '~/components/Accordion/Accordion.vue'
import { load } from '~/plugins/mode'
import { cards } from './App.data'

load()

const sizes = {
  sm: 1 / 1,
  md: 1 / 2,
  lg: 1 / 3,
  xl: 1 / 3,
}
</script>
