import Profile from '@/app/me/profile'
import envConfig from '@/config'
import { cookies } from 'next/headers'

export default async function MeProfile() {
    const cookieStore = cookies()
    const sessionToken = cookieStore.get('sessionToken')
    console.log(sessionToken)

    const result = await fetch(`${envConfig.NEXT_PUBLIC_API_ENDPOINT}/account/me`, {
        headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${sessionToken?.value}` }
    }).then(async (res) => {
        const payload = await res.json()
        const data = {
            status: res.status,
            payload
        }
        if (!res.ok) {
            throw data
        }
        return data
    })
    return (
        <>
            xin chào {result.payload.data.name}
            <Profile />
        </>
    )
}
