import React, { FC } from 'react'
import PropTypes from 'prop-types'

interface IFlink {
  active: boolean,
  children: React.ReactNode,
  onClick: () => void,
}

const FLink: FC<IFlink> = ({ active, children, onClick }) => {
  if (active) {
    return <span>{children}</span>
  }

  return (
    <a
      href="{true}"
      onClick={e => {
        e.preventDefault()
        onClick()
      }}
    >
      {children}
    </a>
  )
}

FLink.propTypes = {
  active: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired
}

export default FLink