import { Injectable } from '@nestjs/common';
import { Admin } from './entities/admin.model';

@Injectable()
export class AdminService {
    private admins = [
        { name: 'admin', password: '1234', role: 'admin' },
      ];
    

    login(admin: Admin){
        
        const admin1 = this.admins.find(ad => ad.name === admin.name.eName);
        
        if(admin1.name === admin.name && admin1.password === admin.password){
            return "Login Sucess";
        }

        return "Not found";
    }

    findByName(name: string) {
        return this.admins.find(user => user.name === name);
      }
}
