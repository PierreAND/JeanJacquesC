import React from 'react'

const Navbar = () => {

  

  function replayService(n) {

     if (n > 6) {
      console.log("alright")
     } else {
      console.log("lesssss")
     }
  }
  console.log(replayService(5))
  return (
    <div >
      <nav>
        <ul className='liste_nav'>
          <li className= "item_nav">Accueil</li>
          <li className= "item_nav">Nos Produits</li>
          <li className= "item_nav">Guide</li>
          <li className= "item_nav">Contact</li>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar
