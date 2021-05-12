import {Lambda} from "../src/kloudformation/modules/lambda";
import {Template} from "../src/kloudformation/kloudformation";

export default Template.create(aws => {
  const topic = aws.snsTopic({});
    Lambda.create(aws, 'test-logs', {zipFile: 'export async function handler(event) { console.log(event); return { statusCode: 200, body: \'Hello from Lambda\' } }'}, 'index.handler', 'nodejs12.x')
      .snsTrigger(topic)
}
);
