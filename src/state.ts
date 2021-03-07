import { proxy, useProxy } from 'valtio'

export const page = proxy({ value: "welcome" as "welcome" | "signIn" | "signInVerify" | "reserve" })