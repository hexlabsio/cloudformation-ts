import {Template} from "../src/kloudformation/kloudformation";
import {ApiV2} from "../src/kloudformation/modules/apiv2";

Template.createWithParams({
  CodeBucket: { type: 'String' },
  CodeLocation: { type: 'String' } }, (aws, params) =>
{
  ApiV2.create(aws, 'test-api', 'dev', 'test', 'client', 'lambdaarn');
}
);
