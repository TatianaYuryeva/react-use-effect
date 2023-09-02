function List({users, onSelectUser}) {

  return (
    <>
      <ul className="list">
        {users.map(user => (
            <li className="list__item" onClick={() => onSelectUser({id: user.id, name: user.name})} key={user.id}>
              {user.name}
            </li>
          ))}
      </ul>
    </>
  )
}

export default List