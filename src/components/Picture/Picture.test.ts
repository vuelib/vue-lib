import { VueWrapper } from '@vue/test-utils'
import { prepareShallow } from '@/config/jest/utils/prepare'
import cloneDeep from 'lodash/cloneDeep'
import Picture from '@/components/Picture/Picture.vue'
import dataset from '@/components/Picture/Picture.dataset'

const { props } = dataset

let propsData: any
let wrapper: VueWrapper<any>

describe('Picture', () => {

  beforeEach(() => {
    propsData = cloneDeep(props)
    wrapper = prepareShallow(Picture, { propsData })
  })

  afterEach(() => {
    wrapper.unmount()
  })

  describe('Rendering', () => {

    it('should render placeholder', () => {
      expect(wrapper.find('[data-placeholder]').exists()).toBeTrue()
    })

    it('should have src attribute equal to props placeholder if remote source', () => {
      const placeholder = 'http://placeholder.png'
      propsData.placeholder = placeholder
      wrapper = prepareShallow(Picture, { propsData })
      expect(wrapper.find('[data-placeholder]').attributes('src')).toEqual(placeholder)
    })

    it('should have alt attribute equal to props alt', () => {
      expect(wrapper.find('[data-image]').attributes('alt')).toEqual(props.alt)
    })

    it('should have data-url attribute equal to props src if remote source', () => {
      const src = 'http://desert.jpg'
      propsData.src = src
      wrapper = prepareShallow(Picture, { propsData })
      expect(wrapper.find('[data-image]').attributes('data-url')).toEqual(src)
    })
  })
})
