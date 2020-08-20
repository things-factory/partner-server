import route from './client/route'
import bootstrap from './client/bootstrap'

export default {
  route,
  routes: [
    {
      tagname: 'partner-home',
      page: 'partner-home'
    },
    {
      tagname: 'partner-register',
      page: 'partner-register'
    }
  ],
  bootstrap
}
