import { AwsLoader } from '../src/cloudformation/cloudformation';

// export default Template.createWithParams({
//   ABC: fromEnv('GHJ')
// },aws => {
//   const topic = aws.snsTopic({});
//     Lambda.create(aws, 'test-logs-5', {zipFile: 'export async function handler(event) { console.log(event); return { statusCode: 200, body: \'Hello from Lambda\' } }'}, 'index.handler', 'nodejs12.x')
//       .snsTrigger(topic).enableTracing().enableTracing()
// }, 'template.json', 'parameters.json', it => JSON.stringify(it, null, 2));


const template = await AwsLoader.register('s3').load();
export default template
  .create()
  .build((aws) => {
    const bucket = aws.s3.bucket({});
    bucket.withLogicalName('XYZ');
    aws.s3.bucket({
      bucketName: bucket.attributes.Arn()
    })
})