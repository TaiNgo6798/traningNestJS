import { Injectable } from '@nestjs/common';
import * as uid from 'uid'

@Injectable()
export class TodoService {

  private todoList: any[] = [
        {
          id: '1',
          content: 'todo list 1'
        },
        
        {
          id: '2',
          content: 'todo list 2'
        },
        {
          id: '3',
          content: 'todo list 3'
        }
      ]

  async getAllTodo(){
    return this.todoList
  }

  async addTodo(content: string){
    const item = {
      id: uid(10),
      content
    }
    this.todoList.unshift(item)
    return this.todoList
  }

  async deleteTodo(id: string){
    this.todoList = this.todoList.filter(item => item.id !== id)
    return this.todoList
  }

  async editTodo(id: string, content: string) {
    return this.todoList.map(v => {
      if(v.id === id){
        v.content = content
      }
      return v
    })
  }

}
