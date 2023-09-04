import Card from "../components/Card"
import LoginSignupForm from "../components/LoginSignupForm"
import NotificationToast from "../components/NotificationToast"
import {motion} from 'framer-motion';
import { fadeIn } from '../variants';

const Home = () => {
  return (
    <div className="flex h-screen w-full lg:bg-gaming md:bg-starsPurple sm:bg-site bg-cover bg-no-repeat justify-center items-center">
      <div className=" w-full max-w-[2000] flex flex-row justify-center items-center">
        <NotificationToast/>
        <div className="w-full lg:w-1/2 justify-center items-center">
            <motion.div
              variants={fadeIn('down', 0.4)}
              initial='hidden'
              animate='show'
              exit='hidden'
              className='w-full flex justify-center align-center'
              >
                <Card className="w-full">
                  < LoginSignupForm/>
                </Card>
            </motion.div>
        </div>
        <div className="lg:w-1/2 hidden lg:block ">
            <motion.div
            variants={fadeIn('up',0.5)}
            initial='hidden'
            animate='show'
            exit='hidden'
            trans={{duration: 1, ease: 'easeInOut'}}
            className='absolute -bottom-0 right-0 '
            >
                <div className='flex'>
                    <img src='/league_of_legends_one.png' 
                    alt=""
                    height={630}
                    width={200}
                    className='translate-z-0 w-full h-full max-w-md ' />
                </div>
            </motion.div>
        </div>
      </div>
    </div>
  )
}

export default Home