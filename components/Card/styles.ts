import { breakpoints } from '@/styles/breakpoints'
import styled from 'styled-components'

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	height: 24rem;
	background-color: var(--clr-bg-secondary);
	border-radius: 1rem;
	overflow: hidden;
	cursor: pointer;

	&:hover {
		background-color: var(--clr-bg-tertiary);
	}
`

export const Thumbnail = styled.div<{
	src: string
}>`
	min-height: 60%;
	max-width: 100%;
	background-size: cover;
	background-repeat: no-repeat;
	background-position: top;
	background-image: url(${props => props.src});
`

export const Details = styled.div`
	display: flex;
	justify-content: space-between;
	width: auto;
	margin: 1rem;

	@media (min-width: ${breakpoints.tablet}) {
		overflow: hidden;
		text-overflow: ellipsis;
	}
`

export const Info = styled.div`
	display: flex;
	flex-direction: column;
`

export const Title = styled.h1`
	color: var(--clr-fg-primary);
	font-size: 1.5rem;
`

export const Subtitle = styled.h3`
	color: var(--clr-fg-primary);
	font-size: 1.25rem;
`

export const Author = styled.h3`
	color: var(--clr-fg-tertiary);
	font-size: 1.25rem;
`

export const ProfilePicture = styled.div<{
	src: string
}>`
	align-self: center;
	width: 4rem;
	height: 4rem;
	border-radius: 0.5rem;
	background-size: cover;
	background-repeat: no-repeat;
	background-position: center;
	background-image: url(${props => props.src});
`
