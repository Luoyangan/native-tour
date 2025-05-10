import { Context, Schema } from 'koishi'

export const name = 'native-tour'

export interface Config {}

export const Config: Schema<Config> = Schema.object({})

export function apply(ctx: Context) {
  // write your plugin here
  ctx.on('message', (session) => {
    if (session.content === '你是谁') {
      session.send('我是机器人')
    }
  })
}
