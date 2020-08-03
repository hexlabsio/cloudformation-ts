import { RepositoryProps } from './environmentEC2/RepositoryProps';
import { Value } from '../../kloudformation/Value';
import { Tag } from '../Tag';
import { Attribute } from '../../kloudformation/Attribute';
import { KloudResource } from '../../kloudformation/KloudResource';
export type EnvironmentEC2Attributes = { Arn: Attribute<string>;Name: Attribute<string> }
export function environmentEC2(environmentEC2Props: EnvironmentEC2): EnvironmentEC2 & {attributes: EnvironmentEC2Attributes} { return ({ ...environmentEC2Props, _logicalType: 'AWS::Cloud9::EnvironmentEC2', attributes: { Arn: 'Arn',Name: 'Name' } }) }
   
export interface EnvironmentEC2 extends KloudResource {
  repositories?: RepositoryProps[]
  ownerArn?: Value<string>
  description?: Value<string>
  connectionType?: Value<string>
  automaticStopTimeMinutes?: Value<number>
  subnetId?: Value<string>
  instanceType: Value<string>
  tags?: Tag[]
  name?: Value<string>
}