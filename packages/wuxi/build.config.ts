import { defineBuildConfig } from 'unbuild'

export default defineBuildConfig({
  entries: [
    'src/cli-wrapper',
    'src/cli-run'
  ]
})
