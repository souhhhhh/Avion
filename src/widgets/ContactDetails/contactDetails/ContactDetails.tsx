import { FC } from 'react';
import cn from 'classnames';

import { ProductListTitle } from '../../ProductListTitle';
import { InputFieldsData } from '../../../shared/ui/InpurtFieldsData/InputFieldsData';

const fields: IFields[] = [
	{ label: 'First Name', placeholder: 'First Name' },
	{ label: 'Last Name', placeholder: 'Last Name' },
	{ label: 'Phone number', placeholder: 'Phone number' }
];

export const ContactDetails: FC<IContactDetails> = ({ className }) => {
	return (
		<div className={cn('border border-[#f4f4f4] rounded-md', [className])}>
			<ProductListTitle title='Your profile' className='mt-5 ml-10' />
			<div className='grid grid-cols-2 gap-10'>
				{fields.map(item => (
					<InputFieldsData placeholder={item.placeholder} label={item.label} />
				))}
			</div>
		</div>
	);
};

interface IContactDetails {
	className?: string;
}

interface IFields {
	label: string;
	placeholder: string;
}
