module.exports = (name, importPath) => `import { VueWrapper } from '@vue/test-utils'
import cloneDeep from 'lodash/cloneDeep'
import prepare from '@/config/jest/utils/prepare'
import ${name} from '${importPath}/${name}.vue'
import dataset from '${importPath}/${name}.dataset'

const { props } = dataset

let propsData: any
let wrapper: VueWrapper<any>

describe('${name}', () => {

  beforeEach(() => {
    propsData = cloneDeep(props)
    wrapper = prepare(${name}, { propsData })
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
`
