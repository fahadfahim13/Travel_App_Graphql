import { gql } from "@apollo/client"

export const GET_HOLIDAYS_API = 'https://b2c-api.flightlocal.com/graphql'
export const GET_HOLIDAYS_QUERY = (skip: number, limit: number) => gql`
query holidays{
  getPackages(
    pagination: {
      skip: ${skip}
      limit: ${limit}
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
mutation Login {
  loginClient (
    auth: {
      email: "devteam@saimonglobal.com"
      deviceUuid: "7026a238-d078-48b5-862b-c3c7d21d8712"
    }
    password: "12345678"
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