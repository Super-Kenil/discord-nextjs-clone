import { SignOutButton, UserButton } from "@clerk/nextjs";

const Home = () => {
  return (
    <h1 className="text-cyan-500">
      Hey there

      <div className="mt-8">
        <UserButton afterSignOutUrl="/auth/signi-in" />
      </div>

      <div className="mt-8">

        <SignOutButton />
      </div>
    </h1>
  )
}

export default Home;
