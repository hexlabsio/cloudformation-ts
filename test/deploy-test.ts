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
  .params({
    MyBucketInStackA: { type: 'String' },
    Enabled: { type: 'AWS::SSM::Parameter::Value<AWS::EC2::KeyPair::KeyName>' },
  })
  .withCondition('abc', () => true)
  .withCondition(
    'xyz', ({compare, params, condition}) =>
    compare.and(condition('abc'), params.Enabled())
  )
  .build((aws, params, conditional) => {
    conditional('xyz', aws.s3.bucket({
      bucketName: aws.functions.if(aws.condition('abc'), aws.functions.base64Encode(params.MyBucketInStackA()), 'no name'),
    }));
    aws.s3.bucket({
      bucketName: aws.functions.sub('${u}asfsdf${xyz}adf${x}sdf${q}', {xyz: '', x: '', q: '', u: aws.noValue})
    })
})