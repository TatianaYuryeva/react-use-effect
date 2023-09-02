import { useEffect, useState } from "react"

function Details({info}) {
  const[userDetails, setUserDetails] = useState({})

  const fetchDetails = async (id) => {
    const response = await fetch(
      `https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/${id}.json`
      )
      const data = await response.json()
      setUserDetails(data)
    }

    useEffect (() => {
      fetchDetails(info.id)
    }, [info.id])

    return (
      <div className="details">
        <img src={userDetails.avatar} alt="user avatar" />
        <div className="details__info">
          <div className="details__info__item details__info__name">{userDetails.name}</div>
          <div className="details__info__item">City: {userDetails.details ? userDetails.details.city : undefined}</div>
          <div className="details__info__item">Company: {userDetails.details ? userDetails.details.company : undefined}</div>
          <div className="details__info__item">Position: {userDetails.details ? userDetails.details.position : undefined}</div>
        </div>
      </div>
    )
}

export default Details