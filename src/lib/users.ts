import type { User }  from "@auth/core/types"
import { createHash } from "node:crypto"

export const generateUserId = (user: User) => {
    if (!user.email) throw new Error("User email is requierd")
    return createHash('sha256').update(user.email).digest('hex')
}