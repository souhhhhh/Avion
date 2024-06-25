import { useEffect } from 'react';
import { Button } from '../../Button'
import { ButtonTheme } from '../../Button/ui/Button'
import styles from './Input.module.scss'
import {  useForm } from 'react-hook-form';
interface Input { 
    email: string;
}


export const Input = () => { 
    const {register, handleSubmit, reset, formState: { errors, isSubmitSuccessful } } = useForm<Input>({
    })
    

    // const ClickClearInput = () => { 
    //     setInput('')
    // }
    const onSubmit = () => { 
        reset()
        
    }
    const Time = () => { 
        return <span>Приглашение отправлено</span>
        reset()
    }
    return ( 
        <div className={styles.InputBUtton}>


            <form onSubmit={handleSubmit(onSubmit)}>

                <label className={styles.label} htmlFor="">
                    <input {...register('email', { 
                        required: true, 
                        minLength: { 
                            value: 5,
                            message: 'Почта должна содержать не менее 5 символов'
                        },
                        pattern: {
                            value: /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
                            message: `Введите корректную почту,  
                            например: yourName@mail.ru`
                            },
                        maxLength: { 
                            value: 126,
                            message: 'Почта должна содержать не более 126 символов'
                        }
                    })} type='email' className={styles.input} placeholder='your@email.com'/>


                <div className={styles.button}>
                <span onSubmit={handleSubmit(onSubmit)} ><Button theme={ButtonTheme.PURPLE}>Sign up</Button></span>

                    
                </div>
                </label>
                    <div className={styles.success}>
                       { isSubmitSuccessful === true ? <span>Приглашение отправлено</span> : null}
                    </div>
                <div className={errors.email && styles.error}>
                    {errors?.email && <span>{errors?.email?.message}</span>}
                </div>
                
                <div>

                </div>
                



            </form>



        </div>
    )
}