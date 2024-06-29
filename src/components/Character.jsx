import { useParams } from "react-router-dom"

function Character({character}) {

 const parametros = useParams()
 console.log(parametros.id)
  return (
      <div className="text-center p-5">
        <h3>{character.name}</h3>
        <img className="img-fluid rounded-pill" src={character.image} alt={character.name} />
        <p className="m-2 fw-semibold">{character.origin.name}</p>
        <button onClick={()=>{
          console.log(character)
        }} className="btn btn-dark">Info..</button>
      </div>
  )
}

export default Character