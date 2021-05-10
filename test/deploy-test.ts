import {Template} from "../src/kloudformation/kloudformation";

console.log(JSON.stringify(process.env, null, 2));
export default Template.create(aws =>
{
  const topic = aws.snsTopic({});
  return {
    outputs: {
      KloudsIOHostedZoneId: {
        description: 'Hosted Zone Id',
        value: { Ref: topic._logicalName }
      }
    }
  }
}
);
