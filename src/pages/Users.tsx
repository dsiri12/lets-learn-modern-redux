  
import { Link } from "react-router-dom"
import { useGetUsersQuery } from "../services/usersApiSlice"

const Users = () => {
  const { data: users = [], isFetching, isError } = useGetUsersQuery()
  return (
    <div>
      <h2>Users:</h2>

      {isFetching && <p>Loading...</p>}

      {isError && <p>Oops, something went wrong.</p>}

      {users &&
        users.map((user) => (
          <div key={user.id}>
            <Link to={`/users/${user.id}`}>{user.name}</Link>
          </div>
        ))}
    </div>
  )
}

export default Users