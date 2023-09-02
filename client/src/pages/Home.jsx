import Card from "../components/Card"
import LoginSignupForm from "../components/LoginSignupForm"
import NotificationToast from "../components/NotificationToast"

const Home = () => {
  return (
    <>
    <div className="flex h-screen w-full flex-row lg:bg-starsPurple bg-cover bg-no-repeat justify-center items-center">
        <div>
        < NotificationToast/>
        <Card className="sm:w-full">
            < LoginSignupForm/>
        </Card>
        </div>
        <div className="md:display-none">

        </div>
    </div>
    </>
  )
}

export default Home