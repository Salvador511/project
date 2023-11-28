'use client'

import React from "react"

export default function Home() {
  return (
    <main className="items-center justify-center bg-[url('/images/background.avif')] bg-fixed bg-cover">
        <div className="flex lg:flex-row text-justify">
        <div className="w-full">
        <div className="bg-sky-400 p-2 m-8 lg:shadow-2xl rounded-lg max-sm:w-11/12 text-center items-center justify-center max-sm:m-3 max-sm:px-1 max-md:grid lg:flex lg:grid-flow-col" suppressHydrationWarning>
            <h1 className="text-center md:text-7xl max-sm:text-2xl w-1/2 max-lg:w-full font-serif">Aventura Matemática: Sumando con Diversión</h1>
                <div className="flex flex-col">
                <video className="mx-auto rounded-lg shadow-lg" src="/videos/sumasv.mp4" height={720} width={480} controls></video>
                <a className="text-blue-600 transition-all duration-300 hover:text-orange-700 hover:underline" href="https://www.youtube.com/watch?v=jYdqkIp90UY&ab_channel=MundoPrimaria">Ir al video</a>
                    <a className="text-blue-600 hover:text-orange-700 transition-all duration-300 hover:underline" href="https://www.youtube.com/@MundoprimariaMP">Creado por Mundo Primaria</a>
                </div>
            </div>
            <div className="bg-slate-100 text-xl m-8 rounded-xl shadow-lg shadow-black">
                <p className="max-md:m-4 p-8 my-2 mx-10">
                    ¡Bienvenidos al emocionante mundo de las restas! La resta es como realizar un truco de magia matemática para descubrir cuántas cosas aún tienes después de compartir con tus amigos. Imagina que tu tesoro está lleno de lápices o dulces, y decides ser generoso compartiendo algunos. La resta entra en escena para revelar cuántos aún conservas.
                </p>
                <div className="grid grid-flow-col max-md:grid-flow-row items-center justify-between mx-auto bg-blue-600 w-3/4 rounded-xl shadow-lg">
                    <div className="w-full grid grid-flow-row m-1 justify-evenly mx-auto">
                       <div className="grid grid-flow-col justify-center items-center mx-auto">
                       <img className="w-full" src="/images/candy_1.png" alt="" />
                        <img className="w-full" src="/images/candy_1.png" alt="" />
                        <img className="w-full" src="/images/candy_1.png" alt="" />
                        <img className="w-full" src="/images/candy_1.png" alt="" />
                       </div>
                        <div className="grid grid-flow-col justify-center items-center mx-auto">
                        <img className="w-full" src="/images/candy_1.png" alt="" />
                        <img className="w-full" src="/images/candy_1.png" alt="" />
                        <img className="w-full" src="/images/candy_1.png" alt="" />
                        </div>
                    </div>
                    <div>
                        <img className="w-1/3 justify-evenly mx-auto" src="/images/signo_resta.png" alt="" />
                    </div>
                    <div className="w-full grid grid-flow-col m-1 justify-evenly mx-auto">
                        <img className="w-full" src="/images/candy_2.png" alt="" />
                        <img className="w-full" src="/images/candy_2.png" alt="" />
                        <img className="w-full" src="/images/candy_2.png" alt="" />
                    </div>
                </div>
                <p className="max-md:m-4 p-4 my-2 mx-10">
                Pongamos un ejemplo: tienes una caja con 7 caramelos, pero decides darle a tu amigo 3 caramelos. ¿Cuántos caramelos te quedan ahora? La resta es como la varita mágica que toma los 7 caramelos iniciales y, ¡puff!, resta los 3 que diste a tu amigo. ¡Restas 3 a 7 y obtienes 4! Ahora, de manera asombrosa, te quedan 4 caramelos.
                </p>
                <div className="flex flex-col mx-auto items-center justify-center text-center">
                    <div className="flex grid-cols-2 items-center justify-evenly mx-auto bg-blue-600 w-3/4 h-2/3 rounded-xl">
                        <div className="max-lg:text-4xl lg:text-6xl text-center font-serif text-white">
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
                <p className="max-md:m-4 p-4 my-2 mx-10">
                La resta es como la habilidad de quitar cosas de una manera matemática. Comienzas con la cantidad total y luego restas lo que decides compartir. ¡Es como un acto de magia matemática que revela cuántas cosas tienes después de ser generoso! ¿Listos para explorar este fascinante mundo de las restas y descubrir cómo hacer que los números jueguen al escondite? ¡Vamos a embarcarnos en esta emocionante aventura matemática juntos!
                </p>
            </div>
            <div className="max-lg:hidden flex flex-row justify-between">
                <div>
                    <a className="items-center justify-center" href="/auth/users">
                            <button className="bg-sky-500  font-medium text-center rounded-lg m-4 py-1 shadow-lg items-center shadow-black justify-center w-full hover:shadow-inner hover:shadow-black hover:bg-sky-700 hover:text-gray-900 text-white transition-all duration-500">
                                Regresar
                            </button>
                        </a>
                </div>
                <div>
                    <div className="flex flex-row justify-around m-3">
                        <a className="items-center justify-center" href="/auth/users/students/games/substraction">
                            <button className="bg-sky-500  font-medium text-center rounded-lg mx-4 py-1 shadow-lg items-center shadow-black justify-center w-3/5 hover:shadow-inner hover:shadow-black hover:bg-sky-700 hover:text-gray-900 text-white transition-all duration-500">
                                Juego de Restas
                            </button>
                        </a>
                        <a className="items-center justify-center" href="/auth/users/students/quizes/substraction">
                            <button className="bg-sky-500  font-medium text-center rounded-lg p-2 shadow-lg items-center justify-center w-full shadow-black hover:shadow-inner hover:shadow-black hover:bg-sky-700 hover:text-gray-900 text-white transition-all duration-500">
                                Examen
                            </button>
                        </a>
                    </div>
                </div>
            </div>
            <div className="lg:hidden flex flex-row items-center justify-around my-2">
    
                    <a className="items-start justify-start" href="/auth/users">
                            <button className="bg-sky-500 text-lg font-medium text-center rounded-lg shadow-lg items-center justify-center w-full p-1 hover:shadow-inner hover:shadow-black hover:bg-sky-700 hover:text-gray-900 text-white transition-all duration-500">
                                Regresar
                            </button>
                        </a>
                        <a className="items-center justify-center" href="/auth/users/students/games/substraction">
                            <button className="bg-sky-500  font-medium text-center rounded-lg shadow-lg items-center justify-center w-full p-1 hover:shadow-inner hover:shadow-black hover:bg-sky-700 hover:text-gray-900 text-white transition-all duration-500">
                                Juego de Restas
                            </button>
                        </a>
                        <a className="items-end justify-end" href="/auth/users/students/quizes/substraction">
                            <button className="bg-sky-500  font-medium text-center rounded-lg shadow-lg items-center justify-center w-full p-1 hover:shadow-inner hover:shadow-black hover:bg-sky-700 hover:text-gray-900 text-white transition-all duration-500">
                                Examen
                            </button>
                        </a>
                
            </div>
        </div>
        </div>
    </main>
  )
}
