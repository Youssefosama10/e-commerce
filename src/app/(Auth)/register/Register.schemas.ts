import * as zod from 'zod'
 export const RegisterSchema = zod.object({
  name: zod
    .string()
    .min(3, 'Full Name must be at least 3 characters')
    .max(20, 'Full Name must be maximum 20 characters'),
  email: zod.email('Email is invalid').nonempty('Email is required'),
  phone: zod
    .string()
    .regex(/^(010|011|012|015)[0-9]{8}$/, 'The phone number must be Egyptian.'),
  password: zod
    .string()
    .nonempty('password is required ')
    .regex(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
      'Invalid password format. Please follow the required rules.'
    ),
  rePassword: zod
    .string()
    .nonempty('Repassword is requird')
    .regex(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
      'Invalid password format. Please follow the required rules.'
    ),
}).refine(
  function (obj) {
    return obj.password === obj.rePassword
  },
  { path: ['rePassword'], error: 'passwords are inmatch' }
)