import { VueWrapper } from '@vue/test-utils'
import { prepareShallow } from '@/config/jest/utils/prepare'
import cloneDeep from 'lodash/cloneDeep'
import SvgIcon from '@/components/SvgIcon/SvgIcon.vue'
import dataset from '@/components/SvgIcon/SvgIcon.dataset'

const { props } = dataset

let propsData: any
let wrapper: VueWrapper<any>

describe('SvgIcon', () => {

  beforeEach(() => {
    propsData = cloneDeep(props)
    wrapper = prepareShallow(SvgIcon, { propsData })
  })

  afterEach(() => {
    wrapper.unmount()
  })

  describe('Rendering', () => {

    it('should render props types in .svg-icon class attributes', () => {
      expect(wrapper.find('[data-svg]').classes()).toContain(`svg-icon--${props.type}`)
    })

    it('should render href attributes in data-use', () => {
      expect(wrapper.find('[data-use]').attributes('href')).toEqual(`#icon-${props.icon}`)
    })
  })
})
