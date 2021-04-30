import {Template} from "../src/kloudformation/kloudformation";
import {Lambda} from "../src/kloudformation/modules/lambda";

describe('j', () => {
  it('should', () => {
    const output = Template.create(aws => {
      const lambda = Lambda.create(aws,'test', {zipFile: 'console.log("hi")'}, 'index', "nodejs12.x");
      aws.cloudfrontDistribution({
        distributionConfig: {
          enabled: true,
          aliases: [ 'www.dev.klouds.io', 'dev.klouds.io' ],
          customErrorResponses: [{errorCode: 404}]
        }
      })
    }, undefined);
    
    console.log(JSON.stringify(output, null, 2));
  });
});
