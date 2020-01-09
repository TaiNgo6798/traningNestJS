import { CanActivate, ExecutionContext, Injectable, Body } from '@nestjs/common';
import * as jwt from 'jsonwebtoken'
import { UserService } from './user/user.service';

@Injectable()
export class AuthGuard implements CanActivate{


    async canActivate( context: ExecutionContext ){
        const { headers } = context.switchToHttp().getRequest()
        const { token } = headers
        if(token){
          try{
            const user = jwt.verify(token, 'taingo6798')
            return user.role === 'admin'
          }
          catch{
            return false
          }

        }
        return false
    }
}
