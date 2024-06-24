import { useState } from 'react'
import { Button } from '../../Button'
import { ButtonTheme } from '../../Button/ui/Button'
import styles from './Input.module.scss'
import { SubmitErrorHandler, SubmitHandler, useForm } from 'react-hook-form'
interface Input { 
    email: string;
}
export const Input = () => { 
    const {register, handleSubmit, formState: { errors } } = useForm<Input>({
    })

    const submit: SubmitHandler<Input> = data => { 
        console.log(data)
    }

    const error: SubmitErrorHandler<Input> = data => { 
        console.log(data)
    }

    const [input, setInput] = useState('')

    const ChangeInput = (event) => { 
        setInput(event.target.value)
    }

    const ClickClearInput = () => { 
        setInput('')
    }
    return ( 
        <div className={styles.InputBUtton}>
            <form onSubmit={handleSubmit(submit, error)}>
            <input {...register('email', {
                required: true, 
                minLength: {
                    value: 5,
                    message: 'Не меньше 10 символов'
                },
                pattern: /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
                maxLength: {
                    value: 126,
                    message: 'Не более 126 символов'
                    }
                    })} value={input} onChange={ChangeInput} className={styles.input} type="email" placeholder="your@email.com"/>
                    <div>
                        {errors?.email && <p>{errors?.email?.message || `${error.name}`}</p>}
                    </div>
            </form>
                <div className={styles.button}>
                <span onClick={ClickClearInput}><Button theme={ButtonTheme.PURPLE}>Sign up</Button></span>
                </div>
        </div>
    )
}