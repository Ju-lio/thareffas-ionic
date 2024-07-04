export interface IUserData {
  tarefa: string;
  feito: boolean;
}

export interface IAction {
  text: string;
  data: {
    action: string;
  };
}
