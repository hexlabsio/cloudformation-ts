import { Value } from '../../kloudformation/Value';
import { ReportExportConfigProps } from './reportGroup/ReportExportConfigProps';
import { Tag } from '../Tag';
import { Attribute } from '../../kloudformation/Attribute';
import { KloudResource } from '../../kloudformation/KloudResource';
export type ReportGroupAttributes = { Arn: Attribute<string> }
export function reportGroup(reportGroupProps: ReportGroup): ReportGroup & {attributes: ReportGroupAttributes} { return ({ ...reportGroupProps, _logicalType: 'AWS::CodeBuild::ReportGroup', attributes: { Arn: 'Arn' } }) }
   
export interface ReportGroup extends KloudResource {
  type: Value<string>
  exportConfig: ReportExportConfigProps
  tags?: Tag[]
  name?: Value<string>
}