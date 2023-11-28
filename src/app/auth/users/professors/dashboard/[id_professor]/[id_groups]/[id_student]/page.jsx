'use client'
import { useEffect, useState } from 'react'
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import Loadview from '@/components/loadview';

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
    alert("Actualizado");
    router.back();
    router.refresh();
}
  
    return (
      <div className=' h-screen flex justify-center items-center'>
        {loading ? (
        <Loadview/>
      ) : (
        <>
            <form action="" className='bg-purple-600 shadow-black shadow-xl m-10 text-white rounded-xl p-10 lg:w-1/4 md:w-full'>
                <h1 className='text-center text-3xl font-bold mb-5'>Edicion de perfil</h1>
              <label htmlFor="title" className=' font-semibold text-sm'>Nombre de usuario</label>
              <input 
                type='text' 
                placeholder='Nombre' 
                className='border border-purple-800 border-solid shadow-inner shadow-black rounded-xl p-2 mb-4 w-full text-black' 
                id='fullname'
                onChange={(e) => setFullname(e.target.value)}
                value={fullname}
                />


                <label htmlFor="title" className='text-white font-semibold text-sm'>Clave del Grupo</label>
                <input 
                  type='text' 
                  placeholder='Apellido' 
                  className='border border-purple-800 border-solid shadow-inner shadow-black rounded-xl p-2 mb-4 w-full text-black' 
                  id='id_group'
                  onChange={(e) => setGroupId  (e.target.value)}
                  value={id_group}
                />

                <label htmlFor="title" className=' font-semibold text-sm'>Escuela</label>
                <input 
                  type='text' 
                  placeholder='Escuela' 
                  className='border border-purple-800 border-solid shadow-inner shadow-black rounded-xl p-2 mb-4 w-full text-black' 
                  id='lastname'
                  onChange={(e) => setSchool (e.target.value)}
                  value={school}
                />

                <div className='grid grid-flow-col justify-between'>
                <Link href={`../`}><button className="mx-auto bg-rose-400 text-sm font-medium text-center rounded-lg shadow-lg items-center justify-center w-full p-1 hover:shadow-inner hover:shadow-black hover:bg-rose-600 hover:text-gray-900 text-white transition-all duration-500" >Cancelar</button></Link>
                <button className='mx-auto bg-blue-500 text-sm font-medium text-center rounded-lg shadow-lg items-center justify-center w-full p-1 hover:shadow-inner hover:shadow-black hover:bg-blue-700 hover:text-gray-900 text-white transition-all duration-500' onClick={onSubmit}>
                    Actualizar perfil
                  </button>
                  <button className='mx-auto bg-red-600 text-sm font-medium text-center rounded-lg shadow-lg items-center justify-center w-full p-1 hover:shadow-inner hover:shadow-black hover:bg-red-800 hover:text-black text-white transition-all duration-500'                 onClick={async () => {
                    try {
                        const res = await fetch(`/api/students/${Number(params.id_student)}`, {
                            method: 'DELETE',
                        });
                    
                        if (!res.ok) {
                            throw new Error(`Failed to delete student: ${res.status} ${res.statusText}`);
                        }
                    
                        const data = await res.json();
                        alert("BORRADO");
                        router.back();
                        router.refresh();
                    } catch (error) {
                        console.error("Error deleting student:", error);
                    }
                    
                    }}> 
                    Borrar
                  </button>
                  
                </div>
              </form>
               
            </>
        )}
      </div>
    );
    
}

export default ConfigurationPage