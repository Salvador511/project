'use client'
// Import necessary modules
import { useEffect, useState } from 'react'
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';

// Define the StudentPage component
function StudentPage({ params }) {
  const router = useRouter()
  const { data: session } = useSession();
  const [fullname, setfullname] = useState("");
  const [school, setSchool] = useState("");
  const [groupName, setGroupName] = useState(""); 
  const [scoreAddition, setScoreAddition] = useState("");
  const [scoreSubstraction, setScoreSubstraction] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check if params.id_student exists and is not an empty string
    if (params.id_student) {
      // Fetch student data
      setLoading(true);

      fetch(`/api/students/${Number(params.id_student)}`)
        .then((res) => res.json())
        .then((data) => {
          setfullname(data.fullname);
          setSchool(data.school);

          return fetch(`/api/groups-unique/${Number(data.id_group)}`);
        })
        .then((res) => res.json())
        .then((data) => {
          setGroupName(data.group_name);

          return fetch(`/api/studentsExam/addition/${params.id_student}`)
        })
        .then((res) => res.json())
        .then((data) => {
          console.log(data.score)
          setScoreAddition(data.score);

          return fetch(`/api/studentsExam/substraction/${params.id_student}`)
        })
        .then((res) => res.json())
        .then((data) => {
          setScoreSubstraction(data.score);
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
          // Handle errors appropriately
        }).finally(() => {
          setLoading(false);
        });
    }
  }, [params.id_student]); // Include params.id_student in the dependency array if needed

  

  return (
    
    <div className='p-5 flex h-screen justify-center items-center w-full transition-all duration-100'>
      {loading ? (
        <div className='flex items-center justify-center'>
            <div className='w-full mx-auto text-center items-center justify-center'>
                <h1 className=' bg-purple-800 animate-bounce items-center rounded-full m-24 p-24 justify-center text-3xl text-white text-center'>
                    Cargando...
                </h1>
            </div>
        </div>
      ) : (
        <>
          {session?.user?.id == params.id_student ? (
            <div className='bg-purple-600 text-white items-center justify-center text-center w-full mx-auto my-4 rounded-md p-3'>
                <div className='flex max-md:justify-center justify-between max-md:flex-col md:flex-row w-full md:m-1'>
                    <div className='mx-auto max-md:w-full md:w-1/3'>
                        <img className='mx-auto max-md:p-1 max-md:w-1/2 md:w-full' src="/images/user-image.png" alt="" />
                    </div>
                    <div className='flex flex-col max-md:w-full md:w-2/3 items-center justify-center text-center'>
                        <h1 className='text-4xl max-md:p-1 md:m-2'>Perfil del usuario</h1>
                        <h1 className='text-xl max-md:p-1 md:m-2'>Nombre: {fullname}</h1>
                        <p className='text-xl max-md:p-1 md:m-2'>Escuela: {school}</p>
                        <p className='text-xl max-md:p-1 md:m-2'>Grupo al que pertenece: {groupName}</p>
                        <p className='text-xl max-md:p-1 md:m-2'>Resultados de Examen de Sumas: {scoreAddition}</p>
                        <p className='text-xl max-md:p-1 md:m-2'>Resultados de Examen de Restas: {scoreSubstraction}</p>
                        <p className='bg-purple-500 text-md font-medium text-center rounded-md shadow-md items-center justify-center p-1 hover:shadow-inner hover:shadow-black hover:bg-sky-700 hover:text-gray-900 text-white transition-all duration-100 w-1/2 mx-auto' onClick={() => router.push(`/auth/users/students/dashboard/${params.id_student}/configurations`)}>Editar perfil</p>
                    </div>
              </div>
            </div>
          ) : (
            <h1 onClick={() => router.push(`/auth/users/students/dashboard/${session?.user?.id}`)} className=' bg-red-800 transition-all ease-in-out animate-bounce items-center rounded-full m-24 p-24 justify-center text-3xl text-white text-center scale-105'>
              NO TIENES ACCESO
            </h1>
          )}
        </>
      )}
    </div>
  );
}

export default StudentPage;
