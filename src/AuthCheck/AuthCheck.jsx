function AuthCheck() {

    return (localStorage.getItem("access_token") ? true : false)
}

export default AuthCheck;