import {observer} from 'mobx-react';
import {storeProps} from '../Types/Interfaces';
import RowsCSS from './Rows.module.css';

export const Rows: React.FC<storeProps> = observer(({store}) => {
  const storeMetaData = store?.Metadata;
  const storeStudyData = store?.StudyData;
    return (
      <div>
        {storeStudyData && storeStudyData.studyData.map((row: any, id: number) => {
          return (
            <div className="row">
              { storeMetaData?.metaData && storeMetaData?.metaData.map((col: any, id: number) => {
                if (col.isVisible) {
                  if(col.propertyName == "studyStatus"){
                    return (
                      <div className="col"><div className={RowsCSS.studyStatus}>{row[col.propertyName]?.primaryValue || row[col.propertyName]?.secondaryValue}</div></div>
                    )
                  }
                  else{
                    return (
                      <div className="col">{row[col.propertyName]?.primaryValue || row[col.propertyName]?.secondaryValue}</div>
                    )
                  }
                  
                }
              })}
            </div>
          )
        })}
    </div>)
  })