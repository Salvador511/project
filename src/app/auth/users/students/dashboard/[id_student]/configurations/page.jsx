'use client'
import { useEffect, useState } from 'react'
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

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
            <form action="" className='bg-violet-700 rounded-xl p-10 lg:w-1/4 md:w-full' onSubmit={onSubmit}>
                <h1 className='text-center text-3xl text-white font-bold mb-5'>Edicion de perfil</h1>
              <label htmlFor="title" className='text-white font-semibold text-sm'>Nombre de usuario</label>
              <input 
                type='text' 
                placeholder='Nombre' 
                className=' border-orange-400 rounded-xl p-2 mb-4 w-full text-black' 
                id='fullname'
                onChange={(e) => setFullname(e.target.value)}
                value={fullname}
                />


                <label htmlFor="title" className='text-white font-semibold text-sm'>Grupo</label>
                <input 
                  type='text' 
                  placeholder='Apellido' 
                  className='border-orange-400 rounded-xl p-2 mb-4 w-full text-black' 
                  id='id_group'
                  onChange={(e) => setGroupId  (e.target.value)}
                  value={id_group}
                />

                <label htmlFor="title" className='text-white font-semibold text-sm'>Escuela</label>
                <input 
                  type='text' 
                  placeholder='Escuela' 
                  className='border-orange-400 rounded-xl p-2 mb-4 w-full text-black' 
                  id='lastname'
                  onChange={(e) => setSchool (e.target.value)}
                  value={school}
                />

                <div className='grid grid-flow-col justify-between'>
                <Link href={`/auth/users/students/dashboard/${session.user.id}`}><button className="mx-auto bg-rose-500 text-lg font-medium text-center rounded-lg shadow-lg items-center justify-center w-full p-1 hover:shadow-inner hover:shadow-black hover:bg-sore-700 hover:text-gray-900 text-white transition-all duration-500" >Cancelar</button></Link>
                  <button className='mx-auto bg-sky-500 text-lg font-medium text-center rounded-lg shadow-lg items-center justify-center w-full p-1 hover:shadow-inner hover:shadow-black hover:bg-sky-700 hover:text-gray-900 text-white transition-all duration-500' type='submit'>
                    Actualizar perfil
                  </button>
                </div>
              </form>
               ) : (
                <h1 onClick={() => router.push(`/auth/users/students/dashboard/${session?.user?.id}`)} className=' bg-red-800 animate-bounce items-center rounded-full m-24 p-24 justify-center text-3xl text-white text-center'>
                  NO TIENES ACCESO
                </h1>
              )}
            </>
        )}
      </div>
    );
    
}

export default ConfigurationPage