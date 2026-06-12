
import * as zod from 'zod'
import { LoginSchema } from './login.schemas'

 export type LoginObjectType = zod.infer< typeof LoginSchema>