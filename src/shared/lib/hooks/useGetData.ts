import { ProductService } from "../../../entities/Services/ProductService";
import { TypeProductsEnum } from "../../../widgets/SortProduct/ui/SortProduct";

export const useGetData = async (typeProducts: TypeProductsEnum, setAllData: any) => {
    try {

      let response;

      if (typeProducts === TypeProductsEnum.NEW_CERAMICS) {
        response = await ProductService.getNewProducts();
      } else if (typeProducts === TypeProductsEnum.All_CERAMICS_PRODUCTS) {
        response = await ProductService.getCeramicProducts();
      }

      setAllData(response);
      
    } catch (error) {
      console.error("Error fetching data:", error);
      // Обработка ошибок, например, установка состояния ошибки
    }
  };






