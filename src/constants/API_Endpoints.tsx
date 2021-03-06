import { gql } from "@apollo/client"

export const GET_HOLIDAYS_API = 'https://b2c-api.flightlocal.com/graphql'
export const GET_HOLIDAYS_QUERY = gql`
query holidays($skip: Int!, $limit: Int!){
  getPackages(
    pagination: {
      skip: $skip
      limit: $limit
    }
  )
  {
    statusCode
    message
    result {
      count
      packages {
        uid
        title
        startingPrice
        thumbnail
        amenities {
          title
          icon
        }
        discount {
          title
          amount
        }
        durationText
        loyaltyPointText
        description
      }
    }
  }
}`

export const LOGIN_API = gql`
mutation Login($email: String!, $password: String!) {
  loginClient (
    auth: {
      email: $email,
      deviceUuid: "7026a238-d078-48b5-862b-c3c7d21d8712"
    }
    password: $password
  )
  {
    message
    statusCode
    result {
      token
      refreshToken
      expiresAt
    }
  }
}`