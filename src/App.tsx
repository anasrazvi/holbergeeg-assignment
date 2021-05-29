import {ControlPanel} from './ControlPanel/ControlPanel'
import {StudyList} from './StudyList/StudyList'
import './App.css';
import React from 'react';
import LoadSpinner from './Loader/loader';
import { ObservableStoreImpl } from './Store/MobxStore';
import { observer } from 'mobx-react';

export const myStore = new ObservableStoreImpl();

export const App: React.FC = observer(() => {
  return (
    <div className="container">
      <ControlPanel store={myStore} />
      {myStore.Loader && <LoadSpinner />}
      <StudyList />
    </div>
  );
});