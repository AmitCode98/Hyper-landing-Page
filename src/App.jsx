import React from 'react'
import Nav from './components/Nav';
import { Hero, Brands } from './sections';

const App = () => {
  return (
    <main className='relative'>
      <Nav />
      <section>
        <Hero />
      </section>
      <section>
        <Brands />
      </section>

    </main>
  )
}

export default App;
