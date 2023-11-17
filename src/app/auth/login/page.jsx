"use client";
import { useForm } from "react-hook-form";
import { signIn } from "next-auth/react";
import {useRouter} from 'next/navigation'
import {useState} from 'react'

function LoginPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const router = useRouter()
  const [error, setError] = useState(null)
  
  const onSubmit = handleSubmit(async (data) => {
    const res = await signIn("credentials", {
      email: data.email,
      password: data.password,
      redirect: false,
    });

    
    console.log(res)
    if (res.error) {
      setError(res.error)
    } else {
      router.push('/auth/users')
      router.refresh()
    }
  });

  return (
    <div className="bg-[url('/images/aprendematematicas.b50431b2.avif')] backdrop: backdrop-blur-3xl">
        <section className="h-screen w-full flex items-center justify-center">
          <div className="flex grid-flow-col grid-cols-1 rounded-2xl p-5 items-center justify-around shadow-2xl shadow-black w-4/6">
            <div className="px-5">
            <div className="flex justify-center items-center w-full">
            <form onSubmit={onSubmit} className="w-full">

                {error && (
                <p className="bg-red-500 text-lg text-white p-3 rounded mb-2 w-full">{error}</p>
                )}

                <h1 className="text-slate-200 font-bold text-4xl mb-4">Login</h1>

                <label htmlFor="email" className="text-white mb-2 block text-sm">
                Email:
                </label>
                <input
                type="email"
                {...register("email", {
                    required: {
                    value: true,
                    message: "Email is required",
                    },
                })}
                className="p-3 rounded mb-2 bg-white text-slate-300 w-full"
                placeholder="user@email.com"
                />

                {errors.email && (
                <span className="text-red-700 font-bold w-full">{errors.email.message}</span>
                )}

                <label htmlFor="password" className="text-white mb-2 block text-sm w-full">
                Password:
                </label>
                <input
                type="password"
                {...register("password", {
                    required: {
                    value: true,
                    message: "Password is required",
                    },
                })}
                className="p-3 rounded block mb-2 bg-white text-slate-300 w-full"
                placeholder="******"
                />

                {errors.password && (
                <span className="text-red-700 font-bold w-full">
                    {errors.password.message}
                </span>
                )}

                <span></span>

                <button className="w-full bg-blue-500 hover:bg-blue-800 duration-500 text-white p-3 rounded-lg mt-2">
                Login
                </button>
            </form>
            </div>
            </div>
            <div className="w-1/2">
                <img src="/images/logo-xl.png" alt="" />
            </div>
    </div>
    </section>
    </div>
  );
}
export default LoginPage;