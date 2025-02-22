export function NavNextPage(props) {
  return (
    <header className="d-flex justify-content-between align-items-center">
      <p>pagina: {props.page}</p>
      {props.page === 42 ? 
      <button onClick={() => props.setPage(props.page + 1)}
      className="btn btn btn-outline-info btn-sm" disabled>Pagina {props.page + 1}</button>      
    :
    <button onClick={() => props.setPage(props.page + 1)}
      className="btn btn btn-outline-info btn-sm">Pagina {props.page + 1}</button>
    }
    </header>
  )
}