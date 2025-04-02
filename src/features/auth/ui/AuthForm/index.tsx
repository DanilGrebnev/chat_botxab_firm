"use client"

import { Box } from "@/shared/ui/Box"
import { Input } from "@/shared/ui/Input"
import CloseIcon from "@/shared/assets/close.svg"

import s from "./s.module.css"
import { Text } from "@/shared/ui/Text"
import { Button } from "@/shared/ui/Button"
import { saveUserLogin } from "@/shared/api/user/loginApi"

type FormDTO = {
    email: string
    password: string
}

export const AuthForm = () => {
    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        const formData = new FormData(e.currentTarget)
        const data: Partial<FormDTO> = {}
        formData.forEach(
            (value, key) => (data[key as keyof FormDTO] = value as string)
        )

        saveUserLogin(data as Required<FormDTO>)
        
    }

    return (
        <Box
            padding='xl'
            className={s.container}
            border
            rounded='3'
            background='secondary'
        >
            <form
                onSubmit={onSubmit}
                className={s.body_form}
            >
                <div className={s.title}>
                    <Text fontSize='200'>Авторизация</Text>
                    <CloseIcon className={s.close_icon} />
                </div>

                <label
                    htmlFor='email'
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
                        name='email'
                        id='email'
                        required
                    />
                </label>
                <label
                    htmlFor='password'
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
                        name='password'
                        id='password'
                        required
                    />
                </label>
                <Button
                    type='submit'
                    size='m'
                    background='variant-2'
                    fullWidth
                    variant='outlined'
                >
                    <Text fontSize='160'>Войти</Text>
                </Button>
            </form>
        </Box>
    )
}
