import { TemplateProps } from './template/TemplateProps';
import { KloudResource } from '../../kloudformation/KloudResource';

export type TemplateAttributes = {  }
export function template(templateProps: Template): Template & { attributes: TemplateAttributes } { return ({ ...templateProps, _logicalType: 'AWS::SES::Template', attributes: {  } }) }

export interface Template extends KloudResource {
    template?: TemplateProps;
}