import { Action } from 'redux'; // reduxで定義されているAction interfaceだけimport

// reduxのActionとして判別するための識別子をenumとして定義
export enum TodoActionType {
  ADD_TODO = 'ADD_TODO'
}

// Todoを追加するActionとして、Actionを継承したinterfaceを定義
// 追加するPayloadの情報も同時に持つ
export interface IAddTodoAction extends Action {
  type: TodoActionType.ADD_TODO;
  payload: {
    todo: string;
  };
}

// Actionを表現したinterfaceを一つの型として取り扱うためにTodoAction型を定義
export type TodoAction = IAddTodoAction;

// 定義したActionのinterfaceを作成するCreatorのinterfaceを定義
export interface ITodoActionCreator {
  addTodoAction(todo: string): IAddTodoAction;
}

// 定義したCreatorの実装を定義(exportをつけてないので外からは見えない)
class TodoActionCreator implements ITodoActionCreator {
  public addTodoAction = (todo: string): IAddTodoAction => {
    return {
      payload: {
        todo
      },
      type: TodoActionType.ADD_TODO
    };
  };
}

// Creatorのインスタンスを作成
export const todoActionCreator: ITodoActionCreator = new TodoActionCreator();