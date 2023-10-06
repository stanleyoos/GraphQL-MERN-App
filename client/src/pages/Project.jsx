import { useParams } from "react-router-dom"
import { useQuery } from "@apollo/client"
import { GET_PROJECT } from "../queries/projectQueries"
import Spinner from "../components/Spinner"
import { Link } from "react-router-dom"
import ClientInfo from "../components/ClientInfo"
import DeleteProjectButton from "../components/DeleteProjectButton"

const Project = () => {
  const { id } = useParams()
  const { loading, error, data } = useQuery(GET_PROJECT, {
    variables: { id },
  })

  if (loading) return <Spinner />
  if (error) return <p>Error!</p>
  return (
    <>
      {!loading && !error && (
        <div className="d-flex justify-content-center mt-5">
          <div className="card p-3" style={{ width: "28rem" }}>
            <div className="card-body">
              <div className="d-flex justify-content-between">
                <h1 className="mb-4">{data.project.name}</h1>
                <Link to={`/`}>
                  <button className="btn btn-light" style={{ height: "40px" }}>
                    Get back
                  </button>
                </Link>
              </div>
              <p className="card-text mb-4">{data.project.description}</p>
              <p className="card-text mb-4">
                Status: <strong>{data.project.status}</strong>
              </p>
              <ClientInfo client={data.project.client} />
              <DeleteProjectButton projectId={id} />
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default Project
