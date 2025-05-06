import { createAction, props } from "@ngrx/store";
import { User } from "./auth.model";


export const authLogin = createAction(`[Auth] Login`,props<{username:string,password:string}>());
export const authLoginSuccess = createAction(`[Auth] Login Success`,props<{ user: User }>())
export const authLoginFailure = createAction(`[Auth] Login Failure`,props<{ error: string }>())
export const authLogout= createAction(`[Auth] Logout`)
