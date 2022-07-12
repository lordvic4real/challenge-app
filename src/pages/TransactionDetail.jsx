import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
// import { Transactions } from '../components/Transactions'
import { data } from '../data/transaction'

const Container = styled.div`
   background:inherit;
   display: flex,
   justify-items: center;
   flex-direction:column;
   padding: 150px 0 100px 10%;
  table {
    border-collapse: collapse;
    border: 2px solid rgb(200, 200, 200);
    letter-spacing: 1px;
    font-size: 0.8em;
    text-transform: capitalize;
  }

  table th,
  td {
    border: 1px solid rgb(190, 190, 190);
    padding: 10px 20px;
  }

  td {
    text-align: center;
  }
  tr:nth-child(even) {
    background-color: #fafafa;
  }
  .input-container{
    max-width:850px;
    padding:30px;
  }
  input {
  border: 2px solid;
  border-radius: 14px;
  font-size: 1rem;
  margin: 0.25rem;
  min-width: 300px;
  padding: 0.99rem;
  transition: background-color 0.5s ease-out;
  box-shadow: 0 3px 4px rgba(0, 0, 0, 0.15);
  border:none;
 

}


`

const TransactionDetail = () => {
  const [searchTerm, setSearchTerm] = useState('')

  useEffect(() => {
     const filteredData = data?.filter((transactions) => transactions.name.toLowerCase().includes(searchTerm))
    setSearchTerm(filteredData )
  }, [])
  
  // console.log(data.filter(item => data[0].name.includes("bill")))
  return (
    <Container>
      <div className="input-container">
        <input
          type="text"
          placeholder="search"
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <table>
        <thead>
          <tr>
            <th style={{ color: 'darkred' }}> Date</th>
            <th style={{ color: 'darkred' }}>Transaction Type</th>
            <th style={{ color: 'darkred' }}>Name</th>
            <th style={{ color: 'darkred' }}>Status</th>
            <th style={{ color: 'darkred' }}>Category</th>
            <th style={{ color: 'darkred' }}>transaction Id</th>
          </tr>
        </thead>
        <tbody>
          {data &&
            data.filter((item) => (item.name && item.category && item.status).toLowerCase().includes(searchTerm))
              .map(({ name, status, date, category, type, transaction_id, }) => (
                <tr key={transaction_id}>
                  <td>{date}</td>
                  <td>{type}</td>
                  <td>{name}</td>
                  <td>{status}</td>
                  <td>{category}</td>
                  <td>{transaction_id}</td>
                </tr>
              ))}
        </tbody>
      </table>
    </Container>
  )
}

export default TransactionDetail
