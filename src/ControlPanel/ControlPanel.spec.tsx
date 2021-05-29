import renderer from 'react-test-renderer';
import {ControlPanel} from '../ControlPanel/ControlPanel';
import { ObservableStoreImpl } from '../Store/MobxStore';
import {data} from '../StudyData';

const store = new ObservableStoreImpl();
store?.setMetaDataSuccess(data.GetMetadata().columnsMetaInformation);
store?.setStudyDataSuccess(data.GetStudyList().data);


describe("Control Panel", () => {
    test('renders control panel', () => {
      const controlPanel = renderer.create(<ControlPanel store={store}></ControlPanel>).toJSON();
      expect(controlPanel).toMatchSnapshot();
    });
});