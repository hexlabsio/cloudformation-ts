import { TemplateBuilder } from '../src/kloudformation/kloudformation';
import {Lambda} from "../src/kloudformation/modules/lambda";

describe('j', () => {
  it('should', () => {
    TemplateBuilder.create().withCondition('TEST', { 'Fn::Equals': ['ABC', 'DEF']}).build((aws, params, conditional) => {
      conditional('TEST', aws.snsTopic({}));
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
    });
  });
});
