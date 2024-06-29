import { useEffect, useState } from "react";
import Character from "./Character";
import { NavNextPage } from './NavNextPage'
import { NavPrePage } from "./NavPrevPage";


function CharacterList() {

  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);



  useEffect(() => {
     async function fetchData() {
      const response = await fetch(`https://rickandmortyapi.com/api/character?page=${page}`);
      const data = await response.json();
      setCharacters(data.results);
      setLoading(false)
     }
     fetchData();
    },[page])

  return (
    <div className="container">
      <NavNextPage page={page} setPage={setPage}/>
      <div className="row">
      {
        loading
        ? <div className="d-flex justify-content-center">
            <div className="spinner-border" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        : characters.map(character => {
          return (
           <div className="col-sm-4"  key={character.id}>
             <Character character={character}/> 
           </div>
         )
         })
      }
      </div>
      <NavPrePage page={page} setPage={setPage}/>
    </div>
  )
}

export default CharacterList