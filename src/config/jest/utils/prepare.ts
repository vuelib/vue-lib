// import Vue from 'vue'
// import i18n from '@/config/i18n'
import {
  VueWrapper,
  // VueClass,
  shallowMount,
  RouterLinkStub,
  // createLocalVue,
  // ShallowMountOptions,
} from '@vue/test-utils'

// export const localVue = createLocalVue()

// localVue(i18n)

export const mockedRouter = {
  push: jest.fn(),
  replace: jest.fn(),
}

// export default (component: VueClass<Vue>, options?: ShallowMountOptions<Vue>): VueWrapper<any> => shallowMount(component, {
export default (component: any, options?: any): VueWrapper<any> => shallowMount(component, {
  // localVue,
  stubs: {
    RouterLink: RouterLinkStub,
  },
  mocks: {
    $router: mockedRouter,
    $t: (key: string) => key,
  },
  ...options,
})
