import './globals.css';

export default function Home() {
  return (
    <section className='flex flex-col items-center justify-center h-full'>
      <div className='flex flex-row w-full relative'>
        <img className='w-1/2 h-auto' src="/images/landing1.jpg" alt="" />
        <img className='w-1/2 h-auto' src="/images/landing2.jpg" alt="" />
        <div className='absolute inset-0 flex items-center justify-center'>
          <div className='text-center text-black'>
            <h1 className='text-4xl font-bold mb-4 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-transparent bg-clip-text'>
              <span className='bg-transparent p-2'>ARITMOS</span>
            </h1>
            <a href="" className='bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600'>
              Regístrate ahora
            </a>
          </div>
        </div>
      </div>
      <div className='w-full flex flex-row bg-slate-800'>
        <div className='w-1/2 flex items-center justify-center'>
          <img className='h-full w-3/4' src="/images/logo-xl.png" alt="" />
        </div>
        <div className='flex flex-row w-1/2 text-center items-center text-white'>
          <div className='mx-6'>
            <h1 className='text-2xl my-1'>¿Quién es el equipo Aritmos?</h1>
            <p className='text-xl mb-6'>Somos un equipo apasionado por la educación y las matemáticas. En Aritmos, creemos que aprender matemáticas puede ser divertido y emocionante para los niños. Nuestro equipo está compuesto por educadores, diseñadores y desarrolladores comprometidos con hacer que el aprendizaje sea accesible y atractivo.</p>
            <h1 className='text-2xl my-1'>Nuestra Misión 🎯</h1>
            <p className='text-xl mb-2'>Queremos ayudar a los niños de primaria (7-8 años) a desarrollar una sólida comprensión de las matemáticas básicas a través de recursos educativos interactivos, juegos divertidos y lecciones envolventes.</p>
          </div>
        </div>
      </div>
      <div className='flex flex-row w-full justify-between text-center m-10'>
        <div className='shadow-black shadow-lg m-2 w-1/4 rounded-lg p-2 mx-2 flex flex-col items-center justify-center'>
          <h1>Líder y Fundador</h1>
          <img className='rounded-full mx-auto' src="/images/chavapic.jpeg" alt="" />
          <h2>Salvador Orozco González</h2>               
        </div>
        <div className='shadow-black shadow-lg m-2 w-1/4 rounded-lg p-2 mx-2 flex flex-col items-center justify-center'>
          <h1></h1>
          <img className='rounded-full mx-auto' src="/images/josepic.jpg" alt="" />
          <h2>Jose Salvador Sanchez Alarcon</h2>
        </div>
        <div className='shadow-black shadow-lg m-2 w-1/4 rounded-lg p-2 mx-2 flex flex-col items-center justify-center'>
          <h1></h1>
          <img className='rounded-full mx-auto' src="/images/raulpic.jpeg" alt="" />
          <h2>Raul Alejandro Muñiz</h2>
        </div>
        <div className='shadow-black shadow-lg m-2 w-1/4 rounded-lg p-2 mx-2 flex flex-col items-center justify-center'>
          <h1></h1>
          <img className='rounded-full mx-auto' src="" alt="" />
          <h2>Jesús Ernesto Fierro Sandoval</h2>
        </div>
      </div>
    </section>
  );
}
