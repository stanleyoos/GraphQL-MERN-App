import { Link } from "react-router-dom"

const ProjectCard = ({ name, status, id }) => {
  return (
    <div className="col-md-6 mb-4">
      <div className="card">
        <div className="card-body">
          <div className="d-flex justify-content-between align-items-center">
            <h5 className="card-title mb-3">{name}</h5>
            <Link to={`/projects/${id}`}>
              <button className="btn btn-light">View more</button>
            </Link>
          </div>

          <p className="card-text">
            Status: <strong>{status}</strong>
          </p>
        </div>
      </div>
    </div>
  )
}

export default ProjectCard
