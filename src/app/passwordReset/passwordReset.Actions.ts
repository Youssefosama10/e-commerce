'use server'

import { cookies } from 'next/headers'

type ActionResult = { success: boolean; message?: string }

const API_BASE = 'https://ecommerce.routemisr.com/api/v1/auth'

export async function forgotPasswordAction(email: string): Promise<ActionResult> {
  try {
    const res = await fetch(`${API_BASE}/forgotPasswords`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email }),
    })

    const data = await res.json()

    if (data.statusMsg === 'success') {
      const cookieStore = await cookies()
      cookieStore.set('resetEmail', email, {
        httpOnly: true,
        secure: true,
        sameSite: 'strict',
        maxAge: 60 * 60,
      })
      return { success: true }
    }

    return { success: false, message: data.message || 'Failed to send reset code' }
  } catch {
    return { success: false, message: 'Something went wrong. Please try again.' }
  }
}

export async function verifyResetCodeAction(resetCode: string): Promise<ActionResult> {
  try {
    const res = await fetch(`${API_BASE}/verifyResetCode`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ resetCode }),
    })

    const data = await res.json()

    if (data.status === 'Success') {
      return { success: true }
    }

    return { success: false, message: data.message || 'Invalid verification code' }
  } catch {
    return { success: false, message: 'Something went wrong. Please try again.' }
  }
}

export async function resetPasswordAction(newPassword: string): Promise<ActionResult> {
  try {
    const cookieStore = await cookies()
    const email = cookieStore.get('resetEmail')?.value

    if (!email) {
      return { success: false, message: 'Session expired. Please start the reset process again.' }
    }

    const res = await fetch(`${API_BASE}/resetPassword`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, newPassword }),
    })

    const data = await res.json()

    if (res.ok) {
      cookieStore.delete('resetEmail')
      return { success: true }
    }

    return { success: false, message: data.message || 'Failed to reset password' }
  } catch {
    return { success: false, message: 'Something went wrong. Please try again.' }
  }
}
