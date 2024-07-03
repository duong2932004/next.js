import RegisetrForm from '@/app/(auth)/register/register-form'

const RegisetrPage = () => {
    return (
        <>
            <h1 className='text-xl font-semibold text-center'>Đăng ký</h1>
            <div className='flex justify-center'>
                <RegisetrForm />
            </div>
        </>
    )
}
export default RegisetrPage
