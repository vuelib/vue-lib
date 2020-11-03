import { VueWrapper } from '@vue/test-utils'
import { prepare, prepareShallow } from '@/config/jest/utils/prepare'
import cloneDeep from 'lodash/cloneDeep'
import Button from '@/components/Button/Button.vue'
import SvgIcon from '@/components/SvgIcon/SvgIcon.vue'
import dataset from '@/components/Button/Button.dataset'

const { props, slots } = dataset

let propsData: any
let wrapper: VueWrapper<any>

describe('Button', () => {

  beforeEach(() => {
    propsData = cloneDeep(props)
    wrapper = prepare(Button, { propsData, slots })
  })

  afterEach(() => {
    wrapper.unmount()
  })

  describe('Rendering', () => {

    it('should render component with the correct class size', () => {
      expect(wrapper.find('[data-button]').classes()).toContain(`button--${props.size}`)
    })

    it('should render component with the correct class type', () => {
      expect(wrapper.find('[data-button]').classes()).toContain(`button--${props.type}`)
    })

    it('should render component with the correct class outlined', () => {
      propsData.outlined = true
      wrapper = prepareShallow(Button, { propsData })
      expect(wrapper.find('[data-button]').classes()).toContain('button--outlined')
    })

    it('should render component with the correct class reversed', () => {
      propsData.reversed = true
      wrapper = prepareShallow(Button, { propsData })
      expect(wrapper.find('[data-button]').classes()).toContain('button--reversed')
    })

    it('should render component disabled', () => {
      propsData.disabled = true
      wrapper = prepareShallow(Button, { propsData })
      expect(wrapper.find('[data-button]').attributes('disabled')).toBe('')
    })

    it('should render component enabled', () => {
      expect(wrapper.find('[data-button]').attributes('disabled')).toBe(undefined)
    })

    it('should render SvgIcon', () => {
      expect(wrapper.findComponent(SvgIcon).exists()).toBeTruthy()
    })

    it('should render default slot', () => {
      expect(wrapper.find('[data-button]').text()).toEqual(slots.default)
    })
  })

  describe('Actions', () => {

    it('should emit click event on click component with payload', () => {
      wrapper.find('[data-button]').trigger('click')
      const event = wrapper.emitted().click as any
      expect(event[0][0] instanceof Event).toBeTrue()
    })
  })
})
