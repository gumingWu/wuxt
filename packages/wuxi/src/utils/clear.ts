export function clear() {
  process.stdout.write('\x1b[0f')
}
