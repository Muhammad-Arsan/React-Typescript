import React from 'react'

type HorizentalPostion = 'left'| 'center' | 'right'
type VericalPosition = 'top' | 'center' | 'bottom'

type ToastProps = {
     position :Exclude< `${HorizentalPostion}-${VericalPosition}`,'center-center'>|'center'
}
const Toast = ({position }:ToastProps) => {
  return (
    <div>Toast Notification Position - {position}</div>
  )
}

export default Toast