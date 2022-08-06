import './style.css'

import { Card } from '../../components/Card'

export function Home() {

  function handleNameChange(name) {
    console.log(name)
  }

  return (
    <div className="container">
      <h1>Lista de Presença</h1>

      <input
        type="text"
        placeholder="Digite o nome..."
        onChange={e => handleNameChange(e.target.value)}
      />

      <button type="button">Adicionar</button>

      <Card name="Alois" time="10:55:25" />
      <Card name="Stephan" time="11:05:20" />
    </div>
  )
}
