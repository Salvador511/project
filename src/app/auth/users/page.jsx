'use client'
import React, { useState } from 'react';
import { useEffect} from 'react'
import { useSession } from 'next-auth/react';
import {useRouter} from 'next/navigation'


const Page = () => {
  const [userType, setUserType] = useState(null);
  const { data: session } = useSession();
  const router = useRouter()




  useEffect(() => {
    // Aquí deberías tener tu lógica de autenticación y establecer el userType
    // Esto es solo un ejemplo, deberías implementar tu lógica de autenticación real aquí
    // Puedes usar algún estado global, contexto, o cualquier otra solución de gestión de estado
    // para almacenar el userType.
    // Por ahora, solo estableceré userType de manera manual.
    setUserType('maestro'); // Cambia a 'alumno' para probar como alumno
  }, []);

  return (
    <div className="container mx-auto mt-10">
      {userType === 'maestro' && (
        <div className="bg-green-200 p-4 rounded-md">
          <h1 className="text-2xl font-bold mb-4">Bienvenido, Maestro</h1>
          {/* Contenido específico para el maestro */}
          <p>¡Aquí va el contenido para el maestro!</p>
          <a onClick={()=>{
              router.push(`/auth/users/students/dashboard/${session.user.image}`)
              router.refresh()
            }
          }>Hello, {session?.user.name}!</a>
        </div>
      )}

      {userType === 'alumno' && (
        <div className="bg-blue-200 p-4 rounded-md">
          <h1 className="text-2xl font-bold mb-4">Bienvenido, Alumno</h1>
          {/* Contenido específico para el alumno */}
          <p>¡Aquí va el contenido para el alumno!</p>
        </div>
      )}
      
    </div>
  );
};

export default Page;