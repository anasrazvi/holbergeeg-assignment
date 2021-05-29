import renderer from 'react-test-renderer';
import {LoadSpinner} from '../Loader/loader';

describe("Loader Spinner", () => {
    test('renders loader', () => {
      const loaderSpinner = renderer.create(<LoadSpinner></LoadSpinner>).toJSON();
      expect(loaderSpinner).toMatchSnapshot();
    });
});