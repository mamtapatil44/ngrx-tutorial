import { createReducer, on } from "@ngrx/store";
import { AuthState } from "./auth.model";
import { authLogin, authLoginFailure, authLoginSuccess, authLogout } from "./auth.actions";


export const initialState :AuthState ={
    user: null,
    loading: false,
    error: null,
}

export const authReducer= createReducer(initialState ,
    on(authLogin,(state)=>({...state,loading:true,error:null})),
    on(authLoginSuccess,(state,{user})=>({...state,loading:false,user})),
    on(authLoginFailure,(state,{error})=>({...state,loading:false,error})),
    on(authLogout,()=>initialState),

)