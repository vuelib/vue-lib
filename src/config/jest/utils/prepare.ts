import { ComponentPublicInstance, DefineComponent } from 'vue'
// import i18n from '@/config/i18n'
import {
  VueWrapper,
  // VueClass,
  shallowMount,
  mount,
  RouterLinkStub,
  // createLocalVue,
  // ShallowMountOptions,
} from '@vue/test-utils'
import { GlobalMountOptions } from '@vue/test-utils/dist/types.d'

// export const localVue = createLocalVue()

// localVue(i18n)

export const mockedRouter = {
  push: jest.fn(),
  replace: jest.fn(),
}

// export default (component: VueClass<Vue>, options?: ShallowMountOptions<Vue>): VueWrapper<any> => shallowMount(component, {
export const prepareShallow = (
  component: DefineComponent,
  // component: ReturnType<typeof defineComponent>,
  options?: any,
): VueWrapper<ComponentPublicInstance> => shallowMount(component, {
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

export const prepare = (
  component: DefineComponent,
  options?: any,
): VueWrapper<ComponentPublicInstance> => mount(component, {
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
