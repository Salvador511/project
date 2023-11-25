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
  const [isProfessor, setIsProfessor] = useState(false);
  
  const onSubmit = handleSubmit(async (data) => {
    const res = await signIn("credentials", {
      email: data.email,
      password: data.password,
      redirect: false,
      isprofessor: data.isprofessor,
      isprofessor: isProfessor,
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
    <div className="bg-[url('/images/background.avif')] h-full max-h-fit">
        <section className="h-full w-full flex items-center justify-center max-md:my-0">
          <div className="lg:flex lg:grid-flow-col lg:grid-cols-1 rounded-2xl p-5 items-center justify-around shadow-2xl shadow-black lg:w-4/6 max-md:w-full lg:m-10 max-md:m-10">
            <div className="px-5">
            <div className="flex max-md:grid max-md:grid-flow-row justify-center items-center w-full">
            <form onSubmit={onSubmit} className="w-full">

                {error && (
                <p className="bg-red-500 text-lg text-white p-3 rounded mb-2 w-full">{error}</p>
                )}

                <h1 className="text-slate-200 font-bold text-4xl mb-4 text-center">Ingresar</h1>

                <div className="md:hidden">
                    <img className="mx-auto w-2/6" src="/images/student.png" alt="" />
                </div>

                <label htmlFor="email" className="text-white mb-2 block text-sm">
                Correo electronico:
                </label>
                <input
                type="email"
                {...register("email", {
                    required: {
                    value: true,
                    message: "Email is required",
                    },
                })}
                className="p-3 rounded mb-2 bg-white text-black w-full placeholder:text-slate-400"
                placeholder="usuario@ejemplo.com"
                />

                {errors.email && (
                <span className="p-1 m-1 text-xs rounded-full bg-red-600 text-white font-bold w-full">{errors.email.message}</span>
                )}

                <label htmlFor="password" className="text-white my-2 block text-sm w-full">
                Contraseña:
                </label>
                <input
                type="password"
                {...register("password", {
                    required: {
                    value: true,
                    message: "Password is required",
                    },
                })}
                className="p-3 rounded block mb-2 bg-white text-black placeholder:text-slate-400 w-full"
                placeholder="******"
                />

                {errors.password && (
                <span className="p-1 m-1 text-xs rounded-full bg-red-600 text-white font-bold w-full">
                    {errors.password.message}
                </span>
                )}

                <label htmlFor="isprofessor" className="bg-orange-500 text-white mb-2 block text-sm w-full p-1 rounded-lg my-2">
                    <input
                      type="checkbox"
                      id="isprofessor"
                      {...register("isprofessor")}
                      className="mx-2"
                      checked={isProfessor}
                      onChange={() => setIsProfessor(!isProfessor)}
                    />
                    Si eres profesor selecciona esto
                  </label>
                  

                <button className="w-full bg-blue-800 hover:bg-blue-500 duration-500 text-white p-3 rounded-lg mt-2">
                Ingresar
                </button>
            </form>
            <div className="md:hidden">
                    <img src="/images/logo-xl.png" alt="" />
                </div>
            </div>
            </div> 
            <div className="max-md:hidden mx-auto w-1/2">
                <img src="/images/logo-xl.png" alt="" />
            </div>
    </div>
    </section>
    </div>
  );
}
export default LoginPage;