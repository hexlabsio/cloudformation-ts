import {Template} from "../src/kloudformation/kloudformation";

console.log(process.env);
Template.create(aws => {
  aws.snsTopic({topicName: process.env.XYZ})
});
