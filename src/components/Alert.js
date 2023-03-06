import React from 'react'

export default function Alert({alert}) {

  function capitalizeType(type){
    return type.charAt(0).toUpperCase() + type.slice(1).toLowerCase()
  }

  return (
    alert && <div className={`alert alert-${alert.type} alert-primary my-1 fade show`} role="alert">
        <strong>{capitalizeType(alert.type)}</strong>: {alert.message}
      </div>
  )
}
