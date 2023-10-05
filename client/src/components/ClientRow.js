import { FaTrash } from "react-icons/fa"

const ClientRow = ({ client }) => {
  const deleteClient = () => {
    console.log("delete")
  }
  return (
    <tr>
      <td>{client.name}</td>
      <td>{client.email}</td>
      <td>{client.phone}</td>
      <td>
        <button className="btn btn-danger btn-sm" onClick={deleteClient}>
          <FaTrash />
        </button>
      </td>
    </tr>
  )
}
export default ClientRow
