import { Value } from '../../kloudformation/Value';
import { Attribute } from '../../kloudformation/Attribute';
import { KloudResource } from '../../kloudformation/KloudResource';
export type SessionAttributes = { AwsAccountId: Attribute<string>;ServiceRole: Attribute<string> }
export function session(sessionProps: Session): Session & {attributes: SessionAttributes} { return ({ ...sessionProps, _logicalType: 'AWS::Macie::Session', attributes: { AwsAccountId: 'AwsAccountId',ServiceRole: 'ServiceRole' } }) }
   
export interface Session extends KloudResource {
  status?: Value<string>
  findingPublishingFrequency?: Value<string>
}