import { VueWrapper } from '@vue/test-utils'
import { prepareShallow } from '@/config/jest/utils/prepare'
// import { RouterLinkStub, VueWrapper, shallowMount } from '@vue/test-utils'
import cloneDeep from 'lodash/cloneDeep'
import Bond from '@/components/Bond/Bond.vue'
import dataset from '@/components/Bond/Bond.dataset'
import SvgIcon from '@/components/SvgIcon/SvgIcon.vue'

const { props } = dataset

let propsData: any
let wrapper: VueWrapper<any>

describe('Bond', () => {

  beforeEach(() => {
    propsData = cloneDeep(props)
    wrapper = prepareShallow(Bond, { propsData })
  })

  afterEach(() => wrapper.unmount())

  describe('Rendering', () => {

    it('should render component with the correct class type', () => {
      expect(wrapper.find('[data-bond]').classes()).toContain(`bond--${props.type}`)
    })

    it('should render component with class reversed', () => {
      propsData.reversed = true
      wrapper = prepareShallow(Bond, { propsData })
      expect(wrapper.find('[data-bond]').classes()).toContain('bond--reversed')
    })

    it('should render SvgIcon', () => {
      expect(wrapper.findComponent(SvgIcon).exists()).toBeTruthy()
    })
  })

  describe('External link', () => {
    const href = '/disney-land'

    beforeEach(async () => {
      propsData.to = href
      wrapper = prepareShallow(Bond, { propsData })
    })

    describe('Rendering', () => {

      it('should render a native <a> tag for external url', () => {
        expect(wrapper.find('a').exists()).toBeTrue()
      })

      it('should pass right href to <a> tag', () => {
        expect(wrapper.find('a').attributes().href).toBe(href)
      })

      it('should open external link in new tab', () => {
        expect(wrapper.find('a').attributes().target).toBe('_blank')
      })
    })

    describe('Computed', () => {

      it('isExternal: should be true', () => {
        expect(wrapper.vm.isExternal).toBeTrue()
      })

      it('routeVue: should return null', () => {
        expect(wrapper.vm.routeVue).toBe(null)
      })
    })
  })

  describe('Internal link', () => {
    const route = { name: 'title', path: '/title' }

    beforeEach(async () => {
      propsData.to = route
      wrapper = prepareShallow(Bond, { propsData })

      // wrapper.setProps({ to: route })

      // wrapper = prepareShallow(Bond, {
      //   propsData,
      //   stubs: {
      //     RouterLink: '<router-link></router-link>',
      //   },
      // })
    })

    // describe('Rendering', () => {

    //   it('should render a <router-link> tag for internal url', () => {
    //     expect(wrapper.findComponent(RouterLinkStub).exists()).toBeTrue()
    //   })

    //   it('should pass right prop to <router-link> tag', () => {
    //     expect(wrapper.findComponent(RouterLinkStub).props().to).toBe(route)
    //   })
    // })

    describe('Computed', () => {

      it('isExternal: should be false', () => {
        expect(wrapper.vm.isExternal).toBeFalse()
      })

      it('routeVue: should return null', () => {
        expect(wrapper.vm.routeVue.path).toBe(route.path)
      })
    })
  })
})
