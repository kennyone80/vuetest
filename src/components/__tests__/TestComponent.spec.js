import TestComponent from '../TestComponent.vue'
import { shallowMount } from '@vue/test-utils'

describe('TestComponent.vue', () => {
  test('renders Hello, world!', () => {
    // Returns a wrapper containing a mounted Item
    const wrapper = shallowMount(TestComponent)
    // Returns the Item text content
    expect(wrapper.text()).toBe('Hello, World!')
  })
})
