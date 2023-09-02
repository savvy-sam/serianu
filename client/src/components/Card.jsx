import PropTypes from 'prop-types';

const Card = (props) => {
    const {children} = props

  return (
    <div className='max-w-sm rounded overflow-hidden shadow-lg flex justify-center h-100 bg-white px-5 py-5'>
        {children}
    </div>
  )
}

Card.propTypes = {
    children: PropTypes.node,
}

export default Card
