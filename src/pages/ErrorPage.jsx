import { Link } from "react-router-dom"

function ErrorPage() {
  return (
    <div className="vh-100 bg-dark text-white container-fluid">
      <div className="row m-0 vh-100 justify-content-center align-items-center">
        <div className="col-auto">
          <h2 className="fs-1 fw-bold text-center">OOPS!...</h2>
          <p className="fs-2 fw-bold">Page not found</p>
          <p className="fs-1 fw-bolder text-center text-info">404</p>
          <div className="d-flex justify-content-center">
            <Link
              to={'/'}
              className="btn btn-info fw-bolder text-secondary-emphasis btn-sm"
            >Volver..</Link></div>         
        </div>
      </div>
    </div>
  )
}

export default ErrorPage