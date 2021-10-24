<template>
	<div class="card" :class="__card(children)">
		<div class="card__front">
			<div class="card__info">
				<h3>{{ title }}</h3>
				<h5 v-if="subtitle">{{ subtitle }}</h5>
			</div>

			<i v-if="icon" class="card__icon">
				<component :is="icon" />
			</i>
		</div>

		<div v-if="children" class="card__back">
			<slot />
		</div>
	</div>
</template>

<script setup>
import { useSlots } from 'vue'
import { __card } from './Card.styles'
import { CogIcon } from '@heroicons/vue/outline'
import { InformationCircleIcon } from '@heroicons/vue/outline'
import { ExclamationCircleIcon } from '@heroicons/vue/outline'
import { UserIcon } from '@heroicons/vue/outline'

const props = defineProps({
	title: {
		type: String,
		required: true,
	},
	subtitle: {
		type: String,
		required: false,
	},
	type: {
		type: String,
		required: false,
		validators(value) {
			return ~['settings', 'info', 'warning', 'user'].indexOf(value)
		},
	},
})
const slots = useSlots()
const children = slots.default().find((child) => typeof child.key === 'number')
const icons = {
	settings: CogIcon,
	info: InformationCircleIcon,
	warning: ExclamationCircleIcon,
	user: UserIcon,
}
const icon = props.type ? icons[props.type] : null
</script>
