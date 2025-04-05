import { AUTH_CREDENTIALS_STORAGE_KEY } from "./constants"

export type FormDTO = {
    email: string
    password: string
}

type ParseResult<T> =
    | { parsed: T; hasError: false; error?: undefined }
    | { parsed?: undefined; hasError: true; error?: unknown }

const REQUIRED_KEYS = new Set(["email", "password"])

const isFormDTO = (o: object): o is FormDTO => {
    const keys = Object.keys(o)
    if (keys.length !== REQUIRED_KEYS.size) {
        return false
    }
    return keys.every((key) => REQUIRED_KEYS.has(key))
}

const safeJsonParse =
    <T>(guard: (o: any) => o is T) =>
    (json: string): ParseResult<T> => {
        try {
            const parsedJson = JSON.parse(json)
            return guard(parsedJson)
                ? { parsed: parsedJson, hasError: false }
                : { hasError: true }
        } catch (error) {
            return { hasError: true, error }
        }
    }

export const saveUserLogin = (user: FormDTO) => {
    localStorage.setItem(AUTH_CREDENTIALS_STORAGE_KEY, JSON.stringify(user))
}

export const getUserLogin = () => {
    const storedLogin = localStorage.getItem(AUTH_CREDENTIALS_STORAGE_KEY)
    if (storedLogin) {
        const { hasError, error, parsed } =
            safeJsonParse(isFormDTO)(storedLogin)
        if (hasError) {
            throw new Error("parsing error", { cause: error })
        } else {
            return parsed
        }
    }
    return null
}

export const deleteUserLogin = () => {
    localStorage.removeItem(AUTH_CREDENTIALS_STORAGE_KEY)
}
