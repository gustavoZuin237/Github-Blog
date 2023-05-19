import * as s from './styles'

import { IssueDataI } from '../../../../contexts/GithubDataContext'

import { formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'

import ReactMarkdown from 'react-markdown'

export function PostPreview(props: IssueDataI) {
  return (
    <s.PostContainer to={'/post'} state={props}>
      <s.PostHeaderContainer>
        <s.PostTitle>{props.title}</s.PostTitle>
        <s.PostDate>
          {formatDistanceToNow(new Date(props.created_at), {
            addSuffix: true,
            locale: ptBR,
          })}
        </s.PostDate>
      </s.PostHeaderContainer>

      <s.PostDescription>
        <ReactMarkdown>
          {props.body.length > 200
            ? props.body.substring(0, 200) + '...'
            : props.body}
        </ReactMarkdown>
      </s.PostDescription>
    </s.PostContainer>
  )
}
