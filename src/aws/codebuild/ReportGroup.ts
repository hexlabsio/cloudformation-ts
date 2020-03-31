import { Value } from '../../kloudformation/Value';
import { ReportExportConfigProps } from './reportgroup/ReportExportConfigProps';
import { Tag } from '../Tag';
import { KloudResource } from '../../kloudformation/KloudResource';
import { Attribute } from '../../kloudformation/Attribute';

export type ReportGroupAttributes = { Arn: Attribute<string> }
export function reportGroup(reportGroupProps: ReportGroup): ReportGroup & { attributes: ReportGroupAttributes } { return ({ ...reportGroupProps, _logicalType: 'AWS::CodeBuild::ReportGroup', attributes: { Arn: 'Arn' } }) }

export interface ReportGroup extends KloudResource {
    type: Value<string>;
    exportConfig: ReportExportConfigProps;
    tags?: Tag[];
    name?: Value<string>;
}