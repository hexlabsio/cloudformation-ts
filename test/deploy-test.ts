import {Api} from "../src/kloudformation/modules/api";
import {Template} from "../src/kloudformation/kloudformation";

console.log(JSON.stringify(process.env, null, 2));
export default Template.createWithParams({
  CodeBucket: { type: 'String' },
  CodeLocation: { type: 'String' } }, (aws, params) =>
{
  // const api = Api.create(aws, 'test-api', 'dev')
  // .path('/account').method('GET')
  //   .path('/{accountId}').method('GET')
  //   .api;
  
  const api = Api.create(aws, 'test-api', 'dev').apiFrom({
    '/account': {
      methods: ['GET', 'POST'],
      paths: {
        '/{accountId}': {
          methods: ['GET', 'POST']
        }
      }
    }
  });
  const hostedZone = aws.route53HostedZone({
    _logicalName: 'HostedZoneName',
    name: 'klouds.io'
  });
  return {
    apis: [api.definition()],
    outputs: {
      KloudsIOHostedZoneId: {
        description: 'Hosted Zone Id',
        value: { Ref: hostedZone._logicalName }
      }
    }
  }
}
);
