import { cyan, magenta } from 'colorette'
import type { WuxtCommandMeta } from '../commands'

export function showHelp(meta?: Partial<WuxtCommandMeta>) {
  const sections: string[] = []

  if(meta) {
    meta.usage && sections.push(`${magenta('> ')} Usage: ${cyan(meta.usage)}`)
    meta.description && sections.push(`${magenta('⋮ ')} ${meta.description}`)
  }

  sections.push(`Usage ${cyan('npx wuxi [command] --help')} to see help for each command`)

  console.log(sections.join('\n\n') + '\n')
}
