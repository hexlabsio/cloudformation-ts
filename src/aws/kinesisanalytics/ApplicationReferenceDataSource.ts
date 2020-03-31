import { Value } from '../../kloudformation/Value';
import { ReferenceDataSourceProps } from './applicationreferencedatasource/ReferenceDataSourceProps';
import { KloudResource } from '../../kloudformation/KloudResource';

export type ApplicationReferenceDataSourceAttributes = {  }
export function applicationReferenceDataSource(applicationReferenceDataSourceProps: ApplicationReferenceDataSource): ApplicationReferenceDataSource & { attributes: ApplicationReferenceDataSourceAttributes } { return ({ ...applicationReferenceDataSourceProps, _logicalType: 'AWS::KinesisAnalytics::ApplicationReferenceDataSource', attributes: {  } }) }

export interface ApplicationReferenceDataSource extends KloudResource {
    applicationName: Value<string>;
    referenceDataSource: ReferenceDataSourceProps;
}