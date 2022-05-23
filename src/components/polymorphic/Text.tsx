import React from 'react'

type TextProps = {
     size?:'sm'|'md'|'lg',
     color?: 'primary'|'secondary',
     children : React.ReactNode,
     as? :string
}

const Text = ({size, color,children,as}:TextProps) => {
     const Component = as || 'div'
  return (
    <Component className={`class-with ${size}-${color}`}>{children}</Component>
  )
}

export default Text