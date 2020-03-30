import { TemplateProps } from './template/TemplateProps';
import { KloudResource } from '../../kloudformation/KloudResource';

export function template(templateProps: Template & { logicalName?: string }): Template { return ({ ...templateProps, _logicalType: 'AWS::SES::Template' }) as unknown as Template }

export interface Template extends KloudResource {
    template?: TemplateProps;
}