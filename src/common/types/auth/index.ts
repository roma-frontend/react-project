export interface IPropsLogin {
    setPassword: (value: string) => void
    setEmail: (value: string) => void
    navigate: (to: string) => void
}

export interface IPropsRegister {
    setEmail: (value: string) => void
    setPassword: (value: string) => void
    setRepeatPassword: (value: string) => void
    setFirstName: (value: string) => void
    setUserName: (value: string) => void
    navigate: (to: string) => void
}

export interface IAuthState {
    user:  {},
    isLogged: boolean
}

interface IPublicUser {
    id: number | null,
    firstName: string,
    userName: string,
    email: string,
    createAt: string,
    updateAt: string,
    watchList: [IWatchList]
}

interface IWatchList {
    id: number | null,
    name: string,
    createAt: string,
    updateAt: string,
    user: number | null
}