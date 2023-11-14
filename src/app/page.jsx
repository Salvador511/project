import Link from 'next/link'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className='items-center justify-center '>
      <div className="w-fit h-fit text-xl m-3 justify-items-center">
            <div className='flex grid-flow-col grid-cols-2 h-1/2 justify-center items-center justify-items-center'>
                <div className='w-1/3'>
                    <img className='w-3/4 items-center justify-center justify-items-center' src="/images/logo-xl.png" alt="Logo" />
                </div>
                <div className='w-2/3 justify-center items-center justify-items-center text-center m-3'>
                    <h2>
                    En Aritmos, nos apasiona convertir el aprendizaje de las matemáticas en una experiencia divertida, emocionante y accesible para niños de primaria. Nuestro compromiso es ayudar a los pequeños a desarrollar una sólida base en matemáticas mientras se divierten y se sumergen en un mundo lleno de números y desafíos.
                    </h2>
                    <Link href='/views'>
                        <button className='w-2/3 bg-black rounded-full text-white my-3'>Inicia ahora</button>
                    </Link>
                </div>
            </div>
            <div className='flex grid-flow-col grid-cols-2 items-center justify-items-center justify-center h-1/2'>
                <div className='w-2/3 justify-center items-center justify-items-center text-center m-3'>
                    <p>
                    ¡Únete a la comunidad de Aritmos y descubre cómo las matemáticas pueden ser emocionantes y gratificantes! No importa si eres un principiante o un experto, estamos aquí para ayudarte a desbloquear el potencial de las matemáticas y mejorar tus habilidades en esta materia fundamental. ¡Comienza tu viaje con Aritmos hoy mismo y descubre que aprender matemáticas puede ser divertido y fácil!
                    </p>
                    <Link href='/views'>
                        <button className='w-2/3 bg-black rounded-full text-white items-center my-3'>Comienza ya</button>
                    </Link>
                </div>
                <div className='w-1/3'>
                    <img className='w-3/4
                    ' src="/gifs/joined/Plus&Moin-Idle.gif" alt="Logo" />
                </div>
            </div>
        </div>
    </main>
  )
}
