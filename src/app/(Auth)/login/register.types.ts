
import * as zod from 'zod'
import { LoginSchema } from './Register.schemas'

 export type LoginObjectType = zod.infer< typeof LoginSchema>