import { Value } from '../../../kloudformation/Value';

export function templateProps(templatePropsProps: TemplateProps): TemplateProps { return (templatePropsProps) as unknown as TemplateProps }

export interface TemplateProps {
    htmlPart?: Value<string>;
    textPart?: Value<string>;
    templateName?: Value<string>;
    subjectPart?: Value<string>;
}