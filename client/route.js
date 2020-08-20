export default function route(page) {
  switch (page) {
    case '':
      return '/partner-home'

    case 'partner-home':
      import('./pages/home')
      return page
  }
}
