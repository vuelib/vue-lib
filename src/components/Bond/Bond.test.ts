// import { VueWrapper } from '@vue/test-utils'
import { RouterLinkStub, VueWrapper, shallowMount } from '@vue/test-utils'
import cloneDeep from 'lodash/cloneDeep'
import Bond from '@/components/Bond/Bond.vue'
import prepare from '@/config/jest/utils/prepare'
import dataset from '@/components/Bond/Bond.dataset'

const { props } = dataset

let propsData: any
let wrapper: VueWrapper<any>

describe('Bond', () => {

  beforeEach(() => {
    propsData = cloneDeep(props)
    wrapper = prepare(Bond, { propsData })
  })

  afterEach(() => wrapper.unmount())

  describe('Bond styling', () => {

    it('should render component with the correct class type', () => {
      expect(wrapper.find('[data-bond]').classes()).toContain(`bond--${props.type}`)
    })

    it('should render component with class reversed', () => {
      propsData.reversed = true
      wrapper = prepare(Bond, { propsData })
      expect(wrapper.find('[data-bond]').classes()).toContain('bond--reversed')
    })
  })

  describe('External link', () => {
    const href = '/disney-land'

    beforeEach(async () => {
      propsData.to = href
      wrapper = prepare(Bond, { propsData })
    })

    it('should render a native <a> tag for external url', () => {
      expect(wrapper.find('a').exists()).toBeTrue()
    })

    it('should pass right href to <a> tag', () => {
      expect(wrapper.find('a').attributes().href).toBe(href)
    })

    it('should open external link in new tab', () => {
      expect(wrapper.find('a').attributes().target).toBe('_blank')
    })

    it('isExternal: should be true', () => {
      expect(wrapper.vm.isExternal).toBeTrue()
    })
  })

  describe('Internal link', () => {
    const route = { name: 'disneyLand', path: '/disney-land' }

    beforeEach(async () => {
      propsData.to = route
      wrapper = prepare(Bond, { propsData })
      // wrapper = shallowMount(Bond, {
      //   propsData,
      //   stubs: {
      //     RouterLink: '<router-link></router-link>',
      //   },
      // })
    })

    // it('should render a <router-link> tag for internal url', () => {
    //   expect(wrapper.findComponent(RouterLinkStub).exists()).toBeTrue()
    // })

    // it('should pass right prop to <router-link> tag', () => {
    //   expect(wrapper.findComponent(RouterLinkStub).props().to).toBe(route)
    // })

    it('isExternal: should be false', () => {
      expect(wrapper.vm.isExternal).toBeFalse()
    })
  })
})
