import { createContext, useContext, useEffect, useState } from "react"
import { supabase } from "../supabase/supabase-client"

const AuthContext = createContext({});

export const useAuth = () => useContext(AuthContext)




export function AuthProvider({children}) {

  const [user, setUser] = useState(null)
  const [isAuth, setIsAuth] = useState(false)

  return (
    <AuthContext.Provider value={{
      user,
      isAuth
    }}>
      {children}
    </AuthContext.Provider>
  )

}







