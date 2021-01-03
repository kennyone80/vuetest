import { shallowMount } from '@vue/test-utils'
import ProgressBar from '../ProgressBar.vue'

beforeEach(() => {
  jest.useFakeTimers()
})

describe('ProgressBar.vue', () => {
  test('sets the bar to 100% width when finish is called', async () => {
    const wrapper = shallowMount(ProgressBar)
    wrapper.vm.start()
    wrapper.vm.finish()
    await wrapper.vm.$nextTick()
    expect(wrapper.element.style.width).toBe('100%')
  })

  test('increases width by 1% every 100ms after strat call', async () => {
    const wrapper = shallowMount(ProgressBar)
    wrapper.vm.start()
    jest.runTimersToTime(100)
    await wrapper.vm.$nextTick()
    expect(wrapper.element.style.width).toBe('1%')
    jest.runTimersToTime(900)
    await wrapper.vm.$nextTick()
    expect(wrapper.element.style.width).toBe('10%')
    jest.runTimersToTime(4000)
    await wrapper.vm.$nextTick()
    expect(wrapper.element.style.width).toBe('50%')
  })

  test('hides the bar when finish is called', async () => {
    const wrapper = shallowMount(ProgressBar)
    wrapper.vm.start()
    wrapper.vm.finish()
    await wrapper.vm.$nextTick()
    expect(wrapper.classes()).toContain('hidden')
  })

  test('clears timer when finish is called', () => {
    jest.spyOn(window, 'clearInterval')
    setInterval.mockReturnValue(123)
    const wrapper = shallowMount(ProgressBar)
    wrapper.vm.start()
    wrapper.vm.finish()
    expect(window.clearInterval).toHaveBeenCalledWith(123)
  })

  test('removes error class when start is called', () => {
    const wrapper = shallowMount(ProgressBar)
    wrapper.vm.fail()
    wrapper.vm.start()
    expect(wrapper.classes()).not.toContain('error')
  })

  test('sets the bar to 100% width when fail is called', async () => {
    const wrapper = shallowMount(ProgressBar)
    wrapper.vm.fail()
    await wrapper.vm.$nextTick()
    expect(wrapper.classes()).toContain('error')
  })

  test('styles the bar correctly when fail is called', async () => {
    const wrapper = shallowMount(ProgressBar)
    wrapper.vm.fail()
    await wrapper.vm.$nextTick()
    expect(wrapper.element.style.width).toBe('100%')
  })
})
