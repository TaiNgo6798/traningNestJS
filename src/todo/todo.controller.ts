import { Controller, Get, Post, Body, UseGuards } from '@nestjs/common';
import { TodoService } from './todo.service';
import { AuthGuard } from 'src/auth.guard';


@Controller('todos')
@UseGuards(AuthGuard)
export class TodoController {

  constructor( private readonly todoService: TodoService ){}

  @Get()
  async getTodoList(){
    return this.todoService.getAllTodo()
  }

  @Post('add')
  async addTodo(@Body() body){
    if(body.content)
    return this.todoService.addTodo(body.content)
    else
    return 'Chua nhap content'
  }

  @Post('delete')
  async deleteTodo(@Body() body){
    if(body.id)
    return this.todoService.deleteTodo(body.id)
    else
    return 'Khong thanh cong'
  }

  @Post('edit')
  async editTodo(@Body() body){
    if(body.id && body.content)
    return this.todoService.editTodo(body.id, body.content)
    else
    return 'Khong thanh cong'
  }

}
