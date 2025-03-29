type TCNArgs = string | { [key: string]: boolean | undefined } | undefined

export const cn = (...args: TCNArgs[]) => {
    if (!args.length) return ""

    return args
        .reduce((resArr: string[], cls) => {
            if (typeof cls === "string") {
                resArr.push(cls)
            } else {
                for (const clsKey in cls) {
                    if (!!cls[clsKey]) resArr.push(clsKey)
                }
            }
            return resArr
        }, [])
        .join(" ")
}

export default cn
