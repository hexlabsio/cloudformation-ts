import {TopicProperties} from "../src/aws/sns/Topic";
import {Template} from "../src/kloudformation/kloudformation";

Template.createWithParams({
  CodeBucket: { type: 'String' },
  CodeLocation: { type: 'String' } }, (aws, params) =>
{
  console.log(params.CodeLocation());
  aws.snsTopic({_nocaps: '', topicName: params.CodeLocation()} as unknown as TopicProperties)
}
);
