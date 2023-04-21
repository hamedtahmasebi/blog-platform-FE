type Params = {
    token: string
}

export default async function Post({ params }: { params: Params }) {
    return <div>token is {params.token}</div>
}
