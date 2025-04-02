export const getTime = (date: string) => {
    const time = new Date(date).toLocaleTimeString("ru-RU", {
        hour12: false,
        hour: "2-digit",
        minute: "2-digit",
    })

    return time
}
