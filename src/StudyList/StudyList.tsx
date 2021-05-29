import {SectionHeader} from '../SectionHeader/SectionHeader';
import {Grid} from '../Grid/Grid';
import {myStore} from '../App'
import RightContainerCSS from './StudyList.module.css';

export const StudyList: React.FC = () => {
    return (<div className={RightContainerCSS.innerContainer}>
                <SectionHeader label="Study List:"></SectionHeader>
                <Grid store={myStore}></Grid>
          </div>)
  }