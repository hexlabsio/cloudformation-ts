import { Value } from '../../kloudformation/Value';
import { KloudResource } from '../../kloudformation/KloudResource';
export function account(accountProps: Account): Account { return ({ ...accountProps, _logicalType: '' }) }
  
export interface Account extends KloudResource {
  cloudWatchRoleArn?: Value<string>
}