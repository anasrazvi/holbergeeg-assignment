import renderer from 'react-test-renderer';
import {SectionHeader} from './SectionHeader';

describe("Section Header Component", () => {
    test('renders section header', () => {
      const sectionHeader = renderer
                          .create(<SectionHeader label="Study List:"></SectionHeader>).toJSON();
      expect(sectionHeader).toMatchSnapshot();
    });
  });