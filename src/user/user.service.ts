import { Injectable } from '@nestjs/common';
const jwt = require('jsonwebtoken')

@Injectable()
export class UserService {

  private userList: any[] = [{
    id: '1',
    name: 'taingo',
    password: '123123',
    permissions: ['watch'],
    role: 'user'
  },
  {
    id: '2',
    name: 'admin',
    password: 'admin',
    permissions: ['watch', 'crud'],
    role: 'admin'
  }
]

  async getAllUsers(){
    return this.userList
  }

  async getUserByID(userID: string) {
      return this.userList.find(user => user.id === userID) || 'Khong tim thay'
  }


  // dang nhap va tao token 
  async login(userName: string, password: string){
    const user = this.userList.find( user => user.name === userName && user.password === password )
    try{
      const token = jwt.sign(user, 'taingo6798')
      return {
        status: 'success',
        message: 'Dang nhap thanh cong !',
        token: token
      }
    }
    catch{
      return {
        status: 'failed',
        message: 'Dang nhap that bai !',
        token: ''
      }
    }

  }
}
