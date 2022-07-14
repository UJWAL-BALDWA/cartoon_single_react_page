import React from 'react';
import Sdata from "./Sdata";
import Mcard from "./Mcard";

const App = () => {
  return (
     <>

    <h1 className='Heading'> The Cartoon Zone!!! </h1>
    {Sdata.map(Mcard)}

    </>
  );
}

export default App;