import styled from 'styled-components'

export const PostContainer = styled.div`
  width: 26rem;
  height: 16.25rem;
  padding: 2rem;
  background-color: ${(props) => props.theme['base-post']};
  border-radius: 10px;
`

export const PostHeaderContainer = styled.header`
  display: flex;
  gap: 1rem;
  margin-bottom: 1.25rem;
`

export const PostTitle = styled.h1`
  max-width: 17.68rem;
  color: ${(props) => props.theme['base-title']};
  font-size: 1.25rem;
  font-weight: 700;
  line-height: 1.6;
`

export const PostDate = styled.p`
  color: ${(props) => props.theme['base-span']};
  font-size: 0.875rem;
  line-height: 1.6;
`

export const PostDescription = styled.p`
  color: ${(props) => props.theme['base-text']};
  line-height: 1.6;
`
