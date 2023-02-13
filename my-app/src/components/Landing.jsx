import React from 'react'
import ItemListContainer from './ItemListContainer'
import NavBar from './NavBar/NavBar'

const Landing = () => {
  return (
    <div>
      <NavBar/>
      <ItemListContainer greeting="¡Bienvenido/a a nuestra tienda virtual!"/>
    </div>
  )
}

export default Landing
