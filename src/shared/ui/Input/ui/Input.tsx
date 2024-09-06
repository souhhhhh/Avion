import { useState } from 'react';
import { Button } from '../../Button';
import { ButtonTheme } from '../../Button/ui/Button';
import styles from './Input.module.scss';
import { useForm } from 'react-hook-form';
interface InputProps {
  width?: number;
  height?: number;
  placeholder: string;
}
interface Input {
  email: string;
}

export const Input = (props: InputProps) => {
  const { width, height, placeholder } = props;
  const [disabled,setDesabled] = useState(false)
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitSuccessful },
  } = useForm<Input>({});

  const onSubmit = () => {
    reset();
  };

  function Time() {
    setTimeout(() => {
      // reset();
      setDesabled(true)
    }, 0);
    return <span>Приглашение отправлено</span>;
  }

  return (
    <div className={styles.InputBUtton}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label className={styles.label} htmlFor="">
          <input
            {...register('email', {
              required: true,
              disabled: disabled,
              minLength: {
                value: 5,
                message: 'Почта должна содержать не менее 5 символов',
              },
              pattern: {
                value:  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                message: `Введите корректную почту,  
                            например: yourName@mail.ru`,
              },
              maxLength: {
                value: 126,
                message: 'Почта должна содержать не более 126 символов',
              },
            })}
            style={{ width: `${width}px`, height: `${height}px` }}
            type="email"
            className={styles.input}
            placeholder={placeholder}
          />

          <div className={styles.button}>
            <span onSubmit={handleSubmit(onSubmit)}>
              <Button theme={ButtonTheme.PURPLE}>Sign up</Button>
            </span>
          </div>
        </label>
        <div className={styles.success}>{isSubmitSuccessful === true ? Time() : null}</div>
        <div className={errors.email && styles.error}>
          {errors?.email && <span>{errors?.email?.message}</span>}
        </div>

        <div></div>
      </form>
    </div>
  );
};
