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
                    ¡Bienvenidos a la fascinante exploración del mundo de las sumas! La suma, en el emocionante universo de las matemáticas, es como un asombroso juego donde combinamos números para descubrir cuánto tenemos en total.
                </p>
                <div className="flex flex-row items-center justify-between mx-auto bg-violet-600 w-1/2 rounded-xl shadow-lg">
                    <div className="flex flex-row w-full m-1 justify-evenly">
                        <img className="w-1/5" src="/images/candy_1.png" alt="" />
                        <img className="w-1/5" src="/images/candy_1.png" alt="" />
                        <img className="w-1/5" src="/images/candy_1.png" alt="" />
                    </div>
                    <div>
                        <img className="w-1/5 justify-evenly mx-auto" src="/images/signo_suma.png" alt="" />
                    </div>
                    <div className="flex flex-row w-full mx-auto justify-evenly">
                        <img className="w-1/5" src="/images/candy_2.png" alt="" />
                        <img className="w-1/5" src="/images/candy_2.png" alt="" />
                        <img className="w-1/5" src="/images/candy_2.png" alt="" />
                        <img className="w-1/5" src="/images/candy_2.png" alt="" />
                    </div>
                </div>
                <p className="p-4 my-2 mx-10">
                    Piénsalo de esta manera: si tienes 3 caramelos y alguien amable te da 4 caramelos más, ¿cuántos caramelos tendrás en total? La suma es la herramienta mágica que toma esos 3 y los combina con los 4 nuevos, ¡y voilà!, descubres que ahora tienes 7 caramelos. Es como si la suma fuera el capitán de un equipo, reuniendo a todos los números para mostrar cuánto es la cantidad total.
                </p>
                <div className="flex flex-col">
                    <div className="flex grid-cols-3 items-center justify-evenly mx-auto bg-violet-600 w-1/2 h-1/3 rounded-xl">
                        <div className="text-6xl text-center font-serif text-white">
                            <p>
                                7
                            </p>
                        </div>
                            <div className="w-2/3">
                            <div className="flex flex-row w-full m-1 justify-evenly">
                                <img className="w-1/5" src="/images/candy_1.png" alt="" />
                                <img className="w-1/5" src="/images/candy_1.png" alt="" />
                                <img className="w-1/5" src="/images/candy_1.png" alt="" />
                            </div>
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
                    Así que, si alguna vez te has preguntado cómo se juntan los números y revelan su misterioso secreto, estás a punto de descubrirlo. ¡Prepárate para sumergirte en el mundo encantado de las sumas y aprender cómo hacer que los números trabajen juntos para hacer las matemáticas más divertidas y emocionantes! ¡Comencemos esta emocionante aventura matemática!
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
                        <a href="/auth/users/students/games/addition">
                            <button className="bg-orange-500 p-2 mx-2 rounded-full">
                                Juego de Sumas
                            </button>
                        </a>
                        <a href="/auth/users/students/quizes/addition">
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
