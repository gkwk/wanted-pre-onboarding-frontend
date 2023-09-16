function SignInPasswordvalidator(Passwordstr) {
    const regex = /^.{8,}/

    return regex.test(Passwordstr)
}

export default SignInPasswordvalidator;