import { useEffect } from "react"

function DetailCharacter() {

  useEffect(() => {
   try {
    async function fetchData() {
      const res = await fetch('https://rickandmortyapi.com/api/character/2');
      const data = await res.json();
      console.log(data)
    }
    fetchData();
   } catch (error) {
    return error
   }
  },[])

  return (
    <div>DetailCharacter</div>
  )
}

export default DetailCharacter