
function Character({character}) {

  return (
<div className="card text-bg-dark text-center m-3 border-0">
        <img src={character.image} className="card-img-top rounded-pill" alt={character.name}/>
        <div className="card-body">
          <h5 className="card-title">{character.name}</h5>
          <p className="card-text">{character.origin.name}</p>   
        </div>
      </div>
  )
}

export default Character