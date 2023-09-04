import { useEffect} from "react"
import PropTypes from 'prop-types';
import { useValue } from "../context/ContextProvider";

const Notifications = () => {
  
  const {state: {alert}, dispatch}= useValue();

  useEffect(() => {
    if (alert.open === true) {
    const timer = setTimeout(() => dispatch({
        type: 'UPDATE_ALERT',
        payload: {open: false, duration: 5000, message: ""}
    }), alert.duration);
      return () => clearTimeout(timer);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [alert.duration, alert.open]);

  if(!(alert.open===true)) return null

  return (
    alert.variant === "danger" ? (
      <div className="bg-orange-100 border-l-4 border-orange-500 text-orange-700 p-4" role="alert">
        <p className="font-bold">Error !</p>
        <p>{alert.message}</p>
      </div>
    ) : (
      <div className="bg-teal-100 border-t-4 border-teal-500 rounded-b text-teal-900 px-4 py-3 shadow-md" role="alert">
        <div className="flex">
          <div className="py-1">
            <svg className="fill-current h-6 w-6 text-teal-500 mr-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
              <path d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM9 11V9h2v6H9v-4zm0-6h2v2H9V5z" />
            </svg>
          </div>
          <div>
            <p className="font-bold">Success</p>
            <p className="text-sm">{alert.message}</p>
          </div>
        </div>
      </div>
    )
  );
  
}

Notifications.propTypes ={
    variant: PropTypes.string,
    message: PropTypes.string,
    duration: PropTypes.number,
    show: PropTypes.bool,
}

export default Notifications