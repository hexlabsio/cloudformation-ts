import { DefinitionDocumentProps } from './flowtemplate/DefinitionDocumentProps';
import { Value } from '../../kloudformation/Value';
import { KloudResource } from '../../kloudformation/KloudResource';

export function flowTemplate(flowTemplateProps: FlowTemplate & { logicalName?: string }): FlowTemplate { return ({ ...flowTemplateProps, _logicalType: 'AWS::IoTThingsGraph::FlowTemplate' }) as unknown as FlowTemplate }

export interface FlowTemplate extends KloudResource {
    definition: DefinitionDocumentProps;
    compatibleNamespaceVersion?: Value<number>;
}