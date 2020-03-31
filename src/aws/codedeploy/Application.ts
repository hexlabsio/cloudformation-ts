import { Value } from '../../kloudformation/Value';
import { KloudResource } from '../../kloudformation/KloudResource';

export type ApplicationAttributes = {  }
export function application(applicationProps: Application): Application & { attributes: ApplicationAttributes } { return ({ ...applicationProps, _logicalType: 'AWS::CodeDeploy::Application', attributes: {  } }) }

export interface Application extends KloudResource {
    applicationName?: Value<string>;
    computePlatform?: Value<string>;
}