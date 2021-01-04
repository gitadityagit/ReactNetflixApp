import React from 'react'
import './App.css'
import Card from './Card'
import array from './Array'

function App() {
  return (
    <>
      <div>
        <h2 className='heading'>list of top 6 netflix series in 2020</h2>
      </div>

      {array.map((val) => {
        return (
          <Card imgsrc={val.imgsrc}
            title={val.title}
            text={val.text}
            link={val.link} />
        )
      })}
    </>
  );
}



export default App;
