export const GetHero = gql`
query GetHero{
  HomepageHero {
		_locale
    _id
    title
    description
    buttons {
      __typename
			name
			color
    }
    image {
      _id
      url
    }
  }
}`