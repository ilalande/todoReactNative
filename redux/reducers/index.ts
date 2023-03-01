import { combineReducers } from 'redux';
import tasks from './tasks.reducer';
import { ITask } from '../../custom-types/content-types';
export default combineReducers({
  tasks,
});

export type IRootState = {
  tasks: {
    allTasks: ITask[];
  };
};
