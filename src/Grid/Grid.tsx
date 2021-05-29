import {observer} from 'mobx-react';
import {Header} from '../Header/Header';
import {Rows} from '../Rows/Rows';
import {storeProps} from '../Types/Interfaces'
import GridCSS from './Grid.module.css'

export const Grid: React.FC<storeProps> = observer(({store}) => {
    return (
        <div className={GridCSS.gridContainer}>
          <Header store={store}></Header>
          <Rows store={store}></Rows>
        </div>
    )
  });