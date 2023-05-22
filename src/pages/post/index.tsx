import * as s from './styles'

import { useLocation } from 'react-router-dom'

import { formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'

import ReactMarkdown from 'react-markdown'

interface PostDataI {
  title: string
  number: number
  created_at: Date
  comments: number
  body: string
  user: {
    login: string
  }
}

export function Post() {
  const location = useLocation()
  const postData: PostDataI = location.state

  return (
    <s.PostContainer>
      <s.PostInfoCard>
        <s.PostInformation>
          <s.TitleContainer>
            <s.LinkContainer>
              <s.Link href="/">
                <s.Icon
                  size={12}
                  src="src\assets\icons\post\chevron-left.svg"
                  alt=""
                />{' '}
                VOLTAR
              </s.Link>
              <s.Link
                href={`https://github.com/${postData.user.login}/Github-Blog/issues/${postData.number}`}
                target="_blank"
              >
                VER NO GITHUB{' '}
                <s.Icon
                  size={12}
                  src="src\assets\icons\arrow-up-right-from-square.svg"
                  alt=""
                />
              </s.Link>
            </s.LinkContainer>

            <s.Title>{postData.title}</s.Title>
          </s.TitleContainer>

          <s.StatsContainer>
            <s.Stats>
              <s.Icon src="src\assets\icons\github.svg" alt="" />{' '}
              {postData.user.login}
            </s.Stats>
            <s.Stats>
              <s.Icon src="src\assets\icons\post\calendar-day.svg" alt="" />{' '}
              {formatDistanceToNow(new Date(postData.created_at), {
                addSuffix: true,
                locale: ptBR,
              })}
            </s.Stats>
            <s.Stats>
              <s.Icon src="src\assets\icons\post\comment.svg" alt="" />{' '}
              {postData.comments} comentários
            </s.Stats>
          </s.StatsContainer>
        </s.PostInformation>
      </s.PostInfoCard>

      <s.PostBody>
        <ReactMarkdown>{postData.body}</ReactMarkdown>
      </s.PostBody>
    </s.PostContainer>
  )
}
