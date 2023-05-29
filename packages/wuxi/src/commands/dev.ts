import { resolve } from 'pathe'
import { defineWuxtCommand } from "."
import { loadKit } from '../utils/kit'
import type { RequestListener } from 'node:http'
import { importModule } from '../utils/esm'

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

    const { loadNuxt } = await loadKit(rootDir)
    loadNuxt()

    // 服务器加载
    const { listen } = await import('listhen')
    const { toNodeListener } = await import('h3')
    let currentHandler: RequestListener | undefined
    let loadingMessage = 'Wuxt is starting...'
    const loadingHandler: RequestListener = async (_req, res) => {
      const { loading: loadingTemplate } = await importModule('@nuxt/ui-templates')
      res.setHeader('Content-Type', 'text/html; charset=UTF-8')
      res.statusCode = 503  // ? Why
      res.end(loadingTemplate({ loading: loadingMessage }))
    }
    const serverHandler: RequestListener = (req, res) => {
      return currentHandler ? currentHandler(req, res) : loadingHandler(req, res)
    }
    const listenrer = await listen(serverHandler, {
      showURL: true
    })

    const load = async (isRestart: boolean, reason?: string) => {
      
    }
  },
})
