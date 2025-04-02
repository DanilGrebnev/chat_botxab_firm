
export const saveUserLogin = (user: { email: string; password: string }) => {
    const storedLogins = localStorage.getItem("userLogins")
    const userLogins = storedLogins
        ? new Map(JSON.parse(storedLogins))
        : new Map()
    if (!userLogins.has(user.email)) {
        userLogins.set(user.email, user.password)
        localStorage.setItem(
            "userLogins",
            JSON.stringify(Array.from(userLogins.entries()))
        )
    }
}
