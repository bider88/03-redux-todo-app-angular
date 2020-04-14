export class Todo {
  constructor(
    public text: string,
    public done: boolean = false,
    public id: number = new Date().getTime()
  ) { }
}
