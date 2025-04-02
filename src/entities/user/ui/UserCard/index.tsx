import cn from "@/shared/lib/cn"
import { Box } from "@/shared/ui/Box"
import { UserProfileIcon } from "@/shared/ui/UserProfileIcon"
import OutIcon from "@/shared/assets/out-icon.svg"
import { Text } from "@/shared/ui/Text"
import s from "./user-card.module.css"

interface UserCardProps {
    className?: string
}

export const UserCard = (props: UserCardProps) => {
    const { className } = props

    return (
        <Box
            border
            rounded='2'
            padding='normal'
            className={cn(s.card, className)}
        >
            <UserProfileIcon className={s.user_icon} />
            <Text>Василий</Text>
            <Text>9 012 TKN</Text>
            <OutIcon className={s.out_icon} />
        </Box>
    )
}
