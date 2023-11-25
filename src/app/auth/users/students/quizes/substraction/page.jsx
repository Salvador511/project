import React from 'react';

const App = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center w-full">
      <div className="bg-gray-200 p-8 rounded-lg shadow-lg  text-center w-5/6">
        <h1 className="lg:text-5xl max-lg:text-2xl font-bold mb-4">*INSTRUCCIONES PARA EL EXAMEN*</h1>
        <p className="lg:text-2xl max-lg:text-lg lg:m-10 max-lg:m-4 text-gray-700">A continuacion comenzaras el examen, no tendras limite de tiempo por lo que puedes tomarte tu tiempo para contestar cada pregunta, recuerda que una vez que respondas una pregunta no podras volver a la anterior, por lo que deberas estar seguro de que tu respuesta es correcta.</p>
      </div>
      <div className='flex flex-row justify-around w-full'>
      <a className="items-end justify-end" href="/auth/users/students/courses/restas">
            <button className="bg-sky-500 font-medium text-center rounded-lg shadow-lg items-center justify-center w-full py-2 px-4 hover:shadow-inner hover:shadow-black hover:bg-sky-700 hover:text-gray-900 text-white transition-all duration-500 mx-auto my-4">
                Regresar al curso
            </button>
        </a>
      <a className="items-end justify-end" href="/auth/users/students/quizes/substraction/exam">
            <button className="bg-sky-500 font-medium text-center rounded-lg shadow-lg items-center justify-center w-full py-2 px-4 hover:shadow-inner hover:shadow-black hover:bg-sky-700 hover:text-gray-900 text-white transition-all duration-500 mx-auto my-4">
                Examen
            </button>
        </a>
      </div>
    </div>
  );
};

export default App;
