import { gql } from "@apollo/client"

const ADD_PROJECT = gql`
  mutation addProject(
    $name: String!
    $description: String!
    $status: ProjectStatus!
    $clientId: ID!
  ) {
    addProject(
      name: $name
      description: $description
      status: $status
      clientId: $clientId
    ) {
      id
      name
      description
      status
      client {
        id
        name
        email
        phone
      }
    }
  }
`

// schema.js line 111
//  GraphQLEnumType with name ProjectStatus
// status: {
//     type: new GraphQLEnumType({
//       name: "ProjectStatus",
//       values: {
//         new: { value: "Not Started" },
//         progress: { value: "In Progress" },
//         completed: { value: "Completed" },
//       },
//     }),
//     defaultValue: "Not Started",
//   },

const DELETE_PROJECT = gql`
  mutation deleteProject($id: ID!) {
    deleteProject(id: $id) {
      id
      name
      description
    }
  }
`

export { ADD_PROJECT, DELETE_PROJECT }
