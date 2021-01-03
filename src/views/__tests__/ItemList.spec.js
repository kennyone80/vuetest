import { shallowMount } from '@vue/test-utils'
import ItemList from '../../views/ItemList.vue'
import Item from '../../components/Item.vue'
// import flushPromises from 'flush-promises'
import { fetchListData } from '../../api/api.js'

jest.mock('../../api/api.js')

describe('ItemListe.vue', () => {
  // test('renders Item from each item in window.items', () => {
  //   const $bar = {
  //     start: () => {},
  //     finish: () => {}
  //   }
  //   window.items = [{}, {}, {}]
  //   const wrapper = shallowMount(ItemList, { mocks: { $bar } })
  //   expect(wrapper.findAllComponents(Item)).toHaveLength(window.items.length)
  // })

  test('renders an Item with data for each item', async () => {
    expect.assertions(4)
    const $bar = {
      start: () => {},
      finish: () => {}
    }
    const items = [{ id: 1 }, { id: 2 }, { id: 3 }]
    fetchListData.mockResolvedValueOnce(items) // Configures fetchListData to resolve with the items array
    const wrapper = shallowMount(ItemList, { mocks: { $bar } })
    // await flushPromises()
    await wrapper.vm.$nextTick()
    const Items = wrapper.findAllComponents(Item)
    expect(Items).toHaveLength(items.length)
    Items.wrappers.forEach((wrapper, i) => {
      expect(wrapper.vm.item).toBe(items[i])
    })
  })

  test('calls $bar start on load', () => {
    const $bar = {
      start: jest.fn(),
      finish: () => {}
    }
    shallowMount(ItemList, { mocks: { $bar } })
    expect($bar.start).toHaveBeenCalledTimes(1)
  })
  
  test('calls $bar.finish when load is successful', async () => {
    expect.assertions(1)
    const $bar = {
      start: () => {},
      finish: jest.fn()
    }
    const wrapper = shallowMount(ItemList, {mocks: { $bar }})
    // await flushPromises()
    await wrapper.vm.$nextTick()

    expect($bar.finish).toHaveBeenCalled()
  })

  test('calls $bar.fail when load unsuccessful', async () => {
    expect.assertions(1)
    const $bar = {
      start: () => {},
      fail: jest.fn()
    }
    fetchListData.mockResolvedValueOnce()
    const wrapper = shallowMount(ItemList, { mocks: { $bar } })
    await wrapper.vm.$nextTick()

    expect($bar.fail).toHaveBeenCalled()
  })
})
