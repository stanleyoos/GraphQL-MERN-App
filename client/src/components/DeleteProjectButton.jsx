import { FaTrash } from "react-icons/fa"
import { DELETE_PROJECT } from "../mutations/projectMutation"
import { useMutation } from "@apollo/client"
import { GET_PROJECTS } from "../queries/projectQueries"
import { useNavigate } from "react-router-dom"

const DeleteProjectButton = ({ projectId }) => {
  const navigate = useNavigate()

  const [deleteProject] = useMutation(DELETE_PROJECT, {
    variables: { id: projectId },
    refetchQueries: [{ query: GET_PROJECTS }],
    onCompleted: () => navigate("/"),
  })
  return (
    <button onClick={deleteProject} className="btn btn-light mt-3">
      <FaTrash /> Delete
    </button>
  )
}

export default DeleteProjectButton
