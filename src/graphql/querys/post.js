import gql from 'graphql-tag'

//  ========== FEED ===========
export const FETCH_FEED = gql`
query getFeed ($limit: Int, $skip: Int) {
  getPosts(limit: $limit, skip: $skip) {
    id
    body
  }
}
`