import { Controller, Get, Post, Body, UseGuards } from '@nestjs/common';
import { UserService } from './user.service';
import { AuthGuard } from 'src/auth.guard';

@Controller('users')

export class UserController {

  constructor(private readonly userService: UserService) { }

  @UseGuards(AuthGuard) // kiem tra role co phai la admin khong
  @Get()
  async getAllUser() {
    return this.userService.getAllUsers()
  }

  @UseGuards(AuthGuard)
  @Post('byid') //lay user theo id
  async getUserByID(@Body() body) {
    const foundUser = await this.userService.getUserByID(body.id)
    if (foundUser) return foundUser
    return null
  }

  @Post('login')// dang nhap va tao token
  async login(@Body() body) {
    return this.userService.login(body.username, body.password)
  }

}
