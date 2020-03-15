import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
      <h1 className="py-4">Cuentas Coquetas</h1>
      <p>By Luis Portanel, <b>Sr. Front-end Developer</b> (<a href="mailto:luis@portanel.com">luis@portanel.com</a>)</p>
      <p>This is a proof of concept to show all the knowledge I have on React and all the Frontend Stack in general.</p>
      <p>This entire project was created in just <b>2 hours</b> (you can check that running <code>git log</code>).</p>

      <h2 className="pt-4">Functionality</h2>
      <h3>Pokelist</h3>
      <p>When you navigate to <code><Link to="/pokelist">/pokelist</Link></code> an initial call is made to the PokéAPI to retrieve the first 30 pokemon.</p>
      <p>That result is saved on the <code>store</code> along with the <code>loadMoreUrl</code> to retrieve the next 30 pokemon. The PokeList component then uses that stored information to render the pokemon and the <span className="badge badge-primary">Load More</span> button.</p>
      <p>When the user clicks on <span className="badge badge-primary">Load More</span>, the <code>loadMoreUrl</code> is updated, which triggers another fetch for the next 30 pokemon. The result of that call is added to the store and the <code>loadMoreUrl</code> is also saved.</p>
      <p>Thanks to that, when the component is unmounted and mounted again (by leaving the page), all the pokemon that have been retrieved are rendered again.</p>

      <h3>Pokemon by number</h3>
      <p>When the user click on a pokemon, it navigates to the <Link to="/pokemon/282">/pokemon/:number</Link> page, where the <code>pokemonNumber</code> is retrieved from the url.</p>
      <p>When the page loads, it looks for the pokemon information on the store, if its not found, it is fetched and then saved to the store.</p>
      <p>Then the <code>Pokemon</code> component is rendered using the pokemon information on the state and adds animation to the sprite.</p>

      <h2 className="pt-4">Dependencies</h2>
      <p>This project was created with Create React App as a base.</p>
      <p>Then, lost of dependencies were installed to add awesome functionality like:</p>
      <ul>
        <li><b>React Redux</b>: To create the store as a single source of truth.</li>
        <li><b>Redux Thunk</b>: To manage asyncronous dispatch of actions.</li>
        <li><b>Redux DevTools Extension</b>: To debug the store on the browser.</li>
        <li><b>React Router</b>: To implement routing and history.</li>
        <li><b>EsLint</b>: To generate a standarized code.</li>
        <li><b>Flow</b>: To add static typing.</li>
        <li><b>Axios</b>: To make reliable calls to PokéAPI.</li>
        <li><b>React Spring</b>: To implement animations.</li>
        <li><b>Bootstrap</b>: To quickly add cool styles.</li>
      </ul>
    </div>
  )
}

export default Home
