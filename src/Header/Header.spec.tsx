import renderer from 'react-test-renderer';
import {Header} from '../Header/Header';
import { ObservableStoreImpl } from '../Store/MobxStore';
import {data} from '../StudyData';

const store = new ObservableStoreImpl();
store?.setMetaDataSuccess(data.GetMetadata().columnsMetaInformation);
store?.setStudyDataSuccess(data.GetStudyList().data);

describe("Grid Header Component", () => {
    test('renders grid header', () => {
      const header = renderer.create(<Header store={store}></Header>).toJSON();
      expect(header).toMatchSnapshot();
    });
});