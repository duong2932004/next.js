'use client' // Sử dụng directive 'use client' để cho biết rằng mã này sẽ chạy trên client.

import { zodResolver } from '@hookform/resolvers/zod' // Import resolver từ zod để tích hợp với react-hook-form
import { useForm } from 'react-hook-form' // Import hook để sử dụng form
import { Button } from '@/components/ui/button' // Import component Button từ thư mục components
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form' // Import các thành phần form từ thư mục components
import { Input } from '@/components/ui/input' // Import thành phần Input từ thư mục components
import { RegisterBody, RegisterBodyType } from '@/schemaValidations/auth.schema' // Import schema và kiểu dữ liệu để xác thực form
import envConfig from '@/config' // Import cấu hình môi trường

const RegisterForm = () => {
    const form = useForm<RegisterBodyType>({
        resolver: zodResolver(RegisterBody), // Sử dụng zod để xác thực form
        defaultValues: {
            email: '',
            name: '',
            password: '',
            confirmPassword: ''
        }
    })

    async function onSubmit(values: RegisterBodyType) {
        const result = await fetch(`${envConfig.NEXT_PUBLIC_API_ENDPOINT}/auth/register`, {
            body: JSON.stringify(values),
            headers: { 'Content-Type': 'application/json' },
            method: 'POST'
        }).then((res) => res.json())
        console.log(result)
    }

    return (
        <Form {...form}>
            <form
                onSubmit={form.handleSubmit(onSubmit)}
                className='space-y-2 max-w-[600px] flex-shrink-0 w-full'
                noValidate
            >
                <FormField
                    control={form.control}
                    name='name'
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Tên</FormLabel>
                            <FormControl>
                                <Input placeholder='shadcn' type='text' {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name='email'
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Email</FormLabel> {/* Sửa lại label từ 'email' thành 'Email' */}
                            <FormControl>
                                <Input placeholder='shadcn' type='email' {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name='password'
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Mật khẩu</FormLabel>
                            <FormControl>
                                <Input placeholder='shadcn' type='password' {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name='confirmPassword'
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Nhập lại mật khẩu</FormLabel>
                            <FormControl>
                                <Input placeholder='shadcn' type='password' {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <Button type='submit' className='!mt-8 w-full'>
                    Đăng ký
                </Button>
            </form>
        </Form>
    )
}

export default RegisterForm
