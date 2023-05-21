import {
  useState,
  useEffect,
  useCallback,
  createContext,
  ReactNode,
} from 'react'

import { api } from '../lib/axios'

interface UserDataI {
  avatar_url: string
  name: string
  bio: string
  login: string
  company: string
  followers: number
}

export interface IssueDataI {
  number: number
  url: string
  title: string
  login: string
  created_at: Date
  comments: number
  body: string
}

interface GithubDataContextProviderProps {
  children: ReactNode
}

interface GithubDataContextI {
  userData: UserDataI
  posts: IssueDataI[]
  fetchUser: () => void
  fetchIssues: (query: string) => void
}

export const GithubDataContext = createContext({} as GithubDataContextI)

export function GithubDataContextProvider({
  children,
}: GithubDataContextProviderProps) {
  const [userData, setUserData] = useState<UserDataI>({
    avatar_url: '',
    name: '',
    bio: '',
    login: '',
    company: '',
    followers: 0,
  })

  const [posts, setPosts] = useState<IssueDataI[]>([])

  const fetchUser = useCallback(async () => {
    const response = await api.get('/users/gustavoZuin237')
    setUserData(response.data)
  }, [])

  const fetchIssues = useCallback(async (query?: string) => {
    const response = await api.get(
      `search/issues?q=${query}%20repo:gustavoZuin237/Github-Blog`,
    )
    setPosts(response.data.items)
  }, [])

  useEffect(() => {
    fetchUser()
    fetchIssues('')
  }, [fetchUser, fetchIssues])

  return (
    <GithubDataContext.Provider
      value={{ userData, posts, fetchUser, fetchIssues }}
    >
      {children}
    </GithubDataContext.Provider>
  )
}
