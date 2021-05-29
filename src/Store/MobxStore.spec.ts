import {data} from '../StudyData';
import { ObservableStoreImpl } from './MobxStore';

const store = new ObservableStoreImpl();
store?.setMetaDataSuccess(data.GetMetadata().columnsMetaInformation);
store?.setStudyDataSuccess(data.GetStudyList().data);

describe("Store", () => {
    it("sets metadata and study data to store", () => {
      store?.setMetaDataSuccess(data.GetMetadata().columnsMetaInformation);
      store?.setStudyDataSuccess(data.GetStudyList().data);
      expect(store.metaData.columnsMetaInformation?.length).toBe(28);
      expect(store.studyData.data?.length).toBe(10);
    })
});