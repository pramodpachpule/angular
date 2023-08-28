import { CanActivateFn, Router } from '@angular/router';
import { MasterService } from '../Service/master.service';
import { inject } from '@angular/core';

export const roleGuard: CanActivateFn = (route, state) => {
  const service = inject(MasterService);
  const router = inject(Router);
  if (service.HaveRoleAccess(route.url[0].path)) {
    return true;
  } else {
    alert('You dont have access');
    return false;
  }
  return true;
};
