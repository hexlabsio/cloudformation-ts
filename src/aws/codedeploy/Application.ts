import { Value } from '../../kloudformation/Value';
import { KloudResource } from '../../kloudformation/KloudResource';

export function application(applicationProps: Application & { logicalName?: string }): Application { return ({ ...applicationProps, _logicalType: 'AWS::CodeDeploy::Application' }) as unknown as Application }

export interface Application extends KloudResource {
    applicationName?: Value<string>;
    computePlatform?: Value<string>;
}