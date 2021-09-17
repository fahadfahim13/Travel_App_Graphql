import { gql } from "@apollo/client"

export const GET_HOLIDAYS_API = 'https://b2c-api.flightlocal.com/graphql'
export const GET_HOLIDAYS_QUERY = gql`
query holidays{
  getPackages(
    pagination: {
      skip: 0
      limit: 10
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
