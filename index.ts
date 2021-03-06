export type Log = (message: string, toLog?: any) => void
export type Logger = (namespace: string) => Log

/**
 * This function returns a namespaced log function.
 * The log function takes one argument and an optional second argument.
 *
 * @example
 *
 * import { Logger } from '@magikcraft/log'
 * const log = Logger('my_module')
 * log('A message')
 * log('Players:', players)
 *
 * @param namespace
 */
export const Logger = namespace => (msg: string, toLog?: any) => {
    const ns = `[${namespace.replace('/server/scriptcraft-plugins/', '')}] `
    const message = toLog ? `${ns} ${msg} ${toLog}` : `${ns} ${msg}`
    console.log(message) // tslint:disable-line
}
