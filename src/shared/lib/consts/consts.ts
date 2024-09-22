import { profileStore } from "../../store/Profile-data/profile-data";
import { usePhotos } from "../hooks/usePhotos";
import { ICountryFields, IFields, IProfileActions } from "./consts.types";

const { getPersonData } = profileStore



const { CartIcon, LikesIcon } = usePhotos()

export const fields: IFields[] = [
	{ label: 'First Name', placeholder: 'First Name', value: getPersonData.firstName,  },
	
	{ label: 'Last Name', placeholder: 'Last Name', value: getPersonData.lastName },
];

export const country: ICountryFields[]  = [
	{label: "Phone Number", component: true},
	{label: "Timezone"}
]



export const profileActions: IProfileActions[] = [
	{ nameAction: 'Your cart', path: `/cart`, Icon: CartIcon},
	//импорты содержатся в routeConfig, я не могу тут достать путь из файла, поэтому нужно хардкодить
	{ nameAction: 'Your likes', path: `/likes`, Icon: LikesIcon},
]