 import db from "@/libs/db";
 import StudentCard from "@/components/StudentCard";



async function PageGroup({ params }) {

    const students = await db.students.findMany({
            where:{
                id_group: params.id_groups,
            },
        });

console.log('soy students')
console.log(students)
  return (
    <section className="container mx-auto h-screen">
      <div className="grid grid-cols-3 gap-3 mt-10">
        {students.map((student) => (
          <StudentCard student={student} key={student.id_group}/>
        ))}

      </div>
    </section>
  )
}

export default PageGroup