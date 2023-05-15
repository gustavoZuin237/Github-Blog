import * as s from './styles'

import { IssueDataI } from '../../../../contexts/GithubDataContext'

export function PostPreview(props: IssueDataI) {
  return (
    <s.PostContainer>
      <s.PostHeaderContainer>
        <s.PostTitle>{props.title}</s.PostTitle>
        <s.PostDate>{props.created_at}</s.PostDate>
      </s.PostHeaderContainer>

      <s.PostDescription>{props.body}</s.PostDescription>
    </s.PostContainer>
  )
}
