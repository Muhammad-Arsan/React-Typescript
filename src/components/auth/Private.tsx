import Login from "./Login"
import  { ProfileTypeProps } from './Profile'
type PrivatePropsType = {
     isLoggedIn : boolean,
     Component : React.ComponentType<ProfileTypeProps>
}

export const Private = ({isLoggedIn, Component}: PrivatePropsType)=>{
     if(isLoggedIn){
          return <Component name = "Muhammad Arsan"/>
     }else{
          return <Login />
     }
}