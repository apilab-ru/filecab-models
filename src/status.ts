export interface StatusData {
  name: string;
  status: Status;
}

export type Status = StatusList | null;

export enum StatusList {
  planned = 'planned',
  complete = 'complete',
  process = 'process',
  drop = 'drop',
  hide = 'hide'
}

export const STATUS_WITH_PROGRESS = [StatusList.process, StatusList.drop];

export const STATUS_WITH_STARS = [StatusList.process, StatusList.drop, StatusList.complete];

export const STATUS_LIST: StatusData[] = [
  {
    name: 'Запланировано',
    status: StatusList.planned,
  },
  {
    name: 'Просмотрено',
    status: StatusList.complete,
  },
  {
    name: 'Смотрю',
    status: StatusList.process,
  },
  {
    name: 'Брошено',
    status: StatusList.drop,
  },
  {
    name: 'Скрыть',
    status: StatusList.hide,
  },
  {
    name: 'Нет',
    status: null,
  },
];
