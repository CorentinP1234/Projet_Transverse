import React, {useEffect, useState} from 'react'

export default function Home() {
  const [backendData, setBackendData] = useState([{}])

  useEffect(() => {
    fetch("/api")
    .then(
      response => response.json()
    ).then(
      data => {
        setBackendData(data)
      }
    )
  }, [])

  return (
    <div className="Container">
      <div className="shift" style={{ height: 43 }}></div>

      {/* Construire la page Home ici : */}
      <div style={{ backgroundColor: 'grey' }}>
        <h1>Home Page</h1>
        <p>L'object suivant a ete recuperer via une requette get envoye au server express</p>
        <p>{JSON.stringify(backendData)}</p>
      </div>

    </div>
  );
}