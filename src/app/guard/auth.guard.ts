import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { MasterService } from '../Service/master.service';

export const authGuard: CanActivateFn = (route, state) => {
  const service = inject(MasterService);
  const router = inject(Router);
  if (service.IsLoggedIn()) {
    return true;
  } else {
    router.navigate(['login']);
    return false;
  }
};
