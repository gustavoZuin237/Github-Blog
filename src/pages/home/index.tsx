import { PostPreview } from './components/postPreview'

import { useContext } from 'react'
import { GithubDataContext } from '../../contexts/GithubDataContext'

import { useForm } from 'react-hook-form'
import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

import * as s from './styles'

const searchFormSchema = z.object({
  query: z.string(),
})

type SearchFormInputs = z.infer<typeof searchFormSchema>

export function Home() {
  const { userData, posts, fetchIssues } = useContext(GithubDataContext)

  const { register, handleSubmit } = useForm<SearchFormInputs>({
    resolver: zodResolver(searchFormSchema),
  })

  async function handlePostSearch(data: SearchFormInputs) {
    fetchIssues(data.query)
  }

  return (
    <s.HomePageContainer>
      <s.UserProfileCard>
        <s.UserProfilePicture
          src={userData.avatar_url}
          alt="Foto de perfil do usuário"
        ></s.UserProfilePicture>

        <s.UserInformation>
          <s.NameContainer>
            <s.Name>{userData.name}</s.Name>
            <s.GithubLink
              href={`https://github.com/${userData.login}`}
              target="_blank"
            >
              GITHUB{' '}
              <s.Icon
                size={12}
                src="src\assets\icons\arrow-up-right-from-square.svg"
                alt=""
              />
            </s.GithubLink>
          </s.NameContainer>

          <s.Bio>{userData.bio}</s.Bio>

          <s.SocialsInfo>
            <s.Socials>
              <s.Icon src="src\assets\icons\github.svg" alt="" />{' '}
              {userData.login}
            </s.Socials>
            <s.Socials>
              <s.Icon src="src\assets\icons\home\building.svg" alt="" />
              {userData.company !== null ? userData.company : 'Indefinido'}
            </s.Socials>
            <s.Socials>
              <s.Icon src="src\assets\icons\home\user-group.svg" alt="" />{' '}
              {userData.followers} seguidores
            </s.Socials>
          </s.SocialsInfo>
        </s.UserInformation>
      </s.UserProfileCard>

      <s.SearchFormContainer>
        <s.PostsInfoContainer>
          <s.Subtitle>Publicações</s.Subtitle>
          <s.PostsAmountDisplay>
            {posts.length} publicações
          </s.PostsAmountDisplay>
        </s.PostsInfoContainer>

        <s.SearchForm onSubmit={handleSubmit(handlePostSearch)}>
          <input
            type="text"
            placeholder="Buscar conteúdo"
            {...register('query')}
          />
        </s.SearchForm>
      </s.SearchFormContainer>

      <s.PostsFeed>
        {posts.length > 0 ? (
          posts.map((post) => {
            return <PostPreview key={post.number} {...post} />
          })
        ) : (
          <></>
        )}
      </s.PostsFeed>
    </s.HomePageContainer>
  )
}
