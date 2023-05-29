import { tryResolveModule, importModule } from "./esm";

export async function loadKit(rootDir: string) {
  try {
    const localKit = await tryResolveModule('kit', rootDir)
    console.log(localKit)
    const rootUrl = localKit ? rootDir : await tryResolveWuxt()
    console.log(rootUrl)
    return await importModule('kit', rootUrl)
  } catch(e) {
    throw new Error(e)
  }
}

async function tryResolveWuxt () {
  for (const pkg of ['wuxt']) {
    const path = await tryResolveModule(pkg)
    if (path) { return path }
  }
  return null
}
