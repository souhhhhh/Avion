import { FC, ReactNode } from "react" 


import cn from 'classnames'
export enum InputProfileTheme {
    
    BORDER = 'border',
    DEFAULT = 'default'
}




export const InputProfile: FC<IInputProfile> = (props) => {
    const { 
        placeholder,
        className,
        theme,
        stringInput,
        numberInput,
        onChange,
        disabled
    } = props
    
    return (
        <input 
        type="text" 
        className={cn('rounded-xl mt-4 w-96 h-16 text-xl border border-[#dbdbdb] duration-100 pl-5 text-blue-light focus:outline focus:outline-[#bbbbbb]', 
            {
                ['']: InputProfileTheme.DEFAULT == theme,
                ['w-52 placeholder:text-lg']: InputProfileTheme.BORDER == theme
            }, 
            [className])}
    placeholder={placeholder}
    disabled={disabled}
    onChange={onChange}
    />
)
}


interface IInputProfile {
    theme: InputProfileTheme 
    className?: string
    placeholder?:string
    stringInput?: boolean
    numberInput?: boolean,
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void,
    disabled: boolean
}