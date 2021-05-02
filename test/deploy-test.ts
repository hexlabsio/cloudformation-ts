import {Template} from "../src/kloudformation/kloudformation";

Template.createWithParams({
  CodeBucket: { type: 'String' },
  CodeLocation: { type: 'String' } }, (aws, params) =>
{
  console.log(params.CodeLocation());
  aws.snsTopic({topicName: params.CodeLocation()})
}
);
