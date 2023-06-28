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
import { AuthStore } from '@src/core/store/auth';
import Link from 'next/link';
import { FormEventHandler, useState } from 'react';

const Login = () => {
    const login = AuthStore((state) => state.login);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
        e.preventDefault();
        login({
            email,
            password,
        });
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
                    <Input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
                </FormControl>
                <FormControl isRequired>
                    <FormLabel>Password</FormLabel>
                    <Input
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Password"
                        type="password"
                    />
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
