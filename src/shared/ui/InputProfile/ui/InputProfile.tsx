import { FC, ReactNode } from "react"


import cn from 'classnames'
export enum InputProfileTheme {
    
    
    DEFAULT = 'default'
}


export const InputProfile: FC<IInputProfile> = (props) => {
    const { 
        children,
        placeholder,
        className
    } = props
    
    return (
        <input type="text" className={cn('rounded-xl w-96 h-16 text-xl border border-[#dbdbdb] duration-100 pl-5 text-blue-light focus:outline focus:outline-[#bbbbbb]', 
            {
                '': InputProfileTheme.DEFAULT
            }, 
        [className])}
    placeholder={placeholder}
    >{children}</input>
)
}


interface IInputProfile {
    theme: InputProfileTheme 
    className?: string
    children: ReactNode
    placeholder:string
}