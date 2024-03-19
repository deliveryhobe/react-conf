import gql from 'graphql-tag';


export const GET_CONFERENCES = gql`
  query GetConferences {
    conferences {
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


export const SNACKBAR_STATE_QUERY = gql`
  query snackbar {
    snackBarOpen @client
    snackMsg @client
     snackType @client
  }
`;

export const IS_LEFT_DRAWER_OPEN = gql`
  query isLeftDrawerOpen {
    isLeftDrawerOpen @client
  }
`;