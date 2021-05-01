
import {Template} from "../src/kloudformation/kloudformation";

Template.createWithParams({
  TestParam: { type: 'String' }
}, (aws, params) => {
  
  aws.snsTopic({topicName: params.TestParam()});
})
