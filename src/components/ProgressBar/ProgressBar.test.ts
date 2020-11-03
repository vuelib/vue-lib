import { VueWrapper } from '@vue/test-utils'
import { prepareShallow } from '@/config/jest/utils/prepare'
import cloneDeep from 'lodash/cloneDeep'
import ProgressBar from '@/components/ProgressBar/ProgressBar.vue'
import dataset from '@/components/ProgressBar/ProgressBar.dataset'

const { props } = dataset

let propsData: any
let wrapper: VueWrapper<any>

describe('ProgressBar', () => {

  beforeEach(() => {
    propsData = cloneDeep(props)
    wrapper = prepareShallow(ProgressBar, { propsData })
  })

  afterEach(() => {
    wrapper.unmount()
  })

  describe('Rendering', () => {

    it('should have a progression style equal to props progression', () => {
      expect((wrapper.find('[data-progression]').element as HTMLElement).style.width).toEqual(`${props.progression}%`)
    })
  })
})
