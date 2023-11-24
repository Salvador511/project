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
    
<<<<<<< HEAD
    <div className='justify-center items-center w-full h-screen'>
      {session?.user.image == params.id_student ? (
        <>
          <div className='bg-slate-400 items-center justify-center text-center w-1/5 mx-auto my-4 rounded-lg p-3'>
            <h1>Perfil del usuario</h1>
            <h1>Nombre: {firstname}</h1>
            <h2>Apellido: {lastname}</h2>
            <p>Escuela: {school}</p>
            <p>Grupo al que pertenece: {groupName}</p>
          </div>
        </>
=======
    <div className='justify-center items-center w-full'>
      {loading ? (
        <p>Loading...</p>
>>>>>>> 5df27707981763f80162b4a9eab5ae1fa79d7544
      ) : (
        <>
          {session?.user?.id == params.id_student ? (
            <div className='bg-slate-400 items-center justify-center text-center w-1/5 mx-auto my-4 rounded-lg p-3'>
              <h1>Perfil del usuario</h1>
              <h1>Nombre: {fullname}</h1>
              <p>Escuela: {school}</p>
              <p>Grupo al que pertenece: {groupName}</p>
              <p onClick={() => router.push(`/auth/users/students/dashboard/${params.id_student}/configurations`)}>Configs</p>
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
