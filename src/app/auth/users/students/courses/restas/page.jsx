'use client'

import React from "react"

export default function Home() {
  return (
    <main className='items-center justify-center'>
        <div className="flex max-sm:flex-col max-sm:grid-cols-1 flex-row md:grid-cols-2 text-justify">
        <div className="w-full">
            <div className="bg-violet-600 p-2 m-8 lg:shadow-2xl rounded-lg max-sm:w-11/12 items-center justify-center max-sm:m-3 max-sm:px-1 flex grid-flow-col" suppressHydrationWarning>
            <h1 className="text-center text-7xl w-1/2 font-serif">Aventura Matemática: Sumando con Diversión</h1>
                <video className="rounded-xl shadow-lg m-2 " width="640" height="360" controls>
                    <source src="/videos/Sabrina Carpenter - Feather (Official Video).mp4" type="video/mp4" />
                    Tu navegador no soporta el elemento de video.
                </video>
                
            </div>
            <div className="bg-slate-100 m-8 rounded-xl shadow-lg">
                <p className="p-4 my-2 mx-10">
                    ¡Bienvenidos al emocionante mundo de las restas! La resta es como realizar un truco de magia matemática para descubrir cuántas cosas aún tienes después de compartir con tus amigos. Imagina que tu tesoro está lleno de lápices o dulces, y decides ser generoso compartiendo algunos. La resta entra en escena para revelar cuántos aún conservas.
                </p>
                <div className="flex flex-row items-center justify-between mx-auto bg-violet-600 w-1/2 rounded-xl shadow-lg">
                    <div className="flex flex-row w-full m-1 justify-evenly">
                        <img className="w-1/5" src="/images/candy_1.png" alt="" />
                        <img className="w-1/5" src="/images/candy_1.png" alt="" />
                        <img className="w-1/5" src="/images/candy_1.png" alt="" />
                        <img className="w-1/5" src="/images/candy_1.png" alt="" />
                        <img className="w-1/5" src="/images/candy_1.png" alt="" />
                        <img className="w-1/5" src="/images/candy_1.png" alt="" />
                        <img className="w-1/5" src="/images/candy_1.png" alt="" />
                    </div>
                    <div>
                        <img className="w-1/5 justify-evenly mx-auto" src="/images/signo_resta.png" alt="" />
                    </div>
                    <div className="flex flex-row w-full mx-auto justify-evenly">
                        <img className="w-1/5" src="/images/candy_2.png" alt="" />
                        <img className="w-1/5" src="/images/candy_2.png" alt="" />
                        <img className="w-1/5" src="/images/candy_2.png" alt="" />
                    </div>
                </div>
                <p className="p-4 my-2 mx-10">
                Pongamos un ejemplo: tienes una caja con 7 caramelos, pero decides darle a tu amigo 3 caramelos. ¿Cuántos lápices te quedan ahora? La resta es como la varita mágica que toma los 7 caramelos iniciales y, ¡puff!, resta los 3 que diste a tu amigo. ¡Restas 3 a 7 y obtienes 4! Ahora, de manera asombrosa, te quedan 4 caramelos.
                </p>
                <div className="flex flex-col">
                    <div className="flex grid-cols-3 items-center justify-evenly mx-auto bg-violet-600 w-1/2 h-1/3 rounded-xl">
                        <div className="text-6xl text-center font-serif text-white">
                            <p>
                                4
                            </p>
                        </div>
                            <div className="w-2/3">
                            <div className="flex flex-row w-full mx-auto justify-evenly">
                                <img className="w-1/5" src="/images/candy_2.png" alt="" />
                                <img className="w-1/5" src="/images/candy_2.png" alt="" />
                                <img className="w-1/5" src="/images/candy_2.png" alt="" />
                                <img className="w-1/5" src="/images/candy_2.png" alt="" />
                            </div>
                            </div>
                    </div>
                </div>
                <p className="p-4 my-2 mx-10">
                La resta es como la habilidad de quitar cosas de una manera matemática. Comienzas con la cantidad total y luego restas lo que decides compartir. ¡Es como un acto de magia matemática que revela cuántas cosas tienes después de ser generoso! ¿Listos para explorar este fascinante mundo de las restas y descubrir cómo hacer que los números jueguen al escondite? ¡Vamos a embarcarnos en esta emocionante aventura matemática juntos!
                </p>
            </div>
            <div className="flex flex-row justify-between">
                <div>
                    <a href="/auth/users">
                        <button className="bg-orange-500 p-2 mx-2 rounded-full">
                            Regresar
                        </button>
                    </a>
                </div>
                <div>
                    <div className="flex flex-row justify-around m-3">
                        <a href="/auth/users/students/games/substraction">
                            <button className="bg-orange-500 p-2 mx-2 rounded-full">
                                Juego de Sumas
                            </button>
                        </a>
                        <a href="/auth/users/students/quizes/substraction">
                            <button className="bg-orange-500 p-2 mx-2 rounded-full">
                                Examen
                            </button>
                        </a>
                    </div>
                </div>
            </div>
        </div>
        </div>
    </main>
  )
}
