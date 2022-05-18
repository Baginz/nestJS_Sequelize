import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Put,
  UseGuards,
  UsePipes,
} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UsersService } from './users.service';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { User } from './users.model';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { Roles } from '../auth/roles-auth.decorator';
import { RolesGuard } from '../auth/roles.guard';
import { AddRoleDto } from './dto/add-role.dto';
import { BanUserDto } from './dto/ban-user.dto';
import { ValidationPipe } from '../pipes/validation.pipe';
import { EditputUserDto } from './dto/editput-user.dto';
import { EditpatchUserDto } from './dto/editpatch-user.dto';

@ApiTags('Пользователи')
@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @ApiOperation({ summary: 'Создание пользователя' })
  @ApiResponse({ status: 200, type: User })
  @UsePipes(new ValidationPipe())
  @Post()
  create(@Body() userDto: CreateUserDto) {
    return this.usersService.createUser(userDto);
  }

  @ApiOperation({ summary: 'Удаление пользователя' })
  @ApiResponse({ status: 200, type: User })
  @Delete('/:id')
  delete(@Param('id') id: string) {
    return this.usersService.deleteUser(id);
  }

  @ApiOperation({ summary: 'Получить всех пользователей' })
  @ApiResponse({ status: 200, type: [User] })
  @Roles('ADMIN')
  @UseGuards(RolesGuard)
  @Get()
  getAll() {
    return this.usersService.getAllUsers();
  }

  @ApiOperation({ summary: 'Получить пользовател' })
  @ApiResponse({ status: 200, type: User })
  @Roles('ADMIN')
  @UseGuards(RolesGuard)
  @Get('/:id')
  getOne(@Param('id') id: string) {
    return this.usersService.getOneUser(id);
  }

  @ApiOperation({ summary: 'Изменить пользовател' })
  @ApiResponse({ status: 200, type: User })
  @Roles('ADMIN')
  @UseGuards(RolesGuard)
  @UsePipes(new ValidationPipe())
  @Put('/:id')
  editPut(@Body() userDto: EditputUserDto, @Param('id') id: string) {
    return this.usersService.editUserPut(userDto, id);
  }

  @ApiOperation({ summary: 'Изменить пользовател' })
  @ApiResponse({ status: 200, type: User })
  @Roles('ADMIN')
  @UseGuards(RolesGuard)
  @UsePipes(new ValidationPipe())
  @Patch('/:id')
  editPatch(@Body() userDto: EditpatchUserDto, @Param('id') id: string) {
    return this.usersService.editUserPatch(userDto, id);
  }

  @ApiOperation({ summary: 'Выдать роль' })
  @ApiResponse({ status: 200 })
  @Roles('ADMIN')
  @UseGuards(RolesGuard)
  @UsePipes(new ValidationPipe())
  @Post('/role')
  addRole(@Body() userDto: AddRoleDto) {
    return this.usersService.addRole(userDto);
  }

  @ApiOperation({ summary: 'Забанить пользователя' })
  @ApiResponse({ status: 200 })
  @Roles('ADMIN')
  @UseGuards(RolesGuard)
  @UsePipes(new ValidationPipe())
  @Post('/ban')
  ban(@Body() userDto: BanUserDto) {
    return this.usersService.ban(userDto);
  }
}
