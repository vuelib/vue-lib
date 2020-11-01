import { VueWrapper } from '@vue/test-utils'
import cloneDeep from 'lodash/cloneDeep'
import prepare from '@/config/jest/utils/prepare'
import ProgressBar from '@/components/ProgressBar/ProgressBar.vue'
import dataset from '@/components/ProgressBar/ProgressBar.dataset'

const { props } = dataset

let propsData: any
let wrapper: VueWrapper<any>

describe('ProgressBar', () => {

  beforeEach(() => {
    propsData = cloneDeep(props)
    wrapper = prepare(ProgressBar, { propsData })
  })

  afterEach(() => {
    wrapper.unmount()
  })

  describe('Progression', () => {

    it('should have a progression style equal to props progression', () => {
      expect((wrapper.find('[data-progression]').element as HTMLElement).style.width).toEqual(`${props.progression}%`)
    })
  })
})
