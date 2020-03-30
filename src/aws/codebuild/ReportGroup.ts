import { Value } from '../../kloudformation/Value';
import { ReportExportConfigProps } from './reportgroup/ReportExportConfigProps';
import { Tag } from '../Tag';
import { KloudResource } from '../../kloudformation/KloudResource';

export function reportGroup(reportGroupProps: ReportGroup & { logicalName?: string }): ReportGroup { return ({ ...reportGroupProps, _logicalType: 'AWS::CodeBuild::ReportGroup' }) as unknown as ReportGroup }

export interface ReportGroup extends KloudResource {
    type: Value<string>;
    exportConfig: ReportExportConfigProps;
    tags?: Tag[];
    name?: Value<string>;
}