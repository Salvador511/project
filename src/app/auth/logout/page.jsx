'use client'
import { useSession, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";

function logout() {
  const { data: session } = useSession();
  const router = useRouter();

  return (
    <div>
      {session ? (
        <>
          <p>Bienvenido, {session.user.name}!</p>
          <button onClick={() => {
            signOut({ redirect: false, callbackUrl: '/' })
            .then(alert('Cerraste sesión'))
            .then(router.refresh)
            .finally(router.push('/'))
          }}>Cerrar sesión</button>
        </>
      ) : (
        <p>No estás autenticado.</p>
      )}
    </div>
  );
}

export default logout;