import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { AdminService } from './admin.service';

@Injectable()
export class AdminGuard implements CanActivate {
  constructor(private adminService: AdminService) {}

  canActivate(context: ExecutionContext): boolean {
    const request = context.switchToHttp().getRequest();
    const admin = this.adminService.findByName(request.user.name);

    return admin && admin.role === 'admin';
  }
}