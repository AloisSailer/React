import React, { useState } from 'react'
import './style.css'

import { Card } from '../../components/Card'

export function Home() {
  const [studentName, setStudentName] = useState('Digite o nome...')

  return (
    <div className="container">
      <h1>Nome: {studentName}</h1>

      <input
        type="text"
        placeholder="Digite o nome..."
        onChange={e => setStudentName(e.target.value)}
      />

      <button type="button">Adicionar</button>

      <Card name="Alois" time="10:55:25" />
      <Card name="Stephan" time="11:05:20" />
    </div>
  )
}
