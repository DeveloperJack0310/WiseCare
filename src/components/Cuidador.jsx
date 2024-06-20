const Cuidador = ({nome,age, xp,localidade}) => {
  return (
    <div>
        <h1>{nome}</h1>
        <p>Anos: {age}</p>
        <p>Tempo de experiência: {xp}</p>
        <p>Localidade: {localidade}</p>
    </div>
  )
}

export default Cuidador