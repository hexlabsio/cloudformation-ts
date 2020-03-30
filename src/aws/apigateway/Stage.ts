import { Value } from '../../kloudformation/Value';
import { AccessLogSettingProps } from './stage/AccessLogSettingProps';
import { CanarySettingProps } from './stage/CanarySettingProps';
import { MethodSettingProps } from './stage/MethodSettingProps';
import { Tag } from '../Tag';
import { KloudResource } from '../../kloudformation/KloudResource';

export function stage(stageProps: Stage & { logicalName?: string }): Stage { return ({ ...stageProps, _logicalType: 'AWS::ApiGateway::Stage' }) as unknown as Stage }

export interface Stage extends KloudResource {
    restApiId: Value<string>;
    accessLogSetting?: AccessLogSettingProps;
    cacheClusterEnabled?: Value<boolean>;
    cacheClusterSize?: Value<string>;
    canarySetting?: CanarySettingProps;
    clientCertificateId?: Value<string>;
    deploymentId?: Value<string>;
    description?: Value<string>;
    documentationVersion?: Value<string>;
    methodSettings?: MethodSettingProps[];
    stageName?: Value<string>;
    tags?: Tag[];
    tracingEnabled?: Value<boolean>;
    variables?: { [key: string]: Value<string> };
}