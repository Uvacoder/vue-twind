<script setup>
import List from './components/List/List.vue'
import Card from './components/Card/Card.vue'

const count = 6
</script>

<template>
	<List>
		<Card v-for="item in count" :key="item" />

		<Card />

		<Card />
	</List>
</template>
