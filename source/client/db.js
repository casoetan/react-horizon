import Horizon from '@horizon/client'

const hz = Horizon({
  secure: true
})

hz.connect()

export default hz

export const todoHz = hz('todos')
