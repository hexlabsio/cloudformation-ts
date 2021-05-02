import {Lambda} from "../src/kloudformation/modules/lambda";
import {Template} from "../src/kloudformation/kloudformation";
 import {Api} from "../src/kloudformation/modules/api";

Template.create(aws => {
  const lambda = Lambda.create(aws, 'test-lambda', {zipFile: 'abc.com'}, 'handler.ts', 'nodejs14.x');
   Api.create(aws, 'test-api', 'dev', [], lambda.lambda.attributes.Arn)
    .path('a/b').method('GET')
    .path('c').method('POST')
});
