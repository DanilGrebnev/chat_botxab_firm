export const consts = {
    BASE_FETCH_URL: process.env.NEXT_PUBLIC_BASE_FETCH_URL as string, 
    AUTH_API_TOKEN: process.env.NEXT_PUBLIC_AUTH_API_TOKEN as string,
    API_AUTH_HEADER: process.env.NEXT_PUBLIC_API_AUTH_HEADER as string,
} as const
