import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty } from 'class-validator';

export class CreateUserDto {
  @ApiProperty({ example: 'user@mail.ru', description: 'Почта' })
  @IsEmail()
  @IsNotEmpty()
  readonly email: string;
  @ApiProperty({ example: '12345', description: 'пароль' })
  @IsNotEmpty()
  readonly password: string;
}
