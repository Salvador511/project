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
    <div className="bg-green-200 p-4 rounded-md">
    <h1 className="text-2xl font-bold mb-2">Bienvenid@, {session?.user.name}!</h1>
    <div>
      <p className="text-center">Por favor seleccione un grupo</p>
      <div className="flex flex-row grid-cols-1">
      <div className="bg-slate-400 justify-center items-center justify-items-center m-6 mx-32 rounded-lg shadow-lg">
              <div>
                  <h1 className="text-center bg-white p-2 my-2 mx-12 rounded-lg shadow-lg">Aventura Matemática: Sumando con Diversión</h1>
              </div>
              <div className="justify-center items-center text-center">
                  <p className="bg-white m-2 p-1 text-justify rounded-lg shadow-lg">
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed accusamus quidem praesentium accusantium. Assumenda sequi eius quaerat soluta aut omnis, consequatur corrupti. Quo aliquam esse placeat beatae enim commodi tempora.
                  </p>
                  <a className="items-center justify-center" href="/auth/dashboard/professors">
                      <button className="bg-orange-600 text-black text-center rounded-lg shadow-lg m-4 py-1 items-center justify-center w-3/5 hover:bg-orange-500 transition-all hover:text-white duration-500">
                          Curso sumas
                      </button>
                  </a>
              </div>
          </div>
      </div>
  </div>
  </div>
  );

  const renderStudentView = () => (
    <div>
       <div className="bg-green-200 p-4 rounded-md">
        <h1 className="text-2xl font-bold mb-4">Bienvenid@, {session?.user.name}!</h1>
        <p>Nos alegra tenerte de vuelta</p>
        <div>
            <p className="text-center">Por favor seleccione un curso</p>
            <div className="grid grid-flow-col grid-cols-2">
                <div className="bg-slate-400 justify-center items-center justify-items-center m-6 rounded-lg shadow-lg">
                    <div>
                        <h1 className="text-center bg-white p-2 my-2 mx-12 rounded-lg shadow-lg">Aventura Matemática: Sumando con Diversión</h1>
                    </div>
                    <div className="justify-center items-center text-center">
                        <p className="bg-white m-2 p-1 text-justify rounded-lg shadow-lg">
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed accusamus quidem praesentium accusantium. Assumenda sequi eius quaerat soluta aut omnis, consequatur corrupti. Quo aliquam esse placeat beatae enim commodi tempora.
                        </p>
                        <a className="items-center justify-center" href="/auth/users/students/courses/sumas">
                            <button className="bg-orange-600 text-black text-center rounded-lg shadow-lg m-4 py-1 items-center justify-center w-3/5 hover:bg-orange-500 transition-all hover:text-white duration-500">
                                Curso sumas
                            </button>
                        </a>
                    </div>
                </div>
                <div className="bg-slate-400 justify-center items-center justify-items-center m-6 rounded-lg shadow-lg">
                <div>
                    <h1 className="text-center bg-white p-2 my-2 mx-12 rounded-lg shadow-lg">Aventura Matemática: Restando con Diversión</h1>
                    </div>
                    <div className="justify-center items-center text-center">

                        <p className="bg-white m-2 p-1 text-justify rounded-lg shadow-lg">
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed accusamus quidem praesentium accusantium. Assumenda sequi eius quaerat soluta aut omnis, consequatur corrupti. Quo aliquam esse placeat beatae enim commodi tempora.
                        </p>
                        <a className="items-center justify-center" href="/auth/users/students/courses/restas">
                            <button className="bg-orange-600 text-black text-center rounded-lg shadow-lg m-4 py-1 items-center justify-center w-3/5 hover:bg-orange-500 transition-all hover:text-white duration-500">
                                Curso restas
                            </button>
                        </a>
                    </div>
                    </div>
            </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="container mx-auto mt-10">
      {userType === 'maestro' && renderTeacherView()}

      {userType === 'alumno' && renderStudentView()}
    </div>
  );
};

export default Page;