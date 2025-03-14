import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { AuthService } from './auth.service';

export const tokenInterceptor: HttpInterceptorFn = (req, next) => {
  const authSvc = inject(AuthService);
  let accessUser = authSvc.accessUser$.getValue();

  if (!accessUser || !accessUser.token) {
    return next(req);
  }

  return next(
    req.clone({
      headers: req.headers.append(
        'Authorization',
        'Bearer ' + accessUser.token
      ),
    })
  );
};
