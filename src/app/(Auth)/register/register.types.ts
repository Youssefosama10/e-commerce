import { RegisterSchema } from "./Register.schemas";
import * as zod from 'zod'

 export type RegisterObjectType = zod.infer< typeof RegisterSchema>