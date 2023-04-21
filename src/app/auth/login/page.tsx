'use client';
import { useLoginMutation } from '@src/core/api/gql/hooks';
import { Alert, Button, Form, Input } from 'antd';
import { graphqlClient } from '@src/core/api/graphql-client';
import { useRouter } from 'next/navigation';

function Page() {
    const [form] = Form.useForm();
    const router = useRouter();
    const { mutateAsync, error, isLoading } = useLoginMutation(graphqlClient);

    const onSubmitLogin = async (values: any) => {
        console.log('Running', { values });
        if (!values?.email || !values?.password) return;
        const { email, password } = values;
        const { login } = await mutateAsync({
            body: {
                email,
                password,
            },
        });
        if (login) return router.push('/');
    };

    return (
        <div>
            <h2 className="text-5xl font-bold text-center mb-8">Login</h2>
            {error?.response?.errors[0].message && (
                <Alert type="error" message={error.response.errors[0].message as string} />
            )}
            <Form onFinish={onSubmitLogin} form={form} layout="vertical">
                <Form.Item name="email" label={'Email'}>
                    <Input placeholder="Email" size="large" />
                </Form.Item>
                <Form.Item name="password" label={'Password'}>
                    <Input placeholder="Password" size="large" />
                </Form.Item>
                <Button
                    htmlType="submit"
                    loading={isLoading}
                    type="primary"
                    size="large"
                    className="w-full font-semibold text-lg"
                >
                    Login
                </Button>
            </Form>
        </div>
    );
}

export default Page;
