import React from 'react'
import { Link } from 'react-router-dom'
import SliderHome from '../SliderHome/SliderHome'

const Main = () => {
  return (
    <div >
        <div className=" mx-96  bg-white">
  <div className="pb-80 pt-16 sm:pb-40 sm:pt-24 lg:pb-48 lg:pt-40">
    <div className="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
      <div className="sm:max-w-lg">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">Bienvenido/a , a nuestra tienda online oficial!</h1>
        <p className="mt-4 text-xl text-gray-500">Somos mas que una merceria, con mas de 50 años de experiencia en el rubro.Contribuyendo dia a dia con nuestros mejores productos.</p>
      </div>
      <div>
        <div className="mt-20">
          
          <div aria-hidden="true" className="pointer-events-none lg:absolute lg:inset-y-0 lg:mx-auto lg:w-full lg:max-w-7xl">
            <div className="absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8">
            
     
              
            </div>
          </div>

          <Link to='/productos' className="inline-block rounded-md border border-transparent bg-red-600 px-8 py-3 text-center font-medium text-white hover:bg-black">Shop Collection</Link>
        </div>
      </div>
    </div>
  </div>
</div>
    </div>
  )
}

export default Main