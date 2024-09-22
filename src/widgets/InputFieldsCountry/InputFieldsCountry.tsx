import { InputProfile } from '../../shared/ui/InputProfile';
import { InputProfileTheme } from '../../shared/ui/InputProfile/ui/InputProfile';

import { IoIosArrowDown } from 'react-icons/io';
import { ProfileText } from '../../shared/ui/ProfileText';
import { Button } from '../../shared/ui/Button';
import { ButtonTheme } from '../../shared/ui/Button/ui/Button';
import { FC, useState } from 'react';
import { observer } from 'mobx-react';
import { country } from '../../shared/lib/consts/consts';
import { SelectCountry } from '../../features/SelectCountry';
import { countryStore } from '../../shared/store/getCountryData/getCountry-data';
import { profileStore } from '../../shared/store/Profile-data/profile-data';
export const InputFieldsCountry: FC<{ disabled: boolean }> = observer(({ disabled }) => {
	const [open, setOpen] = useState(false);
  const { getCountry } = countryStore
  const { getPersonCountryData } = profileStore
	return (

		<div className='grid grid-cols-2 gap-10 ml-10'>
			{country.map((item, index) =>
				item.component ? (
					<div className='w-96' key={`${item.label}  - ${index}`}>
						<ProfileText label={item.label} />
						<div className='flex items-center'>
							<Button
								theme={ButtonTheme.PROFILE_BUTTON}
								className='mr-10 mt-5'
								onClick={() => (setOpen(!open), getCountry())}
								disabled={disabled}
							>
								<div className='flex justify-around w-44'>
									<img src={getPersonCountryData.countryFlag} alt='flag' width={35} height={35} />
									<p>{getPersonCountryData.countryCallingCodes}</p>
									<IoIosArrowDown
										style={{
                      marginRight: '25px',
                      color: 'grey',
                      width: '25px',
                      height: '25px'
										}}
									/>
								</div>
							</Button>
							<InputProfile theme={InputProfileTheme.BORDER} placeholder='Write your number' numberInput disabled={disabled} className='w-1/2'  />
						</div>
								{open && <SelectCountry setOpen={setOpen} /> }
					</div>
				) : (
					<div className='relative left-[300px]' key={index}>
						<ProfileText label={item.label} />
						<Button
							theme={ButtonTheme.PROFILE_BUTTON}
							className='mt-4 w-96'
              disabled
              
						>{getPersonCountryData.timezones}</Button>
					</div>
				)
			)}
		</div>
	);
});