import { useParams } from "react-router-dom"

import { useGetUserQuery } from "../services/usersApiSlice"

const UserDetail = () => {
  // const { id } = useParams<{ id: string }>()
  const { id } = useParams() as any
  const { data: user, isFetching, isError } = useGetUserQuery(+id)

  return (
    <div>
      <h2>User:</h2>

      {isFetching && <p>Loading...</p>}

      {user && (
        <div>
          <h3>Name: {user.name}</h3>
          <h3>Email: {user.email}</h3>
          <h3>Phone: { user.phone}</h3>

          <p>
            Address: {user.address.street}, {user.address.suite},{" "}
            {user.address.city} {user.address.zipcode}
          </p>

        </div>
      )}

      {isError && <p>Oops, something went wrong.</p>}
    </div>
  )
}

export default UserDetail