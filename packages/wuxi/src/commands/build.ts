import { defineWuxtCommand } from '.'

export default defineWuxtCommand({
  meta: {
    name: 'build',
    usage: 'npx wuxi build [rootDir]',
    description: 'Build wuxt for production deployment',
  },
  invoke(args, options={}) {
    
  },
})