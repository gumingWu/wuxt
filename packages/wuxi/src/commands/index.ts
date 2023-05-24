import type { Argv } from 'mri'

const _rDefault = (r: any) => r.default || r

export const commands = {
  dev: () => import('./dev').then(_rDefault),
  build: () => import('./build').then(_rDefault),
  usage: () => import('./usage').then(_rDefault),
}

export type Command = keyof typeof commands

export interface WuxtCommandMeta {
  name: string
  usage: string
  description: string
  [key: string]: any
}

export type CliInvokeResult = void | 'error' | 'wait'

export interface WuxtCommand {
  meta: WuxtCommandMeta
  invoke: (args: Argv, options?: Record<string, any>) => Promise<CliInvokeResult> | CliInvokeResult
}

export function defineWuxtCommand(command: WuxtCommand) {
  return command
}
