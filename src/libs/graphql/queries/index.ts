import gql from 'graphql-tag';


export const GET_CONFERENCES = gql`
  query GetConferences {
    conferences {
    id
    startDate
    name
    slogan
  }
  }
`;


export const GET_CONFERENCE = gql`
  query GetConference($id: ID!) {
    conference(id: $id) {
      id
      startDate
      name
      slogan
      organizers {
        name
        aboutShort
        image {
          url
        }
      }
      sponsors {
        name
        aboutShort
        image {
          url
        }
      }
      schedules {
        day
        location {
          name
          about
          city
          address
        }
        intervals {
          sessions {
            title
            day
            begin
            end
          }
        }
      }
      speakers {
        name
        aboutShort
        image {
          url
        }
      }
    }
  }
`;

