'use client';
import {
    AbsoluteCenter,
    Box,
    Button,
    Divider,
    FormControl,
    FormLabel,
    Heading,
    Input,
    Text,
    VStack,
} from '@chakra-ui/react';
import { userApi } from '@src/core/api/User';
import Link from 'next/link';
import { FormEventHandler } from 'react';

const Login = () => {
    const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.target as HTMLFormElement);
        const email = formData.get('email')?.toString();
        const password = formData.get('password')?.toString();
        console.log({
            email,
            password,
        });
        if (!email || !password) return;
        const res = await userApi.login({
            email,
            password,
        });
        console.log(res.data);
    };
    return (
        <VStack gap={8} w={'full'} alignItems={'stretch'}>
            <Heading
                as="h1"
                size={{
                    base: 'xl',
                    sm: '2xl',
                    md: '3xl',
                    lg: '4xl',
                }}
            >
                Login
            </Heading>
            <form onSubmit={handleSubmit} className="flex flex-col w-full gap-5">
                <FormControl isRequired>
                    <FormLabel>Email</FormLabel>
                    <Input placeholder="Email" />
                </FormControl>
                <FormControl isRequired>
                    <FormLabel>Password</FormLabel>
                    <Input placeholder="Password" type="password" />
                </FormControl>
                <Button type="submit" variant={'solid'} colorScheme="primary" size={'lg'} mt={5}>
                    Login
                </Button>
            </form>

            <Box position="relative">
                <Divider />
                <AbsoluteCenter bg="white" px="4">
                    <Text fontSize={{ sm: 'md' }} color={'gray.400'}>
                        Or
                    </Text>
                </AbsoluteCenter>
            </Box>
            <Link href={`/auth/register`}>
                <Button variant={'solid'} w={'full'} size={'lg'}>
                    Register
                </Button>
            </Link>
        </VStack>
    );
};

export default Login;
