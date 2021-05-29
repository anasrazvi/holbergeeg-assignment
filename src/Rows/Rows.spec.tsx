import renderer from 'react-test-renderer';
import {Rows} from '../Rows/Rows';
import { ObservableStoreImpl } from '../Store/MobxStore';
import {data} from '../StudyData';

const store = new ObservableStoreImpl();
store?.setMetaDataSuccess(data.GetMetadata().columnsMetaInformation);
store?.setStudyDataSuccess(data.GetStudyList().data);

describe("Grid Rows Component", () => {
    test('renders grid rows', () => {
        const rows = renderer.create(<Rows store={store}></Rows>).toJSON();
        expect(rows).toMatchSnapshot();
    });
});