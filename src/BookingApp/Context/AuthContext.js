import { createContext, useReducer, useEffect } from "react";

const INIT_STATE = {
  user: JSON.parse(localStorage.getItem("user") || null),
  loading: false,
  err: null
};

export const AuthContext = createContext(INIT_STATE);

const AuthReducer = (state, action) => {
  switch (action.type) {
    case "loginstart":
      return ({
        user : null,
        loading : true, 
        err : null
  })
    
    case "loginsuccess":
      return ({
        user : action.payload,
        loading : true, 
        err : null
  })
      

    case "loginfail":
      return(
      {
        user : null,
        loading : false, 
        err : action.payload
      })
      

    // case "loginfailure":
    //   return
    //   {
    //     (user = null), (loading = null), (err = action.payload);
    //   }
    // case "logout":
    //   return
    //   {
    //     (user = null), (loading = false), (err = null);
    //   }

    default:
      return state;
  }
};

export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AuthReducer, INIT_STATE);
  useEffect(() => {
    localStorage.setItem("user",JSON.stringify(state.user))
  }, [state.user]);
  
  return (
    <AuthContext.Provider
      value={{
        user: state.user,
        loading: state.loading,
        err: state.err,
        dispatch,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
