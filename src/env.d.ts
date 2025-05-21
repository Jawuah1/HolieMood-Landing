/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly FORMSUBMIT_KEY: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
