'use client'
// Import necessary modules
import { useEffect, useState } from 'react'
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';


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
    <div className='justify-center items-center w-full'>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
          {session?.user?.id == params.id_professor ? (
            <div className='bg-slate-400 items-center justify-center text-center w-1/5 mx-auto my-4 rounded-lg p-3'>
              <h1>Perfil del usuario</h1>
              <h1>Nombre: {fullname}</h1>
              <p>Escuela: {school}</p>
              <p>Grupo al que pertenece: {id_group} {groupName}</p>
              <p onClick={() => router.push(`/auth/users/professors/dashboard/${params.id_professor}/configurations`)}>Configs</p>
              <h1 onClick={() => router.push(`/auth/users/professors/dashboard/${params.id_professor}/${id_group}`)}>
                Grupo
              </h1>
            </div>
          ) : (
            <h1 onClick={() => router.push(`/auth/users/professors/dashboard/${session?.user?.id}`)}>
              NO TIENES ACCESO
            </h1>
          )}
        </>
      )}
    </div>
  );
}

export default ProfessorPage;
