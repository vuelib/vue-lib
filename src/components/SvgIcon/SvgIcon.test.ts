import { VueWrapper } from '@vue/test-utils'
import cloneDeep from 'lodash/cloneDeep'
import prepare from '@/config/jest/utils/prepare'
import SvgIcon from '@/components/SvgIcon/SvgIcon.vue'
import dataset from '@/components/SvgIcon/SvgIcon.dataset'

const { props } = dataset

let propsData: any
let wrapper: VueWrapper<any>

describe('SvgIcon', () => {

  beforeEach(() => {
    propsData = cloneDeep(props)
    wrapper = prepare(SvgIcon, { propsData })
  })

  afterEach(() => {
    wrapper.unmount()
  })

  describe('Rendering', () => {

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
