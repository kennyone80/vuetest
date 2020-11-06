import Item from '../Item.vue'
import { shallowMount } from '@vue/test-utils'

describe('Item.vue', () => {
  test('renders "item"', () => {
    // Returns a wrapper containing a mounted Item
    const wrapper = shallowMount(Item)
    // Returns the Item text content
    expect(wrapper.text()).toContain('item')
  })
})
