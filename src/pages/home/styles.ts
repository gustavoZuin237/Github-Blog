import styled, { DefaultTheme } from 'styled-components'

export const HomePageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  position: relative;
  top: -7rem;
`

export const UserProfileCard = styled.div`
  width: 54rem;
  height: 13.25rem;
  background-color: ${(props) => props.theme['base-profile']};
  padding: 2rem 2rem;
  margin-bottom: 4.5rem;
  border-radius: 10px;

  display: flex;
  gap: 2rem;
`

export const UserProfilePicture = styled.img`
  max-width: 9.25rem;
  min-height: 9.25rem;
  border-radius: 8px;
`
export const UserInformation = styled.div`
  width: calc(100% - 9.25rem);
  display: flex;
  flex-direction: column;
`

interface IconProps {
  size?: number
  theme: DefaultTheme
}

export const Icon = styled.img`
  width: ${(props: IconProps) => (props.size === 12 ? `12px` : `18px`)};
  height: ${(props: IconProps) => (props.size === 12 ? `12px` : `18px`)};
`

export const NameContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.5rem;
`

export const Name = styled.h1`
  color: ${(props) => props.theme['base-title']};
  font-size: 1.5rem;
  font-weight: 700;
  line-height: 1.3;
`

export const GithubLink = styled.a`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  font-size: 0.75rem;
  font-weight: 700;
  text-decoration: none;
  color: ${(props) => props.theme.blue};
  border-bottom: 1px solid transparent;

  &:hover {
    border-color: ${(props) => props.theme.blue};
  }
`

export const Bio = styled.p`
  color: ${(props) => props.theme['base-text']};
  line-height: 1.6;
  margin-bottom: 1.5rem;
`

export const SocialsInfo = styled.div`
  display: flex;
  gap: 1.5rem;
`

export const Socials = styled.span`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: ${(props) => props.theme['base-subtitle']};
  line-height: 1.6;
`

export const SearchFormContainer = styled.div`
  width: 54rem;
  display: flex;
  flex-direction: column;
  margin-bottom: 3rem;
  gap: 0.75rem;
`

export const PostsInfoContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const Subtitle = styled.h2`
  color: ${(props) => props.theme['base-subtitle']};
  font-size: 1.125rem;
  font-weight: 700;
  line-height: 1.6;
`

export const PostsAmountDisplay = styled.p`
  font-size: 0.875rem;
  color: ${(props) => props.theme['base-span']};
  line-height: 1.6;
`

export const SearchForm = styled.form`
  input {
    width: 100%;
    height: 3.125rem;
    padding: 1rem;
    background-color: ${(props) => props.theme['base-input']};
    border: 1px solid #1c2f41;
    border-radius: 6px;
    transition: all 0.4s;

    ::placeholder {
      color: ${(props) => props.theme['base-label']};
      line-height: 1.6;
    }

    &:focus {
      border-color: ${(props) => props.theme.blue};
      color: ${(props) => props.theme['base-text']};
    }
  }
  // ! Turn this into a new component
`

export const PostsFeed = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
`
