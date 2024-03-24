interface Task {
  id: number,
  title: string,
  description: string
}

interface Data {
  [mode: string]: Task[],
  backlog: Task[],
  ready: Task[],
  progress: Task[],
  finished: Task[]
}

export type { Data, Task }