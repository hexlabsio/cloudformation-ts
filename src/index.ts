import {Template} from "./kloudformation/kloudformation";
import {Lambda} from "./kloudformation/modules/lambda";

Template.create( aws => {
  const topic = aws.snsTopic({topicName: 'Jimmy'});
  const lambda = Lambda.node(aws, 'klouds-test-dev', {zipFile: 'console.log("hi")'}, 'bundle.jimmy');
  lambda.snsTrigger(topic);
}, '../template.json');
