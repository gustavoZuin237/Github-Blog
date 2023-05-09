import * as s from './styles'

export function PostPreview() {
  return (
    <s.PostContainer>
      <s.PostHeaderContainer>
        <s.PostTitle>JavaScript data types and data structures</s.PostTitle>
        <s.PostDate>Há 1 dia</s.PostDate>
      </s.PostHeaderContainer>

      <s.PostDescription>
        Programming languages all have built-in data structures, but these often
        differ from one language to another. This article attempts to list the
        built-in data structures available in...
      </s.PostDescription>
    </s.PostContainer>
  )
}
