import { Body, Controller, Get, Param, Post, UseGuards } from '@nestjs/common';
import { CreateEmployeeDto } from './dto/createeEmployee.dto';
import { EmployeeService } from './employee.service';
import { AdminGuard } from 'src/admin/admin.guard';

@UseGuards(AdminGuard)
@Controller('employee')
export class EmployeeController {
    constructor(private readonly employeeService: EmployeeService){}

    @UseGuards(AdminGuard)
    @Post('register')
    registerEmployee(@Body() createEmployeeDto: CreateEmployeeDto){
        return this.employeeService.register(createEmployeeDto);
    }

    @Get('all')
    getAllEmployees(){
        return this.employeeService.getAll();
    }

    @Get('find/:name')
    find(@Param('name') name: string){
        return this.employeeService.find(name);
    }

    @Post('update')
    update(@Body() createEmployeeDto: CreateEmployeeDto){
        return this.employeeService.update(createEmployeeDto);
    }

    @Get('delete/:name')
    delete(@Param('name') name: string){
        return this.employeeService.delete(name);
    }
}
