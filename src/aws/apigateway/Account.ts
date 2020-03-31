import { Value } from '../../kloudformation/Value';
import { KloudResource } from '../../kloudformation/KloudResource';

export type AccountAttributes = {  }
export function account(accountProps: Account): Account & { attributes: AccountAttributes } { return ({ ...accountProps, _logicalType: 'AWS::ApiGateway::Account', attributes: {  } }) }

export interface Account extends KloudResource {
    cloudWatchRoleArn?: Value<string>;
}