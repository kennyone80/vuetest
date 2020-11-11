import Item from '../Item.vue'
import { shallowMount } from '@vue/test-utils'

describe('Item.vue', () => {
  test('renders "item"', () => {
    const item = {
      url: 10
    }
    // Passes the item object as props to Item
    const wrapper = shallowMount(Item, {
      propsData: { item }
    })
    // Uses toContain to assert the item.url exists in rendered component text
    expect(wrapper.text()).toContain(item.url)
  })
})
