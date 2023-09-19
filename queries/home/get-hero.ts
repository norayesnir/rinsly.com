export const GetHero = gql`
query {
  HomepageHero { 
		_id
		title
		description
		buttons { 
			__typename
			name
			color
			icon {
				url
				name
			}
		}
		image { 
			_id
			url
		}
	}
}`