module.exports = (name, directory, importPath) => `import '@/config/storybook/scaffold'
import { storiesOf } from '@storybook/vue'
import ${name} from '${importPath}/${name}.vue'
import dataset from '${importPath}/${name}.dataset'

const { props } = dataset

storiesOf('${directory}', module)
  .add('${name}', () => ({
    components: {
      ${name},
    },
    data: () => ({
    }),
    template: \`<${name}
    />\`,
  }))
`
