import style from'./style.module.scss'
import { List } from '../List/List';
import { Data } from '../../../types';

interface Props {
  appData: Data
  setAppData: Function
}

function Lists({ appData, setAppData }: Props) {
  return (
    <div className={style.lists}>
      <List
        appData={appData}
        setAppData={setAppData}
        title={'Backlog'}
        tasks={appData.backlog}
        prevTasks={[]}
        abilityAddTask={true}
        mode={'backlog'}
        prevMode={''}
      />
      <List
        appData={appData}
        setAppData={setAppData}
        title={'Ready'}
        tasks={appData.ready}
        prevTasks={appData.backlog}
        abilityAddTask={!!+appData.backlog.length}
        mode={'ready'}
        prevMode={'backlog'}
      />
      <List
        appData={appData}
        setAppData={setAppData}
        title={'In Progress'}
        tasks={appData.progress}
        prevTasks={appData.ready}
        abilityAddTask={!!+appData.ready.length}
        mode={'progress'}
        prevMode={'ready'}
      />
      <List
        appData={appData}
        setAppData={setAppData}
        title={'Finished'}
        tasks={appData.finished}
        prevTasks={appData.progress}
        abilityAddTask={!!+appData.progress.length}
        mode={'finished'}
        prevMode={'progress'}
      />
    </div>
  )
}
export { Lists }