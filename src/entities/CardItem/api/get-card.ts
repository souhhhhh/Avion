import axios from 'axios';

import { IProduct } from '../../../shared/lib/types/data';

export const getCard = async (id: string) =>
   (await axios.get<IProduct>(`http://localhost:3000/AllData/${id}`)).data;