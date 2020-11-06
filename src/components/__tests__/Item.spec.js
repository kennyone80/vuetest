import Item from '../Item.vue'
import { mount } from '@vue/test-utils'

describe('Item.vue', () => {
  test('renders "item"', () => {
    // Returns a wrapper containing a mounted Item
    const wrapper = mount(Item)
    // Returns the Item text content
    expect(wrapper.vm.$el.textContent).toContain('item')
  })
})
