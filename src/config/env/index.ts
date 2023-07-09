import { Module } from 'module'

export interface IENV {
  nodeEnv?: string
  isProdMode: boolean
  isDevMode: boolean

  appConfig: {
    API_URL: string
  }
}

const nodeEnv = process.env.NODE_ENV

const isProdMode: boolean = nodeEnv === 'production'
const isDevMode: boolean = nodeEnv === 'development'

const jsonFilePath: string = `./${nodeEnv || 'development'}.json`
const appConfig = await import(/* @vite-ignore */ jsonFilePath).then(
  (module: { default: IENV['appConfig'] }) => {
    return module.default
  }
)

export const ENV = Object.freeze({
  nodeEnv,
  isProdMode,
  isDevMode,

  appConfig
})
