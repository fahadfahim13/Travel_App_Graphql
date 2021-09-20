
export function LoginReducerHook(state: any, action: any) {
    switch (action.type) {
        case 'login':{
            return {
                ...state,
                isLoading: true,
                errorReturned: '',
            }
        }
        case 'success':{
            return {
                ...state,
                email: '',
                password: '',
                isLoggedIn: true,
                isLoading: false,
                errorReturned: '',
            }
        }
        case 'error':{
            return {
                ...state,
                isLoading: false,
                isLoggedin: false,
                errorReturned: action.payload,
            }
        }
        case 'logout':{
            return {
                ...state,
                email: '',
                password: '',
                isLoggedin: false,
            }
        }
        case 'setEmail':{
            return {
                ...state,
                email: action.payload,
            }
        }
        case 'setPassword':{
            return {
                ...state,
                password: action.payload,
            }
        }
        default:
            return state
    }
}
