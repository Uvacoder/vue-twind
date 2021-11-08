<script>
import { defineComponent, Fragment, h } from 'vue'
import { __list } from './List.styles'

const SIZE = {
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
    size: {
      type: Object,
      default: SIZE,
    },
  },
  render() {
    const slots = this.$slots.default()
    const list = []
    const row = this.direction === 'row'
    const size = {
      sm: this.size.sm ? this.size.sm * 100 : SIZE.sm * 100,
      md: this.size.md ? this.size.md * 100 : SIZE.md * 100,
      lg: this.size.lg ? this.size.lg * 100 : SIZE.lg * 100,
      xl: this.size.xl ? this.size.xl * 100 : SIZE.xl * 100,
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
        class: ['list', __list(row, size)],
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
