"use client";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";

function RegisterPage() {
  const { register, handleSubmit, formState: { errors }, watch } = useForm();
  const router = useRouter();

  // Obtener el valor actual del checkbox "¿Eres maestro?"
  const isProfessor = watch("isprofessor");

  const onSubmit = handleSubmit(async (data) => {
    if (data.password !== data.confirmPassword) {
      return alert("Las contraseñas no coinciden");
    }

    const res = await fetch("/api/auth/register", {
      method: "POST",
      body: JSON.stringify({
        fullname: data.fullname,
        email: data.email,
        password: data.password,
        id_group: isProfessor ? null : data.id_group, // Usar null si es profesor
        school: data.school,
        isprofessor: data.isprofessor
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (res.ok) {
      alert("Registro Exitoso")
      router.push("/auth/login");
    } else {
      const data = await res.json();
      if (res.status === 400 && data.message === "Email already exists") {
        alert("Este correo electrónico ya está registrado. Por favor, utiliza otro.");
      } else {
        alert("Hubo un error en el registro. Por favor, inténtalo de nuevo.");
      }
    }
  });

  console.log(errors);

  return (
    <div className="bg-[url('/images/background.avif')] bg-fixed bg-cover h-full w-full">
        <section className="h-full w-full flex items-center justify-center">
          <div className="m-8 flex flex-row rounded-2xl p-6 items-center justify-around shadow-2xl shadow-black w-5/6">
            <div className="lg:w-1/2 md:w-full h-full m-5 md:h-screen">
            <div className="lg:flex lg:flex-row justify-center max-md:justify-around items-center w-full">
      <form onSubmit={onSubmit} className="lg:w-4/6 max-md:h-full md:w-full">
        <h1 className="text-slate-200 font-bold text-4xl mb-4 text-center">Registro</h1>

        <label htmlFor="fullname" className="text-white mb-2 block text-sm">
          Nombre completo:
        </label>
        <input
          type="text"
          {...register("fullname", {
            required: {
              value: true,
              message: "Nombre completo requerido",
            },
          })}
          className="p-3 rounded block mb-2 bg-white text-black placeholder:text-slate-400 w-full"
          placeholder="Escribe tu nombre completo aquí"
        />

        {errors.fullname && (
          <span className="p-1 m-1 text-xs rounded-full bg-red-600 text-white font-bold w-full">
            {errors.fullname.message}
          </span>
        )}

        <label htmlFor="email" className="text-white mb-2 block text-sm">
          Email:
        </label>
        <input
          type="email"
          {...register("email", {
            required: {
              value: true,
              message: "Email es requerido",
            },
          })}
          className="p-3 rounded block mb-2 bg-white text-black placeholder:text-slate-400 w-full"
          placeholder="Escribe aqui tu e-mail"
        />
        {errors.email && (
          <span className="p-1 m-1 text-xs rounded-full bg-red-600 text-white font-bold w-full">{errors.email.message}</span>
        )}

        <label htmlFor="password" className="text-white mb-2 block text-sm">
          Escribe tu contraseña:
        </label>
        <input
          type="password"
          {...register("password", {
            required: {
              value: true,
              message: "Contraseña requerida",
            },
          })}
          className="p-3 rounded block mb-2 bg-white text-black placeholder:text-slate-400 w-full"
          placeholder="********"
        />
        {errors.password && (
          <span className="p-1 m-1 text-xs rounded-full bg-red-600 text-white font-bold w-full">
            {errors.password.message}
          </span>
        )}

        <label
          htmlFor="confirmPassword"
          className="text-white mb-2 block text-sm"
        >
          Confirma tu contraseña:
        </label>
        <input
          type="password"
          {...register("confirmPassword", {
            required: {
              value: true,
              message: "Confirmacion de contraseña requerida",
            },
          })}
          className="p-3 rounded block mb-2 bg-white text-black placeholder:text-slate-400 w-full"
          placeholder="Confirma tu contraseña"
        />
        {errors.confirmPassword && (
          <span className="p-1 m-1 text-xs rounded-full bg-red-600 text-white font-bold w-full">
            {errors.confirmPassword.message}
          </span>
        )}

        { !isProfessor && (
          <div>
              <label htmlFor="id_group" className="text-white mb-2 block text-sm">
                  Clave de Grupo:
              </label>
              <input
                  type="text"
                    {...register("id_group", {
                      required: {
                      value: !isProfessor, // Requerido solo si no es profesor
                    },
                 })}
                className="p-3 rounded block mb-2 bg-white text-black placeholder:text-slate-400 w-full"
                placeholder="Escribe tu clave grupo"
             />
           </div>
          )}

        
        <label htmlFor="school" className="text-white mb-2 block text-sm">
          Escuela:
        </label>
        <input
          type="text"
          {...register("school", {
            required: {
              value: false,
            },
          })}
          className="p-3 rounded block mb-2 bg-white text-black placeholder:text-slate-400 w-full"
          placeholder="Escribe aqui tu escuela"
        />

        <label htmlFor="isprofessor" className="bg-orange-500 text-white mb-2 block text-sm w-full p-1 rounded-lg my-2">
          <input
            type="checkbox"
            id="isprofessor"
            {...register("isprofessor")}
            className="mr-2"
          />
          ¿Eres maestro?
        </label>

        <button className="w-full bg-blue-800 hover:bg-blue-500 duration-500 text-white p-3 rounded-lg mt-2">
          Registrarse
        </button>
      </form>
    </div>
    </div>
    <div>
    <img className="max-lg:hidden lg::w-2/6" src="/images/logo-xl.png" alt="" />
    </div>
    </div>
    </section>
    </div>
  );
}
export default RegisterPage;

