import { bold, gray } from 'colorette'
import { version } from '../../package.json'
import clear from 'clear'

export function showBanner(_clear: boolean = false) {
  _clear && clear()
  console.log(gray(`Wuxi ${bold(version)}`))
}

// export function showVersion(cwd: string) {

// }
