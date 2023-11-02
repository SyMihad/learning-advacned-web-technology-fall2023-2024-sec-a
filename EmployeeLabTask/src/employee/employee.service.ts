import { Injectable } from '@nestjs/common';
import { CreateEmployeeDto } from './dto/createeEmployee.dto';
import { Employee } from './entities/employee.model';

@Injectable()
export class EmployeeService {
    employees: Employee[] = [];

    register(createEmployeeDto : CreateEmployeeDto){
        const newEmployee = new Employee(createEmployeeDto.eName, createEmployeeDto.eContractNo, createEmployeeDto.eUserName, createEmployeeDto.ePassword);
        this.employees.push(newEmployee);
        return "New Employee Created";
    }

    getAll(){
        return [...this.employees];
    }

    find(name: string){
        return this.employees.find(obj => obj.eName === name);
    }

    update(createEmployeeDto : CreateEmployeeDto){
        const employee = this.employees.find(emp => emp.eName === createEmployeeDto.eName);

        if(employee){
            employee.eContractNo = createEmployeeDto.eContractNo;
            employee.eUserName = createEmployeeDto.eUserName;
            employee.ePassword = createEmployeeDto.ePassword;
            return "Employee Updated";
        }
        else{
            return "Not Found";
        }
    }

    delete(name: string){
        const index = this.employees.findIndex(emp => emp.eName === name);
        
        if(index === -1){
            return "Employee not found";
        }

        this.employees.splice(index, 1);
        return "Employee Deleted";
    }
}
