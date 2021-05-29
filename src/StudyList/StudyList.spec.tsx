import renderer from 'react-test-renderer';
import {StudyList} from '../StudyList/StudyList';

describe("Study List Component", () => {
    test('renders study list', () => {
      const studyList = renderer.create(<StudyList></StudyList>).toJSON();
      expect(studyList).toMatchSnapshot();
    });
});