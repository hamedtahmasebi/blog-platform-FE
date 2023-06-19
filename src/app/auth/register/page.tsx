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
import { FormEvent } from 'react';

const page = () => {
    const handleRegister = (e: FormEvent) => {
        e.preventDefault();
        userApi.register({
            email: 'test@gmail.com',
            password: 'password',
            confirmPassword: 'password',
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
                    <Input placeholder="Email" />
                </FormControl>
                <FormControl isRequired>
                    <FormLabel>Password</FormLabel>
                    <Input placeholder="Password" type="password" />
                </FormControl>
                <FormControl isRequired>
                    <FormLabel>Confirm Password</FormLabel>
                    <Input placeholder="Confirm Password" type="password" />
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

export default page;
