import { createGlobalStyle } from 'styled-components'
import { normalize } from 'styled-normalize'

export const GlobalStyles = createGlobalStyle`
	${normalize}
	
	:root {
		--secondary: #DD747D;
		--highlight: #F6E8E7;
		--primary: #F7CBC6;

		--dark-purple: #28242D;
		--white: #fff;
		--black: #000;

		--font-size-display: 48px;
		--font-size-h1: 40px;
		--font-size-h2: 33px;
		--font-size-h3: 27px;
		--font-size-h4: 23px;
		--font-size-h5: 19px;
		--font-size-base: 16px;
		--font-size-sm: 13px;
		--font-size-micro: 11px;

		--border: 1px solid var(--black);
	}

	@media (min-width: 768px) {
		:root {
		--font-size-display: 57px;
		--font-size-h1: 47px;
		--font-size-h2: 39px;
		--font-size-h3: 32px;
		--font-size-h4: 27px;
		--font-size-h5: 22px;
		--font-size-base: 19px;
		--font-size-sm: 16px;
		--font-size-micro: 13px;
		}
	}

	body {
		font-family: 'Roboto Mono', monospace;
		font-weight: 700;
		background-image: url(${'bg-star.jpg'});
		background-size: 500px;
	}

	p, a, h1, h3 {
		margin:0; 
		padding:0;
	}

	ul, li {
		list-style: none;
		margin: 0;
		padding:0;
	}

	a {
		text-decoration: none;
		color: var(--white);
	}

	main {
		width: 80%;
		margin: 18px auto;
		background-color: var(--white);
		border: var(--border);
		padding: 16px;
	}

	main ul {
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
		margin: 24px auto;
		width: 95%;
	}
`
