import { autorun, makeAutoObservable } from "mobx";
import {columnsMeta, ColumnsMetaInformation, StudyData, DataEntity, StudyDataMapped } from '../Types/Interfaces';

export class ObservableStoreImpl {
    //Initialize the store
    metaData: ColumnsMetaInformation = {
        columnsMetaInformation: []
    }
    studyData: StudyData = {
      data: []
    }
    studyDataMapped: StudyDataMapped = {
      data: new Map<number, DataEntity>()
    }
    isLoaded: boolean = true;
    constructor() {
      makeAutoObservable(this)
      autorun(() => console.log(this.metaData));
    }
  
    //Setters
    setMetaDataSuccess(data: columnsMeta[]) {
      data.sort((a,b) => {return (a.order || 0) - (b.order || 0)})
      this.metaData.columnsMetaInformation = data;
    }

    setStudyDataSuccess(data: DataEntity[]){
      /*const mappedData: Map<number, DataEntity> = new Map(data.map(study => [study.studyId?.primaryValue || study.studyId?.secondaryValue, study] as [number, DataEntity]))
      mappedData.forEach((value: DataEntity, key: number) => {
        this.studyDataMapped.data.set(key, value);
      })*/
      this.studyData.data = data;
    }
    
    setVisibility(colIndex: number, isVisible: boolean){
      if(this.metaData.columnsMetaInformation){
        this.metaData.columnsMetaInformation[colIndex].isVisible = isVisible; 
      }
    }

    setLoader(isLoading: boolean){
      this.isLoaded = isLoading;
    }

    //Getters
    get Loader(){
      return this.isLoaded;
    }

    get Metadata() {
       return { metaData: this.metaData.columnsMetaInformation }
    }

    get StudyData(){
      return { 
        studyData: this.studyData.data
      }
    }
  }
  
  export const observableStore = new ObservableStoreImpl();