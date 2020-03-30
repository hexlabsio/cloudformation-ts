import { Value } from '../../kloudformation/Value';
import { KloudResource } from '../../kloudformation/KloudResource';

export function account(accountProps: Account & { logicalName?: string }): Account { return ({ ...accountProps, _logicalType: 'AWS::ApiGateway::Account' }) as unknown as Account }

export interface Account extends KloudResource {
    cloudWatchRoleArn?: Value<string>;
}