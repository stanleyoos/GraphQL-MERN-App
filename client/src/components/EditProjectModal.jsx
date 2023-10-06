import { FaEdit } from "react-icons/fa"
import { useState } from "react"
import { UPDATE_PROJECT } from "../mutations/projectMutation"
import { useMutation } from "@apollo/client"
import { GET_PROJECT } from "../queries/projectQueries"

const EditProjectModal = ({ project }) => {
  const [name, setName] = useState(project.name)
  const [description, setDescription] = useState(project.description)
  const [status, setStatus] = useState(() => {
    switch (project.status) {
      case "Not Started":
        return "new"
      case "In Progress":
        return "progress"
      case "Completed":
        return "completed"
      default:
        throw new Error(`Unknown status: ${project.status}`)
    }
  })

  const [updateProject] = useMutation(UPDATE_PROJECT, {
    variables: { id: project.id, name, description, status },
    refetchQueries: [{ query: GET_PROJECT, variables: { id: project.id } }],
  })

  const onSubmit = () => {
    if (name === "" || description === "" || status === "")
      return alert("Fill all fields!")

    updateProject(name, description, status)
  }
  return (
    <>
      <button
        data-bs-toggle="modal"
        data-bs-target="#editProjectModal"
        className="btn btn-light me-3"
      >
        <FaEdit /> Edit
      </button>

      <div
        className="modal fade"
        id="editProjectModal"
        aria-labelledby="editProjectModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="editProjectModalLabel">
                Edit Project
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form onSubmit={onSubmit}>
                <div className="mb-3">
                  <label className="form-label">Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Description</label>
                  <textarea
                    className="form-control"
                    id="description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                  ></textarea>
                </div>
                <div className="mb-3">
                  <label className="form-label">Status</label>
                  <select
                    className="form-select"
                    id="status"
                    value={status}
                    onChange={(e) => setStatus(e.target.value)}
                  >
                    <option value="new">Not started</option>
                    <option value="progress">In progress</option>
                    <option value="completed">Completed</option>
                  </select>
                </div>

                <div className="d-flex justify-content-center">
                  <button
                    type="submit"
                    data-bs-dismiss="modal"
                    className="btn btn-secondary"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default EditProjectModal
