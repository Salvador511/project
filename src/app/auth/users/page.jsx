'use client'
import React, { useState, useEffect } from 'react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';

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
    <div className="shadow-2xl shadow-black p-4 rounded-lg m-8">
    <h1 className="text-2xl font-bold mb-2">Bienvenid@, {session?.user.name}!</h1>
    <div>
      <div className="flex flex-row">
      <div className="bg-purple-400 bg-opacity-60 justify-center items-center justify-items-center m-6 mx-auto rounded-lg shadow-lg">
              <div>
                  <h1 className="text-center text-white bg-orange-600 p-2 my-2 mx-12 rounded-lg shadow-lg">Grupos</h1>
              </div>
              <div className="justify-center items-center text-center">
                  <p className="bg-white m-2 p-1 text-justify rounded-lg shadow-lg">
                      Aqui podra encontrar a los grupos que actualemente estan con usted, podra ver a sus alumnos y su progreso
                  </p>
                      <button className="bg-orange-600 text-black text-center rounded-lg shadow-lg m-4 py-1 items-center justify-center w-3/5 hover:bg-orange-500 transition-all hover:text-white duration-500" onClick={() => {
                    router.push(`/auth/users/professors/dashboard/${session?.user.id}`);
                    }}>
                          Grupo
                      </button>
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
                <div className="justify-center items-center justify-items-center mx-8 my-1 p-2 rounded-lg shadow-xl shadow-black bg-red-300 max-md:my-2">
                    <div>
                        <h1 className="text-center bg-red-600 text-lg text-white font-semibold p-2 m-4 rounded-lg shadow-lg">Aventura Matemática: Sumando con Diversión</h1>
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
                <div className="justify-center items-center justify-items-center mx-8 my-1 p-2 rounded-lg shadow-xl shadow-black bg-blue-300">
                    <div>
                        <h1 className="text-center bg-cyan-600 text-lg text-white font-semibold p-2 m-4 rounded-lg shadow-lg">Aventura Matemática: Restando con Diversión</h1>
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