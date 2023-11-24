'use client'
import {useRouter} from 'next/navigation'

function StudentCard({ student }) {
  return (
    <div className=" bg-slate-900 p-3 hover:bg-slate-800 hover:cursor-pointer">
        <h3 className=" font-bold text-2xl mb-2">{student.fullname}</h3>
        <h3 className=" font-bold text-2xl mb-2">{student.email}</h3>
    </div>
  )
}

export default StudentCard