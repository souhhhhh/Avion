import { ContactDetails } from "../../../widgets/ContactDetails";
import { ProfileActions } from "../../ProfileActions";

export const Profile = () => {
	return (
		<div className='container'>
			<div className="flex justify-center relative top-72">
				<ProfileActions  />
				<ContactDetails  />
			</div>
		</div>
	);
};
