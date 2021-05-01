
import {Template} from "../src/kloudformation/kloudformation";

Template.create(aws => {
  
  aws.snsTopic({});
})
