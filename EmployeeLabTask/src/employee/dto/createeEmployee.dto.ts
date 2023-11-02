import { IsString, IsEmail, IsNumber, isString } from "class-validator";

export class CreateEmployeeDto{
    @IsString()
    eName: string;

    @IsNumber()
    eContractNo: number;

    @IsString()
    eUserName: string;

    @IsString()
    ePassword: string;
}