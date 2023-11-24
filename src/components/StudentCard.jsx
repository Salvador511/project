'use client'
import {useRouter} from 'next/navigation'

function StudentCard({ student }) {
  return (
    <div className=" transition-all duration-500 ease-in-out hover:scale-105 bg-orange-500 p-3 hover:bg-orange-800 hover:cursor-pointer hover:text-white">
        <h3 className=" font-bold text-3xl mb-2">{student.fullname}</h3>
        <h3 className=" font-semibold text-xl mb-2">{student.email}</h3>
    </div>
  )
}

export default StudentCard