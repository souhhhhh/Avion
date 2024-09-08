import { FC, ReactNode } from 'react';

import styles from '../../../../widgets/ProductList/ui/ProductList.module.scss';
import type { IProduct, IDifferentBrand } from '../../../lib/types/data';
import { Loader } from '../../Loader';
import React from 'react';
import { useParams } from 'react-router-dom';

interface IMapPorudcts { 
	data: IProduct[] | IDifferentBrand<string>[], 
	children: ReactNode
}

export const MapProducts: FC<IMapPorudcts> = ({ data, children }) => {
	const { id } = useParams()
  // Удаляем элемент с id из массива data
  const filteredData = data.filter(item => item.id !== id);
  
  return (
    <div className='flex gap-10'>
      {filteredData.length > 0 ? (
        filteredData.slice(0, 4).map(items => (
          <div className={styles.block} key={items.id}>
            {React.isValidElement(children) ? React.cloneElement(children, { ...items }) : children}
          </div>
        ))
      ) : (
        <div className='flex justify-center items-center gap-20 mb-5'>
          <div className='flex gap-16 pb-16'>
            <Loader />
          </div>
        </div>
      )}
    </div>
	);
};
