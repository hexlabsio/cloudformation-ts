import { Value } from '../../kloudformation/Value';
import { OptionSettingProps } from './environment/OptionSettingProps';
import { Tag } from '../Tag';
import { TierProps } from './environment/TierProps';
import { KloudResource } from '../../kloudformation/KloudResource';

export function environment(environmentProps: Environment & { logicalName?: string }): Environment { return ({ ...environmentProps, _logicalType: 'AWS::ElasticBeanstalk::Environment' }) as unknown as Environment }

export interface Environment extends KloudResource {
    applicationName: Value<string>;
    cNAMEPrefix?: Value<string>;
    description?: Value<string>;
    environmentName?: Value<string>;
    optionSettings?: OptionSettingProps[];
    platformArn?: Value<string>;
    solutionStackName?: Value<string>;
    tags?: Tag[];
    templateName?: Value<string>;
    tier?: TierProps;
    versionLabel?: Value<string>;
}