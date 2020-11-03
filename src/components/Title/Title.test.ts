import { VueWrapper } from '@vue/test-utils'
import { prepare } from '@/config/jest/utils/prepare'
import cloneDeep from 'lodash/cloneDeep'
import Title from '@/components/Title/Title.vue'
import dataset from '@/components/Title/Title.dataset'

const { props, slots } = dataset

let propsData: any
let wrapper: VueWrapper<any>

describe('Title', () => {

  beforeEach(() => {
    propsData = cloneDeep(props)
    wrapper = prepare(Title, {
      propsData,
      slots,
    })
  })

  afterEach(() => {
    wrapper.unmount()
  })

  describe('Rendering', () => {

    it('should render the correct html tag', () => {
      expect(wrapper.find(props.tag).exists()).toBeTrue()
    })

    it('should render the correct default slot', () => {
      expect(wrapper.find('[data-title]').text()).toEqual(slots.default)
    })

    it('should render props tag in .title class attribute', () => {
      expect(wrapper.find('[data-title]').classes()).toContain(`title--${propsData.tag}`)
    })
  })
})
