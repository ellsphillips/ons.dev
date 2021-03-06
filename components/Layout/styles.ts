import styled from 'styled-components'

export const Wrapper = styled.div`
	display: flex;
	margin-top: 2rem;
	margin-bottom: 0;
	height: calc(100vh - 2rem);
	overflow: hidden;
`

export const Container = styled.div`
	position: relative;
	display: flex;
	flex-direction: column;
	flex: 1 1 0%;
	overflow-y: auto;
	overflow-x: hidden;
	padding-inline: 2rem;
	margin: 0 auto;
	width: 100%;
	max-width: 120rem;

	@media only screen and (max-width: 1024px) {
		min-width: 100%;
		margin: 0;
		flex: 1;
	}
`
