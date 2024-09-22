import { ProductService } from '../../../app/Services/ProductService';
import { TypeProductsEnum } from '../../../features/SortProduct/ui/SortProduct';

export const useGetData = async (
	typeProducts: TypeProductsEnum,
	setAllData: any
) => {
	try {
		let response;

		if (typeProducts === TypeProductsEnum.All_CERAMICS_PRODUCTS) {
			response = await ProductService.getAllProducts();
		} else if (typeProducts === TypeProductsEnum.NEW_CERAMICS) {
			response = await ProductService.getNewProducts();
		}

		setAllData(response);
	} catch (error) {
		console.error('Error fetching data:', error);
		// Обработка ошибок, например, установка состояния ошибки
	}
};
