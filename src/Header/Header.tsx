import {observer} from 'mobx-react';
import {storeProps} from '../Types/Interfaces';
import HeaderCSS from './Header.module.css';

export const Header: React.FC<storeProps> = observer(({store}) => {
    return (
      <div className={HeaderCSS.header}>
        {store && store.metaData && store.metaData.columnsMetaInformation && store.metaData.columnsMetaInformation.map((col: any, idx: number) => {  
          if(col.isVisible){
            return(
              <div className="col" key={idx}><strong>{col.name?.primaryValue || col.name?.secondaryValue}</strong></div>
            )
          }}
        )}
      </div>
    ) 
  })