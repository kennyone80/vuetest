import Item from '../Item.vue'
import Vue from 'vue'

describe('Item.vue', () => {
  test('renders "item"', () => {
    // Creates a new Vue constructor with the Item options
    const Ctor = Vue.extend(Item)
    // Creates a new Vue instance, and mounts the Vue instance
    const vm = new Ctor().$mount()
    // Acces the DOM element, and check the text content
    expect(vm.$el.textContent).toContain('item')
  })
})
