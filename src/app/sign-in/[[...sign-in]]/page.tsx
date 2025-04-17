import { SignIn } from '@clerk/nextjs'

export default function Page() {
    return (
        <div className='min-h-[calc(100vh-64px)] flex justify-center items-center'>

            <SignIn />
        </div>
    )
}