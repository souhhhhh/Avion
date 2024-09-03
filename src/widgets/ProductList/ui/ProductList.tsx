import styles from './ProductList.module.scss';
import classNames from 'classnames';
import { ProductCard } from '../../../entities/ProductCard';
import { Button, ButtonTheme } from '../../../shared/ui/Button/ui/Button';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { IProduct } from '../../../shared/lib/types/data';
import { ProductListTitle } from '../../ProductListTitle';
import { Loader } from '../../../shared/ui/Loader';



interface ProductListProps {
  className?: string;
  title: string;
}

export const ProductList = ({ title }: ProductListProps) => {
  //Сделать через RTK Query
  const [AllData,setAllData] = useState<IProduct[]>([])

  useEffect(() => { 
    const getData = async () => {
      const response = await axios.get(`http://localhost:3000/NewCeramics`)
      setAllData(response.data)
    } 
    getData()
  }, [])



  return (
    <div className="container">
      <div className={classNames(styles.ProductList)}>
          <ProductListTitle title={title} />

        <div className='flex justify-center items-center gap-5 mb-5'>

          {AllData.length > 0 ? AllData.map((items) => (
            <div className={styles.block} key={items.id}>
              <ProductCard {...items} />
            </div>
          )) : 

          <div className='flex justify-center items-center gap-20 mb-5'>
            <div className='flex gap-16 pb-16'>
          {Array.from({length: 4}).map((_,index: number) => <Loader key={index} />)}
          </div>
        </div>}

        </div>

        <div className={styles.button}>
          <Button theme={ButtonTheme.WHITE}>View collection</Button>
        </div>

      </div>
    </div>
  );
};
