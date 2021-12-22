import {Lambda} from "../src/kloudformation/modules/lambda";
import {TemplateBuilder} from "../src/kloudformation/kloudformation";

// export default Template.createWithParams({
//   ABC: fromEnv('GHJ')
// },aws => {
//   const topic = aws.snsTopic({});
//     Lambda.create(aws, 'test-logs-5', {zipFile: 'export async function handler(event) { console.log(event); return { statusCode: 200, body: \'Hello from Lambda\' } }'}, 'index.handler', 'nodejs12.x')
//       .snsTrigger(topic).enableTracing().enableTracing()
// }, 'template.json', 'parameters.json', it => JSON.stringify(it, null, 2));


export default TemplateBuilder.create()
.envParams({ABC: 'GHJ'})
.build((aws, params) => {
  const topic = aws.snsTopic({topicName: params.ABC()});
  Lambda.create(aws, 'test-logs-5', {zipFile: 'export async function handler(event) { console.log(event); return { statusCode: 200, body: \'Hello from Lambda\' } }'}, 'index.handler', 'nodejs12.x')
      .snsTrigger(topic).enableTracing().enableTracing()

})