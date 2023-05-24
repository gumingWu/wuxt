import mri from 'mri'
import { showBanner } from './utils/banner'
import { type Command, type WuxtCommand, commands } from './commands'
import { red } from 'colorette'
import { showHelp } from './utils/help'

async function _main() {
  // ? 留个疑问，为什么这里不能直接process.argv，直接读出来的是undf
  // ? 用build可以，dev不行，区别是
  // ? build用的import(cliEntry.href)，dev用的是fork(fileURLToPath(cliEntry))
  const _argv = (process.env.__CLI_ARGV__ ? JSON.parse(process.env.__CLI_ARGV__) : process.argv).slice(2)
  const args = mri(_argv)
  console.log(args)

  const command = args._.shift() || 'usage'
  showBanner(command === 'dev' && !args.help)

  if(!(command in commands)) {
    console.log(`\n${red(`Invalid command ${command}`)}`)
    process.exit(1)
  }

  // TODO check node version

  const cmd = await commands[command as Command]() as WuxtCommand
  if(args.h || args.help) {
    showHelp(cmd.meta)
  } else {
    const result = await cmd.invoke(args)
    return result
  }
}

export function main() {
  _main().then(res => {
    if (res === 'error') {
      process.exit(1)
    } else if (res !== 'wait') {
      process.exit()
    }
  }).catch(err => {
    console.error(err)
    process.exit(1)
  })
}
