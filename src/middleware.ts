import createMiddleware from 'next-intl/middleware';
import {routing} from './app/i18n/routing';


export default createMiddleware(routing);

export const config = {
  // Coincide con todas las rutas excepto las internas de Next, archivos estáticos y APIs
  matcher: ['/((?!api|_next|.*\\..*).*)']

};
