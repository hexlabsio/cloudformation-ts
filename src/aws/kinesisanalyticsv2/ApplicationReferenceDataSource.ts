import { Value } from '../../kloudformation/Value';
import { ReferenceDataSourceProps } from '../kinesisanalytics/applicationreferencedatasource/ReferenceDataSourceProps';
import { KloudResource } from '../../kloudformation/KloudResource';

export function applicationReferenceDataSource(applicationReferenceDataSourceProps: ApplicationReferenceDataSource & { logicalName?: string }): ApplicationReferenceDataSource { return ({ ...applicationReferenceDataSourceProps, _logicalType: 'AWS::KinesisAnalyticsV2::ApplicationReferenceDataSource' }) as unknown as ApplicationReferenceDataSource }

export interface ApplicationReferenceDataSource extends KloudResource {
    applicationName: Value<string>;
    referenceDataSource: ReferenceDataSourceProps;
}