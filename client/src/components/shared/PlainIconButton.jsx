export const PlainIconButton = ({ icon,...props}) => {
    return (
        <button {...props}>
        {icon}
      </button>
    );
  };