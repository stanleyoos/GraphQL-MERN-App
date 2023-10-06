import { useParams } from "react-router-dom"

const Project = () => {
  const { id } = useParams()
  return (
    <div>
      <h1>Project with ID: {id}</h1>
    </div>
  )
}

export default Project
