import AuthForm from '@/components/AuthForm'
import { getLoggedInUser } from '@/lib/actions/users.actions'

const SignIn = async() => {

  const loggedIn = await getLoggedInUser()
  console.log(loggedIn)
  return (
    <section className="flex-center size-full max-sm:px-6">
      <AuthForm type="sign-up" />
    </section>
  )
}

export default SignIn