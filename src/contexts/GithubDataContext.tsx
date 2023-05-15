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
  created_at: number // ? Turn this into a date
  comments: number
  body: string
}

interface GithubDataContextProviderProps {
  children: ReactNode
}

interface GithubDataContextI {
  userData: UserDataI
  setUserData: any // ! How do i type set state functions?
  posts: IssueDataI[]
  setPosts: any // ! How do i type set state functions?
  fetchUser: () => void
  fetchIssues: () => void
} // ? Make this better

export const GithubDataContext = createContext({} as GithubDataContextI)

export function GithubDataContextProvider({
  children,
}: GithubDataContextProviderProps) {
  const [userData, setUserData] = useState<UserDataI>({})

  const [posts, setPosts] = useState<IssueDataI[]>([])

  const fetchUser = useCallback(async () => {
    const response = await api.get('/users/gustavoZuin237')
    setUserData(response.data)
  }, [])

  const fetchIssues = useCallback(async () => {
    const response = await api.get(
      `search/issues?q=%20repo:gustavoZuin237/Github-Blog`,
    )
    setPosts(response.data.items)
    console.log(posts)
  }, [posts]) // ! Fix the query system

  useEffect(() => {
    fetchUser()
    fetchIssues()
  }, [])

  return (
    <GithubDataContext.Provider
      value={{ userData, setUserData, posts, setPosts, fetchUser, fetchIssues }}
    >
      {children}
    </GithubDataContext.Provider>
  )
}
