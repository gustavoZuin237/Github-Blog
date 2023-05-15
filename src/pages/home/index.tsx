import { PostPreview } from './components/postPreview'

import { useContext } from 'react'
import { GithubDataContext } from '../../contexts/GithubDataContext'

import * as s from './styles'

export function Home() {
  const { userData, posts } = useContext(GithubDataContext)

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
            <s.GithubLink href="">GITHUB *icon*</s.GithubLink>
          </s.NameContainer>

          <s.Bio>{userData.bio}</s.Bio>

          <s.SocialsInfo>
            <s.Socials>*icon* {userData.login}</s.Socials>
            <s.Socials>
              *icon*{' '}
              {userData.company !== null ? userData.company : 'Indefinido'}
            </s.Socials>
            <s.Socials>*icon* {userData.followers} seguidores</s.Socials>
          </s.SocialsInfo>
        </s.UserInformation>
      </s.UserProfileCard>

      <s.SearchFormContainer>
        <s.PostsInfoContainer>
          <s.Subtitle>Publicações</s.Subtitle>
          <s.PostsAmountDisplay>0 publicações</s.PostsAmountDisplay>
        </s.PostsInfoContainer>

        <s.SearchForm>
          <input type="text" placeholder="Buscar conteúdo" />
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
