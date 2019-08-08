const context = 'http://screenforce-dev-48599218.us-east-1.elb.amazonaws.com';
const bam = 'http://18.219.59.193:9001/api/v2';
export const environment = {
  production: true,
  gambitContext: 'http://ec2-54-89-224-207.compute-1.amazonaws.com:8181/',
  context: context, // change for what the production environment would actually be
  adminContext: 'http://screenforce-dev-48599218.us-east-1.elb.amazonaws.com/admin',
  screeningContext: 'http://screenforce-dev-48599218.us-east-1.elb.amazonaws.com/screening',
  bam: bam,
  url: 'http://screenforce-dev.s3-website-us-east-1.amazonaws.com/',
  msurl: 'http://34.227.178.103:',
  assets: 'http://screenforce-dev.s3-website-us-east-1.amazonaws.com/assets/',
};
