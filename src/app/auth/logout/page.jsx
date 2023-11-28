'use client'
import { useSession, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";

function logout() {
  const { data: session } = useSession();
  const router = useRouter();

  return (
    <div className="bg-white font-semibold text-center text-5xl w-3/4 mx-auto p-10 m-10 h-screen rounded-lg shadow-xl shadow-black">
      {session ? (
        <>
          <p>¿Estas seguro de que deseas cerrar tu sesion, {session.user.name}?</p>
          <img className="rounded-full w-1/4 shadow-black shadow-lg mx-auto m-10" src="/images/chihuahuasad.jpg" alt="" />
          <button className="bg-red-500  font-medium text-center rounded-lg m-4 py-1 shadow-lg items-center justify-center w-3/5 hover:shadow-inner hover:shadow-black hover:bg-rose-700 hover:text-gray-900 text-white transition-all duration-500" onClick={() => {
            signOut({ redirect: false, callbackUrl: '/' })
            .then(alert('Cerraste sesión'))
            .then(router.refresh)
            .finally(router.push('/'))
          }}>Cerrar sesión</button>
        </>
      ) : (
        <div>
            <p>No estás autenticado.</p>
            <img className="mx-auto" src="/images/simbol-error.png" alt="" />
        </div>
      )}
    </div>
  );
}

export default logout;
