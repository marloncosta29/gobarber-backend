import { Router } from 'express';
import appointmentsRoutes from '@modules/appointments/http/routes/appointments.routes';
import usersRouters from '@modules/users/infra/http/routes/users.route';
import sessionsRoutes from '@modules/users/infra/http/routes/sessions.routes';
import passwordRoutes from '@modules/users/infra/http/routes/password.routes';
import profileRoutes from '@modules/users/infra/http/routes/profile.routes';
import providersRoutes from '@modules/appointments/http/routes/providers.routes';
const routes = Router();

routes.use('/appointments', appointmentsRoutes);
routes.use('/users', usersRouters);
routes.use('/sessions', sessionsRoutes);
routes.use('/password', passwordRoutes);
routes.use('/profile', profileRoutes);
routes.use('/providers', providersRoutes);

export default routes;
