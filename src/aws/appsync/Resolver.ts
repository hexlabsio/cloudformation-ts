import { Value } from '../../kloudformation/Value';
import { PipelineConfigProps } from './resolver/PipelineConfigProps';
import { CachingConfigProps } from './resolver/CachingConfigProps';
import { SyncConfigProps } from './resolver/SyncConfigProps';
import { KloudResource } from '../../kloudformation/KloudResource';

export function resolver(resolverProps: Resolver & { logicalName?: string }): Resolver { return ({ ...resolverProps, _logicalType: 'AWS::AppSync::Resolver' }) as unknown as Resolver }

export interface Resolver extends KloudResource {
    typeName: Value<string>;
    apiId: Value<string>;
    fieldName: Value<string>;
    responseMappingTemplateS3Location?: Value<string>;
    pipelineConfig?: PipelineConfigProps;
    dataSourceName?: Value<string>;
    requestMappingTemplate?: Value<string>;
    responseMappingTemplate?: Value<string>;
    kind?: Value<string>;
    cachingConfig?: CachingConfigProps;
    syncConfig?: SyncConfigProps;
    requestMappingTemplateS3Location?: Value<string>;
}