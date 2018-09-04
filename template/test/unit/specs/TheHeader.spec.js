import TheHeader from '@/components/TheHeader'
import { mount } from '@vue/test-utils'

describe('TheHeader.vue', () => {
  it('is a Vue instance', () => {
    const wrapper = mount(TheHeader)
    expect(wrapper.isVueInstance()).toBeTruthy()     
  })
})
