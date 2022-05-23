type ButtonProps={
     varient : "primary" | "secondary"
}& React.ComponentProps<'button'>

export const CustomButton =({varient, children,...rest}:ButtonProps)=>{
     return <button className={`class-with-${varient }`} {...rest}>{children}</button>
}