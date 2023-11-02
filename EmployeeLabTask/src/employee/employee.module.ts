import { Module } from '@nestjs/common';
import { EmployeeController } from './employee.controller';
import { EmployeeService } from './employee.service';
import { AdminModule } from 'src/admin/admin.module';
import { AdminService } from 'src/admin/admin.service';
import { AdminController } from 'src/admin/admin.controller';

@Module({
  controllers: [EmployeeController, AdminController],
  providers: [EmployeeService, AdminService]
})
export class EmployeeModule {}
