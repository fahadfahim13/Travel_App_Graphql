
export function LoginReducerHook(state: any, action: any) {
    switch (action.type) {
        case 'login':{
            return {
                ...state,
                isLoading: true,
                errorReturned: ''
            }
        }
        case 'success':{
            return {
                ...state,
                email: '',
                password: '',
                isLoggedIn: true,
                isLoading: false,
            }
        }
        case 'error':{
            return {
                ...state,
                isLoggedin: false,
                isLoading: false,
                errorReturned: action.payload,
                email: '',
                password: ''
            }
        }
        case 'logout':{
            return {
                ...state,
                isLoggedin: false,
                email: '',
                password: ''
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
