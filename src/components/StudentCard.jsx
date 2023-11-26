'use client'
import { useEffect, useState } from 'react'


function StudentCard({ student }) {
  console.log(student)
  const [scoreAddition, setScoreAddition] = useState("");
  const [scoreSubstraction, setScoreSubstraction] = useState("");

  useEffect(() => {
    if (student.id_student) {
      fetch(`/api/studentsExam/addition/${student.id_student}`)
        .then((res) => res.json())
        .then((data) => {
          setScoreAddition(data.score);

          return fetch(`/api/studentsExam/substraction/${student.id_student}`)
        })
        .then((res) => res.json())
        .then((data) => {
          setScoreSubstraction(data.score);
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        })
    }
  }, []);

  return (
    <div className=" transition-all duration-500 ease-in-out hover:scale-105 bg-orange-500 p-3 hover:bg-orange-800 hover:cursor-pointer hover:text-white">
        <h3 className=" font-bold text-3xl mb-2 text-white">Nombre: {student.fullname}</h3>
        <h3 className=" font-semibold text-xl mb-2">Correo: {student.email}</h3>
        <h3 className=" font-semibold text-xl mb-2">Score Sumas: {scoreAddition}</h3>
        <h3 className=" font-semibold text-xl mb-2">Score Restas: {scoreSubstraction}</h3>
    </div>
  )
}

export default StudentCard