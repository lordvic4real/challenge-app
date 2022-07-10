import React from 'react'

export const Transactions = ({name, status, date, id, type}) => {
  return (
      <>
          <div>
          <h3>{name}</h3>
          <p>{type}</p>
          <p>{date}</p>
          <p>{status}</p>
        </div>
          
      </>
  )
}
