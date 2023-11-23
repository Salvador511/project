'use client'
import { useEffect, useState } from 'react'
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';

function ConfigurationPage({ params }) {
  const router = useRouter()
  const { data: session } = useSession();
  const [name, setName] = useState("");
  const [school, setSchool] = useState("");
  const [id_group, setGroupId] = useState(""); 
  const [loading, setLoading] = useState(true);

  useEffect(() => {

    if (params.id_professor) {
      setLoading(true);

      fetch(`/api/professors/${Number(params.id_professor)}`)
        .then((res) => res.json())
        .then((data) => {
          setName(data.name);
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
  }, [params.id_professor]);

  const onSubmit = async (e) => {
    e.preventDefault(); 
  
    if (params.id_professor) {
      const res = await fetch(`/api/professors/${params.id_professor}`,{
        method: "PUT",
        body: JSON.stringify({name, school, id_group}),
        headers:{
          "Content-Type": "application/json"
        }
      })
      const data = await res.json()
    }
    router.push(`/auth/users/professors/dashboard/${params.id_professor}`)
  }

  return (
    <div className=' h-screen flex justify-center items-center'>
        {loading ? (
        <p>Loading...</p>
      ) : (
        <>
          {session?.user?.id == params.id_professor ? (
            <form action="" className='bg-slate-800 p-10 lg:w-1/4 md:w-full' onSubmit={onSubmit}>
              <label htmlFor="title" className=' font-bold text-sm'>Nombre</label>
              <input 
                type='text' 
                placeholder='Nombre' 
                className=' border-gray-400 p-2 mb-4 w-full text-black' 
                id='fullname'
                onChange={(e) => setName(e.target.value)}
                value={name}
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
  )
}

export default ConfigurationPage