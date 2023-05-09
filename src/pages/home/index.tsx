import { PostPreview } from './components/post'

import * as s from './styles'

export function Home() {
  return (
    <s.HomePageContainer>
      <s.UserProfileCard>
        <s.UserProfilePicture>Foto de usuário</s.UserProfilePicture>

        <s.UserInformation>
          <s.NameContainer>
            <s.Name>Usuário</s.Name>
            <s.GithubLink href="">GITHUB *icon*</s.GithubLink>
          </s.NameContainer>

          <s.Bio>
            Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu
            viverra massa quam dignissim aenean malesuada suscipit. Nunc,
            volutpat pulvinar vel mass.
          </s.Bio>

          <s.SocialsInfo>
            <s.Socials>*icon* Github</s.Socials>
            <s.Socials>*icon* Empresa</s.Socials>
            <s.Socials>*icon* Seguidores</s.Socials>
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
