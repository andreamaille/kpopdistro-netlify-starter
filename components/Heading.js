import { StyledHeading } from './Heading.style.js'

export default function Heading({ title, description }) {
  return (
    <StyledHeading>
      <h2>{title}</h2>
      <p>{description}</p>
    </StyledHeading>
  )
}
