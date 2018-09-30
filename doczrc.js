export default {
  ordering: 'ascending',
  dest: '/src/docs/',
  htmlContext: {
    favicon:
      'https://raw.githubusercontent.com/alexlee-dev/portfolio/master/public/favicon/favicon.ico',
    head: {
      links: [
        {
          rel: 'stylesheet',
          href: 'https://cdnjs.cloudflare.com/ajax/libs/grommet/1.11.0/grommet.min.css'
        }
      ]
    }
  }
}
