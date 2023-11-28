'use client'
// Import necessary modules
import { useEffect, useState } from 'react'
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import Loadview from '@/components/Loadview';


// Define the professorPage component
function ProfessorPage({ params }) {
  const router = useRouter()
  const { data: session } = useSession();
  const [fullname, setfullname] = useState("");
  const [school, setSchool] = useState("");
  const [groupName, setGroupName] = useState(""); // Separate state for group name
  const [loading, setLoading] = useState(true);
  const [id_group, setId_group] = useState("");
 

  useEffect(() => {
    if (params.id_professor) {
      setLoading(true);

      fetch(`/api/professors/${Number(params.id_professor)}`)
        .then((res) => res.json())
        .then((data) => {
          setfullname(data.fullname);
          setSchool(data.school);
          setId_group(data.id_group);

          return fetch(`/api/groups-unique/${data.id_group}`);
        })
        .then((res) => res.json())
        .then((data) => {
          setGroupName(data.group_name);
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
          // Handle errors appropriately, e.g., set an error state
        })
        .finally(() => {
          setLoading(false);
        });
    }
  }, [params.id_professor]);

  return (
    <div className='p-5 grid justify-center items-center w-full min-h-screen'>
      {loading ? (
        <Loadview/>
      ) : (
        <>
          {session?.user?.id == params.id_professor ? (
            <div className='bg-purple-600 text-white items-center justify-center text-center w-full mx-auto m-10 rounded-md p-8'>
            <div className='grid grid-flow-col max-md:grid-flow-row md:grid-cols-2 max-md:justify-center justify-between max-md:flex-col md:flex-row w-full md:m-1'>
                <div className='mx-auto'>
                    <img className='mx-auto max-md:p-1 w-4/5' src="/images/logoempresa.png" alt="" />
                </div>
                <div className='bg-white text-black font-semibold rounded-xl mx-auto grid grid-flow-row max-md:w-full md:w-2/3 items-center justify-center text-center shadow-xl shadow-black'>
                    <h1 className='text-6xl max-md:p-1 md:m-2'>Perfil del usuario</h1>
                    <h1 className='text-2xl max-md:p-1 md:m-2'>Nombre: {fullname}</h1>
                    <p className='text-2xl max-md:p-1 md:m-2'>Escuela: {school}</p>
                    <p className='text-2xl max-md:p-1 md:m-2'>Clave de Grupo {id_group}</p>
                    <p className='text-2xl max-md:p-1 md:m-2'>Grupo al que pertenece: {groupName}</p>
                    <p className='bg-purple-500 text-md font-medium text-center rounded-md shadow-md items-center justify-center p-1 m-4 hover:shadow-inner hover:shadow-black hover:bg-sky-700 hover:text-gray-900 text-white transition-all duration-500 w-1/2 mx-auto' onClick={() => router.push(`/auth/users/professors/dashboard/${params.id_professor}/configurations`)}>Edita tu perfil</p>
                    <h1 className='bg-blue-500 text-md font-medium text-center rounded-md shadow-md items-center justify-center p-1 hover:shadow-inner hover:shadow-black hover:bg-sky-700 hover:text-gray-900 text-white transition-all duration-100 w-1/2 mb-5 mx-auto' 
                    onClick={() =>{
                      setLoading(true)
                      router.push(`/auth/users/professors/dashboard/${params.id_professor}/${id_group}`)
                      setLoading(false);
                    } 
                    }>
                Alumnos de tu grupo
              </h1>
              </div>
              </div>
            </div>
          ) : (
            <h1 onClick={() => router.push(`/auth/users/professors/dashboard/${session?.user?.id}`)} className=' bg-red-800 transition-all ease-in-out animate-bounce items-center rounded-full m-24 p-24 justify-center text-3xl text-white text-center scale-105'>
              NO TIENES ACCESO
            </h1>
          )}
        </>
      )}
    </div>
  );
}

export default ProfessorPage;
