import { shallowMount, VueWrapper } from '@vue/test-utils'
import SvgIcon from '@/components/SvgIcon/SvgIcon.vue'
import config from '@/components/SvgIcon/SvgIcon.dataset'

let wrapper: VueWrapper<any>

const propsData = config.props

describe('[SvgIcon]', () => {

  beforeEach(() => {
    wrapper = shallowMount(SvgIcon, {
      propsData,
    })
  })

  afterEach(() => {
    wrapper.unmount()
  })

  describe('Props', () => {

    it('should render props types in .svg-icon class attributes', () => {
      const svgIcon = wrapper.find('.svg-icon')
      let classTypes = ''
      for (const type of propsData.type.split(' ')) classTypes += ` svg-icon--${type}`
      expect(svgIcon.attributes('class')).toEqual(`svg-icon ${classTypes.substr(1)}`)
    })

    it('should render props icon in .cta__content xlink:href attributes', () => {
      const content = wrapper.find('.svg-icon__content')
      expect(content.attributes('href')).toEqual(`#icon-${propsData.icon}`)
    })
  })
})
