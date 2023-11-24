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
  const [groupName, setGroupName] = useState(""); // Separate state for group name
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
          console.log(data.id_group)

          // Fetch group data after fetching student data
          return fetch(`/api/groups-unique/${Number(data.id_group)}`);
        })
        .then((res) => res.json())
        .then((data) => {
          setGroupName(data.group_name);
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
    
    <div className='flex h-screen justify-center items-center w-full transition-all duration-500'>
      {loading ? (
        <div className='flex items-center justify-center'>
            <div className='w-full mx-auto text-center items-center justify-center'>
                <h1 className=' bg-purple-800 animate-pulse items-center rounded-full m-24 p-24 justify-center text-5xl text-white text-center'>
                    Cargando...
                </h1>
            </div>
        </div>
      ) : (
        <>
          {session?.user?.id == params.id_student ? (
            <div className='bg-purple-600 text-white items-center justify-center text-center w-4/5 mx-auto my-4 rounded-lg p-3'>
              <h1 className='text-4xl m-2'>Perfil del usuario</h1>
              <div className='flex max-md:justify-center justify-between max-md:flex-col md:flex-row w-full m-5'>
              <div className='w-1/3'>
              <img className='mx-auto w-full' src="/images/user-image.png" alt="" />
              </div>
              <div className='w-2/3 items-center justify-center'>
              <h1 className='text-xl m-2'>Nombre: {fullname}</h1>
              <p className='text-xl m-2'>Escuela: {school}</p>
              <p className='text-xl m-2'>Grupo al que pertenece: {groupName}</p>
              <p className='bg-sky-500 text-lg font-medium text-center rounded-lg shadow-lg items-center justify-center p-1 hover:shadow-inner hover:shadow-black hover:bg-sky-700 hover:text-gray-900 text-white transition-all duration-500 w-1/2 mx-auto' onClick={() => router.push(`/auth/users/students/dashboard/${params.id_student}/configurations`)}>Editar perfil</p>
              </div>
              </div>
            </div>
          ) : (
            <h1 onClick={() => router.push(`/auth/users/students/dashboard/${session?.user?.id}`)}>
              NO TIENES ACCESO
            </h1>
          )}
        </>
      )}
    </div>
  );
}

export default StudentPage;
