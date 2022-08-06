import './style.css'

import { Card } from '../../components/Card'

export function Home() {

  return (
    <div className="container">
      <h1>Lista de Presença</h1>
      <input type="text" placeholder="Digite o nome..." />
      <button type="button">Adicionar</button>

      <Card name="Alois" time="10:55:25" />
      <Card name="Stephan" time="11:05:20" />
    </div>
  )
}
