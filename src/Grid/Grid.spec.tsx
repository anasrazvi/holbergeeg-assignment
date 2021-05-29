import renderer from 'react-test-renderer';
import {Grid} from '../Grid/Grid';
import { ObservableStoreImpl } from '../Store/MobxStore';
import {data} from '../StudyData';

const store = new ObservableStoreImpl();
store?.setMetaDataSuccess(data.GetMetadata().columnsMetaInformation);
store?.setStudyDataSuccess(data.GetStudyList().data);

describe("Grid Component", () => {
    test('renders grid component', () => {
        const grid = renderer.create(<Grid store={store}></Grid>).toJSON();
        expect(grid).toMatchSnapshot();
    });
});