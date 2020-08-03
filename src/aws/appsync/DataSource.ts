import { Value } from '../../kloudformation/Value';
import { HttpConfigProps } from './dataSource/HttpConfigProps';
import { RelationalDatabaseConfigProps } from './dataSource/RelationalDatabaseConfigProps';
import { LambdaConfigProps } from './dataSource/LambdaConfigProps';
import { DynamoDBConfigProps } from './dataSource/DynamoDBConfigProps';
import { ElasticsearchConfigProps } from './dataSource/ElasticsearchConfigProps';
import { Attribute } from '../../kloudformation/Attribute';
import { KloudResource } from '../../kloudformation/KloudResource';
export type DataSourceAttributes = { DataSourceArn: Attribute<string>;Name: Attribute<string> }
export function dataSource(dataSourceProps: DataSource): DataSource & {attributes: DataSourceAttributes} { return ({ ...dataSourceProps, _logicalType: 'AWS::AppSync::DataSource', attributes: { DataSourceArn: 'DataSourceArn',Name: 'Name' } }) }
   
export interface DataSource extends KloudResource {
  type: Value<string>
  description?: Value<string>
  serviceRoleArn?: Value<string>
  httpConfig?: HttpConfigProps
  relationalDatabaseConfig?: RelationalDatabaseConfigProps
  lambdaConfig?: LambdaConfigProps
  apiId: Value<string>
  name: Value<string>
  dynamoDBConfig?: DynamoDBConfigProps
  elasticsearchConfig?: ElasticsearchConfigProps
}