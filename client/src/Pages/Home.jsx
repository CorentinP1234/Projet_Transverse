import React, {useEffect, useState} from 'react'

export default function Home() {
  const [backendData, setBackendData] = useState([{}])

  useEffect(() => {
    // fetch("/api")
    // fetch('http//localhost:5000/api')
    fetch('test')
    .then(
      response => {response.json(); console.log(response)}
    ).then(
      data => {
        // setBackendData(data)
        console.log(data)
      }
    )
  }, [])

  return (
    <div className="Container">
      <div className="shift" style={{ height: 43 }}></div>

      {/* Construire la page Home ici : */}
      <div style={{ backgroundColor: 'grey' }}>
        <h1>Home Page</h1>
      </div>

    </div>
  );
}