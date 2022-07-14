import React, { useEffect, useState} from 'react'
import styled from 'styled-components'
// import { data } from '../data/transaction'
import { useQuery } from '@apollo/client';
import { GET_USERS } from '../api/client';



const Container = styled.div`
   background:inherit;
   display: flex;
   justify-content: center;
   flex-direction:column;
   padding:  100px 10%;
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
    /* max-width:850px; */
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

filter-con h1{
  text-align:left;
}


`

const TransactionDetail = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [allUsers, setAllUsers] = useState([])
  const {  loading: allUsersLoading,
    error: allUsersError,
    data: allUsersData, } = useQuery(GET_USERS);
  
    useEffect(() => {
      if (allUsersData) {
        setAllUsers(allUsersData?.users?.data);
      }
   
    }, [allUsersData, allUsersLoading, allUsersError]);
  
    if (allUsersLoading) return <p>Loading...</p>;
    if (allUsersError) return <p>Error :(</p>;
  
    // const search = (allUsers) => {
    //   return allUsers.filter((user) => user.name.toLowerCase().includes(searchTerm))
    // }
  
  return (
    <Container>
      <div className='filter-con'>
           <h1>filter by name</h1>
      </div>
      <div className="input-container">
        <input
          type="text"
          placeholder="search name...."
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <table>
        <thead>
          <tr>
            <th style={{ color: 'darkred' }}>Name</th>
            <th style={{ color: 'darkred' }}>Company</th>
            <th style={{ color: 'darkred' }}>Website</th>
            <th style={{ color: 'darkred' }}>Username</th> 
          </tr>
        </thead>
        <tbody>
          {allUsers &&
            allUsers.filter((item) => item.name.toLowerCase().includes(searchTerm)).map(({ name, id,company, website, username}) => (
                <tr key={id}>
                <td>{name}</td>
                <td>{company?.name}</td>
                <td>{website}</td>
                <td>{username}</td>  
                </tr>
              ))}
        </tbody>
      </table>
    </Container>
  )
}

export default TransactionDetail
