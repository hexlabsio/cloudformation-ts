import { DefinitionDocumentProps } from './flowtemplate/DefinitionDocumentProps';
import { Value } from '../../kloudformation/Value';
import { KloudResource } from '../../kloudformation/KloudResource';

export type FlowTemplateAttributes = {  }
export function flowTemplate(flowTemplateProps: FlowTemplate): FlowTemplate & { attributes: FlowTemplateAttributes } { return ({ ...flowTemplateProps, _logicalType: 'AWS::IoTThingsGraph::FlowTemplate', attributes: {  } }) }

export interface FlowTemplate extends KloudResource {
    definition: DefinitionDocumentProps;
    compatibleNamespaceVersion?: Value<number>;
}