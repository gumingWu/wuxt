// This file is used to wrap the CLI entrypoint in a restartable process.

if(process.argv[2] === 'dev') {
  startSubprocess()
} else {
  console.log('not dev')
}

function startSubprocess() {
  console.log('im dev')
}