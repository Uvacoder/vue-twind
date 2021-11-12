<script>
import { defineComponent, h } from 'vue'

import { __list } from './List.styles'

const SIZES = {
  sm: 1 / 1,
  md: 1 / 2,
  lg: 1 / 3,
  xl: 1 / 4,
}

export default defineComponent({
  props: {
    direction: {
      type: String,
      default: 'row',
      validator(value) {
        return ~['column', 'row'].indexOf(value)
      },
    },
    sizes: {
      type: Object,
      default: SIZES,
    },
  },
  render() {
    const slots = this.$slots.default()
    const list = []
    const row = this.direction === 'row'
    const sizes = {
      sm: this.sizes.sm ? this.sizes.sm * 100 : SIZES.sm * 100,
      md: this.sizes.md ? this.sizes.md * 100 : SIZES.md * 100,
      lg: this.sizes.lg ? this.sizes.lg * 100 : SIZES.lg * 100,
      xl: this.sizes.xl ? this.sizes.xl * 100 : SIZES.xl * 100,
    }

    slots.forEach((slot) => {
      const loop = typeof slot.type === 'symbol'

      if (loop) {
        return slot.children.forEach((child) => list.push(child))
      }

      return list.push(slot)
    })

    return h(
      'ul',
      {
        class: ['list', this.$tw(__list(row, sizes))],
      },
      list.map((element) =>
        h(
          'li',
          {
            class: 'list__item',
          },
          [element]
        )
      )
    )
  },
})
</script>
