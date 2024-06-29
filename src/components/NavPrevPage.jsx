export function NavPrePage(props) {
  return (
    <header className="d-flex justify-content-between align-items-center">
      <p>pagina: {props.page}</p>
      {props.page === 1 ?
        <button onClick={() => props.setPage(props.page - 1)}
      className="btn btn btn-outline-info btn-sm" disabled>Pagina anterior</button>:
      <button onClick={() => props.setPage(props.page - 1)}
      className="btn btn btn-outline-info btn-sm">Pagina anterior</button>
      }
    </header>
  )
}