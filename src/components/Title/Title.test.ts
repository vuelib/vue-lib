import { shallowMount, VueWrapper } from '@vue/test-utils'
import Title from '@/components/Title/Title.vue'
import config from '@/components/Title/Title.dataset'

let wrapper: VueWrapper<any>

const propsData = config.props

describe('[Title]', () => {

  beforeEach(() => {
    wrapper = shallowMount(Title, {
      propsData,
    })
  })

  afterEach(() => {
    wrapper.unmount()
  })

  describe('Props :', () => {

    it('should render props tag in .title class attribute', () => {
      const el = wrapper.find('.title')
      expect(el.classes()).toContain(`title--${propsData.tag}`)
    })
  })
})
