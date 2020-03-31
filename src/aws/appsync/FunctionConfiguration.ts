import { Value } from '../../kloudformation/Value';
import { KloudResource } from '../../kloudformation/KloudResource';
import { Attribute } from '../../kloudformation/Attribute';

export type FunctionConfigurationAttributes = { FunctionId: Attribute<string>; FunctionArn: Attribute<string>; DataSourceName: Attribute<string>; Name: Attribute<string> }
export function functionConfiguration(functionConfigurationProps: FunctionConfiguration): FunctionConfiguration & { attributes: FunctionConfigurationAttributes } { return ({ ...functionConfigurationProps, _logicalType: 'AWS::AppSync::FunctionConfiguration', attributes: { FunctionId: 'FunctionId', FunctionArn: 'FunctionArn', DataSourceName: 'DataSourceName', Name: 'Name' } }) }

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