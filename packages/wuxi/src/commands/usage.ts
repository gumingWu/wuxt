import { commands, defineWuxtCommand } from '.'
import { cyan } from 'colorette'
import { showHelp } from '../utils/help'

export default defineWuxtCommand({
  meta: {
    name: 'help',
    usage: 'wuxt help',
    description: 'Show help'
  },
  invoke(args, options) {
    const sections: string[] = []

    sections.push(`Usage ${cyan(`npx wuxi ${Object.keys(commands).join('|')} [args]`)}`)
    console.log(sections.join('\n\n') + '\n')

    showHelp()
  },
})