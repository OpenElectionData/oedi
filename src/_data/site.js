const isDev = process.env.ELEVENTY_RUN_MODE !== 'build';

module.exports = {
  isDev,
  abbr: 'OEDI',
  title: 'Open Election Data Initiative',
  email: 'openelectiondata@ndi.org',
  description:
    'The Global Network of Domestic Election Monitors connects over 245 regional networks and individual nonpartisan citizen observation groups to share best practices and further our common aspirations for representative, responsive, transparent, democratic governance.',
  baseurl: '',
  url: isDev ? 'http://localhost:8080' : 'https://openelectiondata.net'
};
