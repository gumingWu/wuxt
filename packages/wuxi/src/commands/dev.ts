import { defineWuxtCommand } from "."

export default defineWuxtCommand({
  meta: {
    name: 'dev',
    usage: 'npx wuxi dev [rootDir] [--open, -o] [--port, -p]',
    description: 'Run wuxt development server',
  },
  invoke(args, options={}) {
    
  },
})
