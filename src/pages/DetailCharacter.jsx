import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom";

function DetailCharacter() {

  const [character, setCharacter] = useState({})
  const { id } = useParams()

  useEffect(() => {
   try {
    async function fetchData() {
      const res = await fetch(`https://rickandmortyapi.com/api/character/${id}`);
      const data = await res.json();
      console.log(data);
      setCharacter(data)
    }
    fetchData();
   } catch (error) {
    return error
   }
  },[])

  return (
    <div className="bg-dark text-white vh-100 container-fluid">
        <div className="row justify-content-center align-items-center">
          <div className="card col-lg-4 text-bg-dark border-0 p-5">
            <img src={character.image} className="card-img-top rounded-pill" alt={character.name}/>
            <div className="card-body text-center">
              <h5 className="card-title">{character.name}</h5>
              <p className="card-text">{character.species}</p>
              <p className="card-text">{character.gender}</p>
              <p className="card-text">{character.status}</p>
              <div>
                <Link to={'/'} className="btn btn-info fw-bolder text-secondary-emphasis btn-sm">Volver</Link>
              </div>
            </div>
        </div>
      </div>
    </div>
    )
}

export default DetailCharacter