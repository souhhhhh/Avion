import { FC, useState } from 'react';
import cn from 'classnames';

import { ProductListTitle } from '../../../shared/ui/ProductListTitle';

import { InputProfileTheme } from '../../../shared/ui/InputProfile/ui/InputProfile';
import { InputFieldsCountry } from '../../InputFieldsCountry/InputFieldsCountry';
import { Button } from '../../../shared/ui/Button';
import { ButtonTheme } from '../../../shared/ui/Button/ui/Button';
import { InputFieldsData } from '../../../shared/ui/InpurtFieldsData';
import { fields } from '../../../shared/lib/consts/consts';

export const ContactDetails: FC<IContactDetails> = ({ className }) => {
	const [disabled, setDisabled] = useState(true);
	return (
		<div className={cn('border border-[#f4f4f4] rounded-md', [className])}>
			<ProductListTitle title='Your profile' className='mt-5 ml-10' />
			<div className='grid grid-cols-2 gap-10'>
				{fields.map((item, index) => (
					<InputFieldsData
						placeholder={item.placeholder}
						theme={InputProfileTheme.DEFAULT}
						label={item.label}
						key={index}
						disabled={disabled}
						value={item.value}
					/>
				))}
				
				<InputFieldsCountry disabled={disabled} />
			</div>
			<Button
				theme={ButtonTheme.PURPLE}
				className='mt-10 ml-10 border rounded-xl mb-10'
				onClick={() => setDisabled(!disabled)}
			>
				{disabled ? `Change` : `Save changes`}
			</Button>
		</div>
	);
};

interface IContactDetails {
	className?: string;
}
