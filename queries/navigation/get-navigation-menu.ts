export const GetNavigationMenu = gql`
query GetNaviagtionMenu {
	Navigation (id: "fc6eecf7-498f-4164-91fd-8f79aea90593") { 
		_id
		title
		_slug
		menu_items { 
			__typename
			_id
			title
			link_to_page {
				_slug
			}
			children {
				__typename
				_id
				title
				link_to_page {
					_slug
				}
			}
		}
	}
}
`