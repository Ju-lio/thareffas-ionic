export interface IUserData {
  id: number;
  tarefa: string;
  feito: boolean;
}

export interface IAction {
  text: string;
  data: {
    action: string;
  };
}
