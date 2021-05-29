import React, { useEffect } from 'react';
import {Token, IsVisible, columnsMeta, ColumnsMetaInformation, StudyData} from '../Types/Interfaces';
import {observer} from 'mobx-react';
import { toJS } from 'mobx'
import {getAuthToken, getMetadata, getStudydata} from '../api'
import {SectionHeader} from '../SectionHeader/SectionHeader';
import Switch from "react-switch";
import {storeProps} from '../Types/Interfaces';
import LeftContainerCSS from './ControlPanel.module.css';
import { myStore } from '../App';

let useStateCalled = false;
export const ControlPanel: React.FC<storeProps> = observer(({ store }) => {
  const storeMetaData = store?.Metadata;

  const initialCheckState = (data: columnsMeta[] | undefined) => {
    let updatedArray: IsVisible[] = [];
    data = toJS(data);
    data && data.length > 0 && data.map((item, index) => {
      updatedArray.push({
        isVisible: item.isVisible || false,
        index: index
      })
    })

    return updatedArray;
  }

  const udpatedCheckArray = initialCheckState(store && store.metaData && store.metaData.columnsMetaInformation ? store.metaData.columnsMetaInformation : []);
  const [checkArray, setChecked] = React.useState(udpatedCheckArray);
  const [isUpdateComponent, setComponentUpdate] = React.useState(false);
  

  useEffect(() => {
    handleUpdate();
  }, [])

  useEffect(() => {
    if (isUpdateComponent) {
      handleUpdate();
    }

  }, [isUpdateComponent]);

  const handleUpdate = async () => {
    //If the store has the data, return
    if (storeMetaData?.metaData && storeMetaData?.metaData.length > 0)
      return;

    //Get data from server
    const token: Token = await getAuthToken();
    const metaData: ColumnsMetaInformation = await getMetadata(token.authHeader);
    const studyData: StudyData = await getStudydata(token.authHeader);

    //Set data tostore through actions
    if(metaData && metaData.columnsMetaInformation){
      store?.setMetaDataSuccess(metaData.columnsMetaInformation);  
    }
 
    if(studyData && studyData.data){
      store?.setStudyDataSuccess(studyData.data);
    }

    if (metaData && metaData.columnsMetaInformation) {
      setChecked(initialCheckState(metaData.columnsMetaInformation));
      myStore.setLoader(false);
    }
  }

  const handlechange = (checked: boolean, e: any, id: string) => {
    let index = parseInt(id);
    let newCheck = [...checkArray];
    newCheck[index].isVisible = checked;

    if (storeMetaData?.metaData) {
      store?.setVisibility(index, checked);
      setComponentUpdate(true);
      
      setChecked(newCheck);
      setComponentUpdate(false);
    }
  }
  return (
    <div className={LeftContainerCSS.innerContainer}>
      <SectionHeader label="Studies List control panel:"></SectionHeader>
      <div className={LeftContainerCSS.leftContainerBody}>
        {storeMetaData?.metaData && storeMetaData?.metaData.map((row: columnsMeta, idx: number) => {
          return (
            <div className="row" key={idx}>
              <div className="col" title={row.name?.primaryValue || row.name?.secondaryValue}>{row.name?.primaryValue || row.name?.secondaryValue}</div>
              <div className="col"><Switch onChange={handlechange} id={idx.toString()} onColor="#111111" checked={checkArray[idx]?.isVisible || false} /></div>
            </div>
          )
        })}

      </div>
    </div>
  )
});