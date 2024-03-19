// Import the gql function from the Apollo Client library
import { gql } from '@apollo/client';

// Define a GraphQL query for fetching the user's information, including saved books
// This query takes the user's ID as input parameter
// It returns the user's ID, username, email, book count, and an array of saved books
export const GET_ME = gql`
  query me($_id: ID!) {
    me(userId: $_id) {
        _id
        username
        email
        bookCount
        savedBooks {
            bookId
            title
            description
            authors
            image
            link
        }
    }
  }
`;
