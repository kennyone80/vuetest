import { shallowMount } from '@vue/test-utils'
import ItemList from '../../views/ItemList.vue'
import Item from '../../components/Item.vue'

describe('ItemListe.vue', () => {
    test('renders Item fro each item in window.items', () => {
        window.items = [{},{},{}]
        const wrapper = shallowMount(ItemList)
        expect(wrapper.findAllComponents(Item)).toHaveLength(window.items.length)
    })
})