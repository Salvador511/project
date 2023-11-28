'use client'
import React, { useState, useEffect } from 'react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

const Page = () => {
  const [userType, setUserType] = useState(null);
  const { data: session } = useSession();
  const router = useRouter();

  useEffect(() => {
    // Verificar si hay información de sesión y si el usuario es un profesor
    if (session?.user && session.user.isprofessor) {
        setUserType('maestro');
    } else {
        setUserType('alumno');
    }
  }, [session]);
  

  const renderTeacherView = () => (
    <div className='max-md:text-center'>
        <h1 className="text-5xl text-white font-semibold mb-1">Bienvenid@, {session?.user.name}!</h1>
        <p className='text-2xl text-white font-semibold'>Nos alegra tenerte de vuelta</p>
        <div>
            <div className="flex flex-col justify-between mb-6 max-md:flex-col max-md:my-3">
                <div className="flex flex-col justify-center items-center justify-items-center md:mx-8 my-1 p-2 rounded-lg shadow-xl shadow-black bg-gray-300 max-md:my-2">
                    <div className='w-11/12'>
                        <h1 className="text-center bg-red-600 text-3xl text-white font-semibold p-2 m-3 rounded-lg shadow-lg">Aviso Importante</h1>
                    </div>
                    <div className="grid grid-flow-col justify-center items-center text-center">
                        <img className='mx-auto w-3/4' src="/images/logoempresa.png" alt="" />
                        <div>
                        <p className="bg-orange-600 m-4 p-2 text-center text-white text-2xl font-normal rounded-lg shadow-lg">
                        Recuerda que deberas brindarle a tus alumnos el codigo de tu grupo para que estos puedan unirse, en caso de que desconozcas cual es este codigo ingresa a tu perfil para conocerlo.
                        </p>
                        <Link className="items-center justify-center" href={`/auth/users/professors/dashboard/${session.user.id}`}><button className="bg-orange-500  font-medium text-center rounded-lg m-4 py-1 shadow-lg items-center text-lg justify-center w-3/5 hover:shadow-inner hover:shadow-black hover:bg-rose-700 hover:text-gray-900 text-white transition-all duration-500">
                                Ingresa a tu perfil
                            </button></Link>
                        
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
  
  const renderStudentView = () => (
    <div className='max-md:text-center'>
        <h1 className="text-3xl text-white font-semibold mb-1">Bienvenid@, {session?.user.name}!</h1>
        <p className='text-xl text-white font-semibold'>Nos alegra tenerte de vuelta</p>
        <div>
            <div className="flex flex-row justify-between mb-6 max-md:flex-col max-md:my-3">
                <div className="justify-center items-center justify-items-center md:mx-8 my-1 p-2 rounded-lg shadow-xl shadow-black bg-red-300 max-md:my-2">
                    <div>
                        <h1 className="text-center bg-red-600 text-lg text-white font-semibold p-2 m-3 rounded-lg shadow-lg">Aventura Matemática: Sumando con Diversión</h1>
                    </div>
                    <img className='mx-auto w-1/3' src="/gifs/separate/Plus-Idle.gif" alt="" />
                    <div className="justify-center items-center text-center">
                        <p className="bg-red-600 m-4 p-2 text-center text-white font-normal rounded-lg shadow-lg">
                        ¡Bienvenido al Curso de Sumas, donde la diversión se encuentra con el aprendizaje! En este viaje educativo, explorarás la magia de sumar números de una manera emocionante y estimulante. Desde simples adiciones hasta desafíos más complejos, cada lección te acercará a convertirte en un maestro de las sumas. Sumérgete en coloridos escenarios y resuelve problemas matemáticos en un entorno interactivo que hará que cada paso en tu viaje sea memorable. ¡Eleva tus habilidades numéricas y descubre la alegría de sumar!
                        </p>
                        <a className="items-center justify-center" href="/auth/users/students/courses/sumas">
                            <button className="bg-rose-500  font-medium text-center rounded-lg m-4 py-1 shadow-lg items-center justify-center w-3/5 hover:shadow-inner hover:shadow-black hover:bg-rose-700 hover:text-gray-900 text-white transition-all duration-500">
                                Curso sumas
                            </button>
                        </a>
                    </div>
                </div>
                <div className="justify-center items-center justify-items-center lg:mx-8 my-1 p-2 rounded-lg shadow-xl shadow-black bg-blue-300">
                    <div>
                        <h1 className="text-center bg-cyan-600 text-lg text-white font-semibold p-2 m-3 rounded-lg shadow-lg">Aventura Matemática: Restando con Diversión</h1>
                    </div>
                    <img className='mx-auto w-1/3' src="/gifs/separate/Moin-Idle.gif" alt="" />
                    <div className="justify-center items-center text-center">
                        <p className="bg-cyan-600 m-4 p-2 text-center text-white font-normal rounded-lg shadow-lg">
                        Embárcate en una emocionante odisea matemática con nuestro Curso de Restas. Aquí, desafiarás tu mente mientras exploras el fascinante mundo de las restas. Desde problemas simples hasta acertijos más elaborados, cada lección te llevará a nuevas alturas en tus habilidades matemáticas. Sumérgete en un entorno educativo lleno de desafíos interactivos, donde cada respuesta correcta te acerca un paso más a convertirte en un experto en restas. ¡Prepárate para la aventura y descubre la satisfacción de restar números de manera eficiente y divertida!
                        </p>
                        <a className="items-center justify-center" href="/auth/users/students/courses/restas">
                            <button className="bg-blue-500  font-medium text-center rounded-lg m-4 py-1 shadow-lg items-center justify-center w-3/5 hover:shadow-inner hover:shadow-black hover:bg-blue-700 hover:text-gray-900 text-white transition-all duration-500">
                                Curso restas
                            </button>
                        </a>
                    </div>
                </div>
            </div>
        </div>
      </div>
  );

  return (
    <div className="m-10 h-full">
      {userType === 'maestro' && renderTeacherView()}

      {userType === 'alumno' && renderStudentView()}
    </div>
  );
};

export default Page;