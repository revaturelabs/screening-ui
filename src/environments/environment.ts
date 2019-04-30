// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

/**
 * cleaned up the mess
 * removed smelly code
 *
 * @author Alex Pich | 1803-USF-MAR26 | Wezley Singleton
 * @author Danny S Chhun | 1803-USF-MAR26 | Wezley Singleton
 * @author Michael Adedigba | 1803-USF-MAR26 | Wezley Singleton
 * @author Pedro De Los Reyes | 1803-USF-MAR26 | Wezley Singleton
 */
  // screenforce gateway is 8080
  const adminContext = 'http://localhost:8181';
  const screeningContext = 'http://localhost:8183';
  const reportContext = 'http://localhost:8185';

const bam = '';

export const environment = {
  production: false,
  /** Zuul endpoint  */
  gambitContext: 'http://localhost:10000/',
  /** Assets endpoints for like pictures  */
  assets: 'http://52.87.205.55:8086/angular/assets/',

  adminContext: 'http://localhost:8181',
  screeningContext: 'http://localhost:8183',
  reportContext: 'http://localhost:8185',
  bam: bam,
  url: 'http://54.166.255.85:8085',
  msurl: 'http://34.227.178.103:',
};
