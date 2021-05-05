import {Api} from "../src/kloudformation/modules/api";
import {Template} from "../src/kloudformation/kloudformation";

export default Template.createWithParams({
  CodeBucket: { type: 'String' },
  CodeLocation: { type: 'String' } }, (aws, params) =>
{
  const api = Api.create(aws, 'test-api', 'dev')
  .path('/account').method('GET')
    .path('/{accountId}').method('GET')
    .api;
  return {
    apis: [api.definition()],
  }
}
);
