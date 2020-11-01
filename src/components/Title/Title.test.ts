import { VueWrapper } from '@vue/test-utils'
import cloneDeep from 'lodash/cloneDeep'
import Title from '@/components/Title/Title.vue'
import prepare from '@/config/jest/utils/prepare'
import dataset from '@/components/Title/Title.dataset'

const { props } = dataset

let propsData: any
let wrapper: VueWrapper<any>

describe('Title', () => {

  beforeEach(() => {
    propsData = cloneDeep(props)
    wrapper = prepare(Title, { propsData })
  })

  afterEach(() => {
    wrapper.unmount()
  })

  describe('Props :', () => {

    it('should render props tag in .title class attribute', () => {
      const el = wrapper.find('.title')
      expect(el.classes()).toContain(`title--${propsData.tag}`)
    })
  })
})
