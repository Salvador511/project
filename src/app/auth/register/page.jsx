"use client";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";

function RegisterPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const router = useRouter();

  const onSubmit = handleSubmit(async (data) => {
    if (data.password !== data.confirmPassword) {
      return alert("Passwords do not match");
    }

    const res = await fetch("/api/auth/register", {
      method: "POST",
      body: JSON.stringify({
        firstname: data.firstname,
        lastname: data.lastname, 
        email: data.email,
        password: data.password,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (res.ok) {
      router.push("/auth/login");
    }
  });

  console.log(errors);

  return (
    <div className="bg-[url('/images/aprendematematicas.b50431b2.avif')] backdrop: backdrop-blur-3xl">
        <section className="h-screen w-full flex items-center justify-center">
          <div className="flex grid-flow-col grid-cols-1 rounded-2xl p-5 items-center justify-around shadow-2xl shadow-black w-4/6">
            <div className="px-5">
            <div className="flex justify-center items-center w-full">
      <form onSubmit={onSubmit} className="">
        <h1 className="text-slate-200 font-bold text-4xl mb-4">Register</h1>

        <label htmlFor="firstname" className="text-slate-500 mb-2 block text-sm">
          FirstName:
        </label>
        <input
          type="text"
          {...register("firstname", {
            required: {
              value: true,
              message: "firstName is required",
            },
          })}
          className="p-3 rounded block mb-2 bg-slate-900 text-slate-300 w-full"
          placeholder="yourFirstName"
        />

        {errors.firstName && (
          <span className="text-red-500 text-xs">
            {errors.firstname.message}
          </span>
        )}

        <label htmlFor="lastname" className="text-slate-500 mb-2 block text-sm">
          LastName:
        </label>
        <input
          type="text"
          {...register("lastname", {
            required: {
              value: true,
              message: "LastName is required",
            },
          })}
          className="p-3 rounded block mb-2 bg-slate-900 text-slate-300 w-full"
          placeholder="yourLastName"
        />

        {errors.lastName && (
          <span className="text-red-500 text-xs">
            {errors.lastName.message}
          </span>
        )}

        <label htmlFor="email" className="text-slate-500 mb-2 block text-sm">
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
          className="p-3 rounded block mb-2 bg-slate-900 text-slate-300 w-full"
          placeholder="user@email.com"
        />
        {errors.email && (
          <span className="text-red-500 text-xs">{errors.email.message}</span>
        )}

        <label htmlFor="password" className="text-slate-500 mb-2 block text-sm">
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
          className="p-3 rounded block mb-2 bg-slate-900 text-slate-300 w-full"
          placeholder="********"
        />
        {errors.password && (
          <span className="text-red-500 text-sm">
            {errors.password.message}
          </span>
        )}

        <label
          htmlFor="confirmPassword"
          className="text-slate-500 mb-2 block text-sm"
        >
          Confirm Password:
        </label>
        <input
          type="password"
          {...register("confirmPassword", {
            required: {
              value: true,
              message: "Confirm Password is required",
            },
          })}
          className="p-3 rounded block mb-2 bg-slate-900 text-slate-300 w-full"
          placeholder="********"
        />
        {errors.confirmPassword && (
          <span className="text-red-500 text-sm">
            {errors.confirmPassword.message}
          </span>
        )}

        <button className="w-full bg-blue-500 text-white p-3 rounded-lg mt-2">
          Register
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
export default RegisterPage;

