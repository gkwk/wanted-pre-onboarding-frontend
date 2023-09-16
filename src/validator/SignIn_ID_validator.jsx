function SignInIDvalidator(IDstr) {
    const regex = /^(?=.*[@])/

    return regex.test(IDstr)
}

export default SignInIDvalidator;