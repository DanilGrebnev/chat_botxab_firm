import { Box } from "@/shared/ui/Box"
import { Input } from "@/shared/ui/Input"
import CloseIcon from "@/shared/assets/close.svg"

import s from "./s.module.css"
import { Text } from "@/shared/ui/Text"
import { Button } from "@/shared/ui/Button"

export const AuthForm = () => {
    return (
        <Box
            padding='xl'
            className={s.container}
            border
            rounded='3'
            background='secondary'
        >
            <div className={s.body_form}>
                <div className={s.title}>
                    <Text fontSize='200'>Авторизация</Text>
                    <CloseIcon className={s.close_icon} />
                </div>

                <label
                    htmlFor='email_auth'
                    className={s.input_field}
                >
                    <Text
                        fontWeight='normal'
                        fontSize='140'
                        tag='span'
                    >
                        E-Mail
                    </Text>
                    <Input
                        className={s.input}
                        placeholder='Ваш E-Mail'
                        type='email'
                        sizes='m'
                        name='email_auth'
                        id='email_auth'
                    />
                </label>
                <label
                    htmlFor='password_auth'
                    className={s.input_field}
                >
                    <Text
                        fontWeight='normal'
                        fontSize='140'
                        tag='span'
                    >
                        Пароль
                    </Text>
                    <Input
                        className={s.input}
                        placeholder='Ваш пароль'
                        type='password'
                        sizes='m'
                        name='password_auth'
                        id='password_auth'
                    />
                </label>
                <Button
                    size='m'
                    background='variant-2'
                    fullWidth
                    variant='outlined'
                >
                    <Text fontSize='160'>Войти</Text>
                </Button>
            </div>
        </Box>
    )
}
