import { Value } from '../../kloudformation/Value';
import { ReferenceDataSourceProps } from './applicationreferencedatasource/ReferenceDataSourceProps';
import { KloudResource } from '../../kloudformation/KloudResource';

export function applicationReferenceDataSource(applicationReferenceDataSourceProps: ApplicationReferenceDataSource & { logicalName?: string }): ApplicationReferenceDataSource { return ({ ...applicationReferenceDataSourceProps, _logicalType: 'AWS::KinesisAnalytics::ApplicationReferenceDataSource' }) as unknown as ApplicationReferenceDataSource }

export interface ApplicationReferenceDataSource extends KloudResource {
    applicationName: Value<string>;
    referenceDataSource: ReferenceDataSourceProps;
}