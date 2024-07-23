import { Module } from '@nestjs/common'
import { UserController } from './user.controller'
import { UserService } from './user.service'
import { DatabaseModule } from 'src/database/database.module'
import { JwtModule } from '@nestjs/jwt'

@Module({
  imports: [
    JwtModule.register({
      secret: process.env.JWT_SECRET,
    }),
    DatabaseModule,
    DatabaseModule,
  ],
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}
