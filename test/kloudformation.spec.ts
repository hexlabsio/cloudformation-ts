import {Template} from "../src/kloudformation/kloudformation";
import {Lambda} from "../src/kloudformation/modules/lambda";

describe('j', () => {
  it('should', () => {
    const output = Template.create(aws => {
      Lambda.create(aws,'test', {zipFile: 'console.log("hi")'}, 'index', "nodejs12.x");
      const a = aws.cloudfrontDistribution({
        distributionConfig: {
          defaultCacheBehavior: {targetOriginId: 'id', viewerProtocolPolicy: 'policy' },
          enabled: true,
          aliases: [ 'www.dev.klouds.io', 'dev.klouds.io' ],
          customErrorResponses: [{errorCode: 404}]
        }
      });
      return {
        outputs: { 'OUTPUT1': {
          value: { Ref: a._logicalName }
        } }
      }
    }, undefined);
    
    console.log(JSON.stringify(output, null, 2));
  });
});
