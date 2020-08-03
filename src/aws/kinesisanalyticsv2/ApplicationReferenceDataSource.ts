import { Value } from '../../kloudformation/Value';
import { ReferenceDataSourceProps } from './applicationReferenceDataSource/ReferenceDataSourceProps';
import { KloudResource } from '../../kloudformation/KloudResource';
export function applicationReferenceDataSource(applicationReferenceDataSourceProps: ApplicationReferenceDataSource): ApplicationReferenceDataSource { return ({ ...applicationReferenceDataSourceProps, _logicalType: '' }) }
  
export interface ApplicationReferenceDataSource extends KloudResource {
  applicationName: Value<string>
  referenceDataSource: ReferenceDataSourceProps
}