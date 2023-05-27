import { tryResolveModule, importModule } from "./esm";

export async function loadKit(rootDir: string) {
  try {
    const localKit = await tryResolveModule('kit', rootDir)
    const rootUrl = localKit ? rootDir : await tryResolveNuxt()
    console.log(rootUrl)
    // await importModule('kit', rootUrl)
  } catch(e) {
    throw new Error(e)
  }
}

async function tryResolveNuxt () {
  for (const pkg of ['nuxt3']) {
    const path = await tryResolveModule(pkg)
    if (path) { return path }
  }
  return null
}
