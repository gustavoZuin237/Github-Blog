import * as s from './styles'

export function Post() {
  return (
    <s.PostContainer>
      <s.PostInfoCard>
        <s.PostInformation>
          <s.TitleContainer>
            <s.LinkContainer>
              <s.Link href="">*icon* VOLTAR</s.Link>
              <s.Link href="">VER NO GITHUB *icon*</s.Link>
            </s.LinkContainer>

            <s.Title>TÍTULO DO POST</s.Title>
          </s.TitleContainer>

          <s.StatsContainer>
            <s.Stats>*icon* LOGIN</s.Stats>
            <s.Stats>*icon* DATA DE POSTAGEM</s.Stats>
            <s.Stats>*icon* COMENTÁRIOS</s.Stats>
          </s.StatsContainer>
        </s.PostInformation>
      </s.PostInfoCard>

      <s.PostBody>
        <h1>This is the post body</h1>
        <p>Here is an absolutely incredible piece of text!</p>
      </s.PostBody>
    </s.PostContainer>
  )
}
