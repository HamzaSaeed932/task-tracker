import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({title,onShow,showAdd}) => {
  
  return (
    <header className="header">
     <h1>{title}</h1>
     <Button text={showAdd ? 'Close' : 'Show'} color={showAdd ? 'red': 'green'} onClick = {onShow} />
    </header>
  )
}

Header.defaultProps = {
  title:"Task Tracker",
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
}

export default Header

