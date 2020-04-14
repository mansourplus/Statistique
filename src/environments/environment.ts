// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
    data_url_old: 'https://covid-19-coronavirus-statistics.p.rapidapi.com/v1/stats',
    data_host_old:'covid-19-coronavirus-statistics.p.rapidapi.com',
    data_api_key_old:'17e8efc68cmsh25cb37a6dd0ad33p188d8bjsn153da8654eb7',
    world_stats_url_old: 'https://corona.lmao.ninja/all',
    news_url:
      'https://newsapi.org/v2/everything?q=COVID&from=2020-03-16&sortBy=publishedAt&apiKey=7f3341405a794a92a026e79902e89593&pageSize=100&language=en',
      data_url: 'https://coronavirus-monitor.p.rapidapi.com/coronavirus/cases_by_country.php',
      data_host:'coronavirus-monitor.p.rapidapi.com',
      data_api_key:'17e8efc68cmsh25cb37a6dd0ad33p188d8bjsn153da8654eb7',
      world_stats_url: 'https://corona.lmao.ninja/all',
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
