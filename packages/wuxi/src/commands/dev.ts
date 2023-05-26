import { resolve } from 'pathe'
import { defineWuxtCommand } from "."
import { loadKit } from '../utils/kit'

export default defineWuxtCommand({
  meta: {
    name: 'dev',
    usage: 'npx wuxi dev [rootDir] [--open, -o] [--port, -p]',
    description: 'Run wuxt development server',
  },
  async invoke(args, options={}) {
    process.env.NODE_ENV = 'development'

    // TODO 版本展示

    const rootDir = resolve(args._[0] || '.')

    await loadKit(rootDir)
  },
})
