import { PostPreview } from './components/post'

import { useState, useEffect } from 'react'

import { api } from '../../lib/axios'

import * as s from './styles'

// interface UserDataI {}
// TODO Fix the typing problems

export function Home() {
  const [userData, setUserData] = useState({})

  const fetchUser = async () => {
    const response = await api.get('/users/gustavoZuin237')
    setUserData(response.data)
  }

  useEffect(() => {
    fetchUser()
  }, [])

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
            <s.Socials>*icon* {userData.followers}</s.Socials>
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
        <PostPreview />
        <PostPreview />
        <PostPreview />
        <PostPreview />
      </s.PostsFeed>
    </s.HomePageContainer>
  )
}
