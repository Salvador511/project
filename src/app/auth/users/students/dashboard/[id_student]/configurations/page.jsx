'use client'
import { useEffect, useState } from 'react'
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';

function ConfigurationPage({ params }) {
  const router = useRouter()
  const { data: session } = useSession();
  const [fullname, setFullname] = useState("");
  const [school, setSchool] = useState("");
  const [id_group, setGroupId] = useState(""); // Separate state for group name
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check if params.id_student exists and is not an empty string
    if (params.id_student) {
      // Fetch student data
      setLoading(true);

      fetch(`/api/students/${Number(params.id_student)}`)
        .then((res) => res.json())
        .then((data) => {
          setFullname(data.fullname);
          setSchool(data.school);
          setGroupId(data.id_group)
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
          // Handle errors appropriately
        }).finally(() => {
          setLoading(false);
        });
    }
  }, [params.id_student]);

  const onSubmit = async (e) => {
    e.preventDefault(); 
  
    if (params.id_student) {
      const res = await fetch(`/api/students/${params.id_student}`,{
        method: "PUT",
        body: JSON.stringify({fullname, school, id_group}),
        headers:{
          "Content-Type": "application/json"
        }
      })
      const data = await res.json()
    }
    router.push(`/auth/users/students/dashboard/${params.id_student}`)
  }
  
    return (
      <div className=' h-screen flex justify-center items-center'>
        {loading ? (
        <p>Loading...</p>
      ) : (
        <>
          {session?.user?.id == params.id_student ? (
            <form action="" className='bg-slate-800 p-10 lg:w-1/4 md:w-full' onSubmit={onSubmit}>
              <label htmlFor="title" className=' font-bold text-sm'>Nombre</label>
              <input 
                type='text' 
                placeholder='Nombre' 
                className=' border-gray-400 p-2 mb-4 w-full text-black' 
                id='fullname'
                onChange={(e) => setFullname(e.target.value)}
                value={fullname}
                />


                <label htmlFor="title" className=' font-bold text-sm'>Grupo</label>
                <input 
                  type='text' 
                  placeholder='Apellido' 
                  className=' border-gray-400 p-2 mb-4 w-full text-black' 
                  id='id_group'
                  onChange={(e) => setGroupId  (e.target.value)}
                  value={id_group}
                />

                <label htmlFor="title" className=' font-bold text-sm'>Escuela</label>
                <input 
                  type='text' 
                  placeholder='Escuela' 
                  className=' border-gray-400 p-2 mb-4 w-full text-black' 
                  id='lastname'
                  onChange={(e) => setSchool (e.target.value)}
                  value={school}
                />

                <div className='flex justify-between'>
                  <button className=' bg-blue-500 hover:bg-blue-700 text-white font-bold  py-2 px-4 rounded' type='submit'>
                    Actualizar
                  </button>
                </div>
              </form>
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

export default ConfigurationPage