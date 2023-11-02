import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { Admin } from './entities/admin.model';
import { AdminService } from './admin.service';

@Controller('admin')
export class AdminController {

    constructor(private readonly adminService: AdminService){}

    @Post('login')
    Login(@Body() admin: Admin){
        return this.adminService.login(admin);
    }
}
