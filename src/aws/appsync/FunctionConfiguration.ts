import { Value } from '../../kloudformation/Value';
import { Attribute } from '../../kloudformation/Attribute';
import { KloudResource } from '../../kloudformation/KloudResource';
export type FunctionConfigurationAttributes = { FunctionId: Attribute<string>;FunctionArn: Attribute<string>;DataSourceName: Attribute<string>;Name: Attribute<string> }
export function functionConfiguration(functionConfigurationProps: FunctionConfiguration): FunctionConfiguration & {attributes: FunctionConfigurationAttributes} { return ({ ...functionConfigurationProps, _logicalType: 'AWS::AppSync::FunctionConfiguration', attributes: { FunctionId: 'FunctionId',FunctionArn: 'FunctionArn',DataSourceName: 'DataSourceName',Name: 'Name' } }) }
   
export interface FunctionConfiguration extends KloudResource {
  responseMappingTemplateS3Location?: Value<string>
  description?: Value<string>
  dataSourceName: Value<string>
  requestMappingTemplate?: Value<string>
  responseMappingTemplate?: Value<string>
  functionVersion: Value<string>
  requestMappingTemplateS3Location?: Value<string>
  apiId: Value<string>
  name: Value<string>
}