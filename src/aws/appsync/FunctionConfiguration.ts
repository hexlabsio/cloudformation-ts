import { Value } from '../../kloudformation/Value';
import { KloudResource } from '../../kloudformation/KloudResource';

export function functionConfiguration(functionConfigurationProps: FunctionConfiguration & { logicalName?: string }): FunctionConfiguration { return ({ ...functionConfigurationProps, _logicalType: 'AWS::AppSync::FunctionConfiguration' }) as unknown as FunctionConfiguration }

export interface FunctionConfiguration extends KloudResource {
    dataSourceName: Value<string>;
    functionVersion: Value<string>;
    apiId: Value<string>;
    name: Value<string>;
    responseMappingTemplateS3Location?: Value<string>;
    description?: Value<string>;
    requestMappingTemplate?: Value<string>;
    responseMappingTemplate?: Value<string>;
    requestMappingTemplateS3Location?: Value<string>;
}