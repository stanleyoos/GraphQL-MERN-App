import React from "react"

const ProjectCard = ({ name, status }) => {
  return (
    <div className="col-md-6 mb-4">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title mb-3">{name}</h5>

          <p className="card-text">
            Status: <strong>{status}</strong>
          </p>
        </div>
      </div>
    </div>
  )
}

export default ProjectCard
