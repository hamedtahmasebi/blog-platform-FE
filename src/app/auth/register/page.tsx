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
import { DOMAttributes, useState } from 'react';

const Register = () => {
    const { register } = AuthStore((s) => ({ register: s.register })); // this only rerenders if register changes
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const handleRegister: DOMAttributes<HTMLFormElement>['onSubmit'] = (e) => {
        e.preventDefault();
        register({
            email,
            password,
            confirmPassword,
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
                Register
            </Heading>
            <form onSubmit={handleRegister} className="flex flex-col w-full gap-5">
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
                <FormControl isRequired>
                    <FormLabel>Confirm Password</FormLabel>
                    <Input
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        placeholder="Confirm Password"
                        type="password"
                    />
                </FormControl>
                <Button type="submit" variant={'solid'} colorScheme="primary" size={'lg'} mt={5}>
                    Register
                </Button>
            </form>

            <Box position="relative">
                <Divider />
                <AbsoluteCenter bg="white" px="4">
                    <Text fontSize={{ sm: 'md' }} color={'gray.400'}>
                        Already have an account?
                    </Text>
                </AbsoluteCenter>
            </Box>
            <Link href={`/auth/login`}>
                <Button variant={'solid'} w={'full'} size={'lg'}>
                    Login
                </Button>
            </Link>
        </VStack>
    );
};

export default Register;
