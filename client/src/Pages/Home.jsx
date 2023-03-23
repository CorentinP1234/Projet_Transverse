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


const tiers = [
  {
    title: 'Journée porte ouverte',
    price: '2',
    description: [
      'date : 66 juin 2066',
      'heure : 10h15',
      'lieux : campus bordeau',
      'durée : 10h',
    ],
    buttonText: 'Je participe',
    buttonVariant: 'outlined',
  },
  {
    title: 'Tournoi de mathématiques',
    // subheader: 'Most popular',
    price: '3',
    description: [
      'date : 19 Mars 2022',
      'heure : 14H40',
      'lieux : Campus république',
      'durée : 2h',
    ],
    buttonText: 'Je participe',
    buttonVariant: 'outlined',
    //buttonVariant: 'contained',
  },
  {
    title: 'Voyage Bureau des sports',
    price: '5',
    description: [
      'date : 34/26 Avil',
      'heure : 8h10',
      'lieux : camping en Lozère',
      'durée : 2j',
    ],
    buttonText: 'Je participe',
    buttonVariant: 'outlined',
  },
];