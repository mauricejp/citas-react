const Formulario = () => {
  return (
    <div className="md:w-1/2 lg:h-2/5">
      <h2 className="font-black text-3xl text-center">Seguimiento de pacientes</h2>
      <p className=" text-lg mt-5 text-center mb-10 font-semibold">
        Añade pacientes y {''}
        <span className=" text-indigo-700 font-bold">Administralos</span>
      </p>

      <form className=" bg-white shadow-md rounded-lg px-4 py-8 mb-20">
        <div className=" mb-5">
          <label htmlFor="mascota" className="block text-gray-700 uppercase font-bold">
            Nombre de mascota</label>

          <input 
            id="mascota"
            type="text" 
            placeholder="Introduce el nombre"
            className=" border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-xl"
          />
        </div>
        
        <div className=" mb-5">
          <label htmlFor="propietario" className="block text-gray-700 uppercase font-bold">
            Nombre del propietario</label>

          <input 
            id="propietario"
            type="text" 
            placeholder="Introduce el nombre"
            className=" border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-xl"
          />
        </div>

        <div className=" mb-5">
          <label htmlFor="email" className="block text-gray-700 uppercase font-bold">
            Email</label>

          <input 
            id="email"
            type="email" 
            placeholder="Introduce tu email"
            className=" border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-xl"
          />
        </div>

        <div className=" mb-5">
          <label htmlFor="numero" className="block text-gray-700 uppercase font-bold">
            Número de teléfono</label>

          <input 
            id="numero"
            type="phone" 
            placeholder="Introduce tu numero de teléfono"
            className=" border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-xl"
          />
        </div>

        <div className=" mb-5">
          <label htmlFor="alta" className="block text-gray-700 uppercase font-bold">
            Alta</label>

          <input 
            id="alta"
            type="date" 
            className=" border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-xl"
          />
        </div>

        <div className=" mb-5">
          <label htmlFor="sintomas" className="block text-gray-700 uppercase font-bold">
            Sintomas</label>
            <textarea
              className=" border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-xl" 
              id="sintomas" 
              cols="30" 
              rows="10"
              placeholder="Describe los sintomas">
            </textarea>
        </div>

        <input 
            type="submit"
            className="bg-indigo-600 w-full p-5 rounded-lg text-2xl font-bold text-white uppercase hover:bg-indigo-700 cursor-pointer transition-all"
            value={'Agregar paciente'} />

      </form>

    </div>
  )
}

export default Formulario

