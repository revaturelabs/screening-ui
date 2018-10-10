// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

/**
 * cleaned up the mess
 * removed smelly code
 *
 * @author Alex Pich | 1803-USF-MAR26 | Wezley Singleton
 *
 * @author Danny S Chhun | 1803-USF-MAR26 | Wezley Singleton
 *
 * @author Michael Adedigba | 1803-USF-MAR26 | Wezley Singleton
 *
 * @author Pedro De Los Reyes | 1803-USF-MAR26 | Wezley Singleton
 */


export const environment = {
  production: false,
  adminContext: 'http://ec2-54-210-14-237.compute-1.amazonaws.com:8181',
  screeningContext: 'http://ec2-54-210-14-237.compute-1.amazonaws.com:8183',
};
