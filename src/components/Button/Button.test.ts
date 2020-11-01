import { VueWrapper } from '@vue/test-utils'
import cloneDeep from 'lodash/cloneDeep'
import prepare from '@/config/jest/utils/prepare'
import Button from '@/components/Button/Button.vue'
import dataset from '@/components/Button/Button.dataset'

const { props } = dataset

let propsData: any
let wrapper: VueWrapper<any>

describe('Button', () => {

  beforeEach(() => {
    propsData = cloneDeep(props)
    wrapper = prepare(Button, { propsData })
  })

  afterEach(() => {
    wrapper.unmount()
  })

  describe('Test', () => {

    it('should test something', () => {
      /* expect... */
    })
  })
})
