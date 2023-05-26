import { tryResolveModule, importModule } from "./esm";

export async function loadKit(rootDir: string) {
  try {
    const localKit = await tryResolveModule('kit', rootDir)
    const rootUrl = localKit ? rootDir : await tryResolveModule('wuxt') || rootDir
    await importModule('kit', rootUrl)
  } catch(e) {
    throw new Error(e)
  }
}
