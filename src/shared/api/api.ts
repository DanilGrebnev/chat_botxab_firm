import ky from "ky"
import { consts } from "../consts"

export const api = ky.extend({
    retry: 0,
    cache: "no-cache",
    headers: {
        [consts.API_AUTH_HEADER as string]: consts.AUTH_API_TOKEN,
    },
    prefixUrl: consts.BASE_FETCH_URL,
})
