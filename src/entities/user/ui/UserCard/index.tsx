"use client"
import cn from "@/shared/lib/cn"
import { Box } from "@/shared/ui/Box"
import { UserProfileIcon } from "@/shared/ui/UserProfileIcon"
import OutIcon from "@/shared/assets/out-icon.svg"
import { Text } from "@/shared/ui/Text"
import s from "./user-card.module.css"
import { deleteUserLogin } from "@/shared/api/user/loginApi"
import { CircleButton } from "@/shared/ui/CircleButton"
import { useRouter } from "next/navigation"
import {
    useGetUserProfile,
    useUserLogoutMutation,
} from "@/shared/api/user/loginApiHooks"

interface UserCardProps {
    className?: string
}

const UserCard = (props: UserCardProps) => {
    const { className } = props
    const router = useRouter()
    const { data } = useGetUserProfile()
    const { mutate } = useUserLogoutMutation()
    const email = data?.email ?? undefined
    const nickname = email?.substring(0, email.indexOf("@"))

    const onCLick = () => {
        mutate()
    }

    return (
        <Box
            border
            rounded='2'
            padding='normal'
            className={cn(s.card, className)}
        >
            <UserProfileIcon className={s.user_icon} />
            <Text>{nickname ?? "Василий"}</Text>
            <Text>9 012 TKN</Text>
            <CircleButton
                onClick={onCLick}
                className={s.out_btn}
            >
                <OutIcon />
            </CircleButton>
        </Box>
    )
}
export default UserCard
