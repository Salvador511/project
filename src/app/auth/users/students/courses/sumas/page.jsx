'use client'

import React from "react"

export default function Home() {
  return (
    <main className="items-center justify-center bg-[url('/images/background.avif')]">
         <div className="flex lg:flex-row text-justify">
        <div className="w-full">
            <div className="bg-rose-400 p-2 m-8 lg:shadow-2xl rounded-lg max-sm:w-11/12 text-center items-center justify-center max-sm:m-3 max-sm:px-1 max-md:grid lg:flex lg:grid-flow-col" suppressHydrationWarning>
            <h1 className="text-center md:text-7xl max-sm:text-2xl w-1/2 max-lg:w-full font-serif">Aventura Matemática: Sumando con Diversión</h1>
                <div className="flex flex-col">
                <video className="rounded-lg shadow-lg" src="/videos/restasv.mp4" height={720} width={480} controls></video>
                <a className="text-blue-600 transition-all duration-300 hover:text-orange-700 hover:underline" href="https://www.youtube.com/watch?v=k46QCr1GofU&ab_channel=MundoPrimaria">Ir al video</a>
                    <a className="text-blue-600 hover:text-orange-700 transition-all duration-300 hover:underline" href="https://www.youtube.com/@MundoprimariaMP">Creado por Mundo Primaria</a>
                </div>
            </div>
            <div className="bg-slate-100 m-8 rounded-xl shadow-lg shadow-black">
                <p className="max-md:m-4 p-4 my-2 mx-10">
                    ¡Bienvenidos a la fascinante exploración del mundo de las sumas! La suma, en el emocionante universo de las matemáticas, es como un asombroso juego donde combinamos números para descubrir cuánto tenemos en total.
                </p>
                <div className="grid grid-flow-col items-center justify-between mx-auto bg-red-600 w-1/2 rounded-xl shadow-lg">
                    <div className="lg:flex max-lg:grid grid-flow-col w-full m-1 justify-evenly">
                        <img className="max-lg:w-full w-1/5" src="/images/candy_1.png" alt="" />
                        <img className="max-lg:w-full w-1/5" src="/images/candy_1.png" alt="" />
                        <img className="max-lg:w-full w-1/5" src="/images/candy_1.png" alt="" />
                    </div>
                    <div>
                        <img className="w-1/5 justify-evenly mx-auto" src="/images/signo_suma.png" alt="" />
                    </div>
                    <div className="lg:flex max-lg:grid grid-flow-col w-full mx-auto justify-evenly">
                        <img className="max-lg:w-full w-1/5" src="/images/candy_2.png" alt="" />
                        <img className="max-lg:w-full w-1/5" src="/images/candy_2.png" alt="" />
                        <img className="max-lg:w-full w-1/5" src="/images/candy_2.png" alt="" />
                        <img className="max-lg:w-full w-1/5" src="/images/candy_2.png" alt="" />
                    </div>
                </div>
                <p className="max-md:m-4 p-4 my-2 mx-10">
                    Piénsalo de esta manera: si tienes 3 caramelos y tu amigo te regala 4 caramelos más, ¿cuántos caramelos tendrás en total? La suma es la herramienta mágica que toma esos 3 y los combina con los 4 nuevos, ¡y voilà!, descubres que ahora tienes 7 caramelos. Es como si la suma fuera el capitán de un equipo, reuniendo a todos los números para mostrar cuánto es la cantidad total.
                </p>
                <div className="flex flex-col">
                    <div className="flex grid-cols-3 items-center justify-evenly mx-auto bg-red-600 w-1/2 h-1/3 rounded-xl">
                        <div className="max-lg:text-4xl lg:text-6xl text-center font-serif text-white">
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
                <p className="max-md:m-4 p-4 my-2 mx-10">
                    Así que, si alguna vez te has preguntado cómo se juntan los números y revelan su misterioso secreto, estás a punto de descubrirlo. ¡Prepárate para sumergirte en el mundo encantado de las sumas y aprender cómo hacer que los números trabajen juntos para hacer las matemáticas más divertidas y emocionantes! ¡Comencemos esta emocionante aventura matemática!
                </p>
            </div>
            <div className="max-lg:hidden flex flex-row justify-between">
            <div>
                    <a className="items-center justify-center" href="/auth/users">
                        <button className="bg-rose-500 w-fit font-medium text-center rounded-lg m-4 p-3 shadow-lg shadow-black items-center justify-center hover:shadow-inner hover:shadow-black hover:bg-rose-700 hover:text-gray-900 text-white transition-all duration-500">
                            Regresar
                        </button>
                    </a>
                </div>
                <div>
                    <div className="flex flex-row justify-around m-3">
                        <a className="items-center justify-center" href="/auth/users/students/games/addition">
                            <button className="bg-rose-500  font-medium text-center rounded-lg m-4 p-3 shadow-lg items-center justify-center shadow-black w-fit hover:shadow-inner hover:shadow-black hover:bg-rose-700 hover:text-gray-900 text-white transition-all duration-500">
                                Juego de Sumas
                            </button>
                        </a>
                        <a className="items-center justify-center" href="/auth/users/students/quizes/addition">
                            <button className="bg-rose-500  font-medium text-center rounded-lg m-4 p-3 shadow-lg shadow-black items-center justify-center w-fit hover:shadow-inner hover:shadow-black hover:bg-rose-700 hover:text-gray-900 text-white transition-all duration-500">
                                Examen
                            </button>
                        </a>
                    </div>
                </div>
            </div>
            <div className="lg:hidden flex flex-row items-center justify-around my-2">
    
    <a className="items-start justify-start" href="/auth/users">
            <button className="bg-rose-500 text-lg font-medium text-center rounded-lg shadow-lg items-center justify-center w-full p-1 hover:shadow-inner hover:shadow-black hover:bg-rose-700 hover:text-gray-900 text-white transition-all duration-500">
                Regresar
            </button>
        </a>
        <a className="items-center justify-center" href="/auth/users/students/games/addition">
            <button className="bg-rose-500  font-medium text-center rounded-lg shadow-lg items-center justify-center w-full p-1 hover:shadow-inner hover:shadow-black hover:bg-rose-700 hover:text-gray-900 text-white transition-all duration-500">
                Juego de Sumas
            </button>
        </a>
        <a className="items-end justify-end" href="/auth/users/students/quizes/addition">
            <button className="bg-rose-500  font-medium text-center rounded-lg shadow-lg items-center justify-center w-full p-1 hover:shadow-inner hover:shadow-black hover:bg-rose-700 hover:text-gray-900 text-white transition-all duration-500">
                Examen
            </button>
        </a>

</div>
</div>
</div>
</main>
)
}
