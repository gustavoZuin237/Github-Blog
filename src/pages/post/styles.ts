import styled from 'styled-components'

export const PostContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  position: relative;
  top: -7rem;
`

export const PostInfoCard = styled.div`
  width: 54rem;
  height: 10.5rem;
  background-color: ${(props) => props.theme['base-profile']};
  padding: 2rem 2rem;
  border-radius: 10px;

  display: flex;
  gap: 2rem;
`
export const PostInformation = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`
export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  margin-bottom: 0.5rem;
`

export const Title = styled.h1`
  color: ${(props) => props.theme['base-title']};
  font-size: 1.5rem;
  font-weight: 700;
  line-height: 1.3;
`

export const LinkContainer = styled.div`
  display: flex;
  justify-content: space-between;
`

export const Link = styled.a`
  font-size: 0.75rem;
  font-weight: 700;
  text-decoration: none;
  color: ${(props) => props.theme.blue};
  border-bottom: 1px solid transparent;

  &:hover {
    border-color: ${(props) => props.theme.blue};
  }
`

export const StatsContainer = styled.div`
  display: flex;
  gap: 1.5rem;
`

export const Stats = styled.span`
  color: ${(props) => props.theme['base-span']};
  line-height: 1.6;
`

export const PostBody = styled.div`
  width: 54rem;
  padding: 2.5rem 2rem;
`
