import {  gql } from '@apollo/client';



export const GET_USERS = gql`
  query GetUsers {
    users {
        data {
          company{
            name
          }
          username
          id
          name
          email
          website
          address{
            geo{
              lat
              lng
            }
          }
        }
      }
  }
`;


