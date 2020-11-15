import Item from '../Item.vue'
import { shallowMount } from '@vue/test-utils'

describe('Item.vue', () => {
  test('renders a link to the item.url with item.title as text', () => {
    const item = {
      url: 'http://some-url.com',
      title: 'some title'
    }
    // Passes prop data
    const wrapper = shallowMount(Item, {
      propsData: { item }
    })
    const a = wrapper.find('a')
    expect(a.text()).toBe(item.title)
    expect(a.attributes().href).toBe(item.url)
  })
  test('renders item.score as text', () => {
    const item = {
      score: '10'
    }
    // Passes prop data
    const wrapper = shallowMount(Item, {
      propsData: { item }
    })
    expect(wrapper.text()).toBe(item.score)
  })
  test('renders item.author as text', () => {
    const item = {
      author: 'eric bernier'
    }
    // Passes prop data
    const wrapper = shallowMount(Item, {
      propsData: { item }
    })
    expect(wrapper.text()).toBe(item.author)
  })
})
