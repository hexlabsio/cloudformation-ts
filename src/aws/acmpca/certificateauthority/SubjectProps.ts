import { Value } from '../../../kloudformation/Value';

export function subjectProps(subjectPropsProps: SubjectProps): SubjectProps { return (subjectPropsProps) as unknown as SubjectProps }

export interface SubjectProps {
    country?: Value<string>;
    organization?: Value<string>;
    organizationalUnit?: Value<string>;
    distinguishedNameQualifier?: Value<string>;
    state?: Value<string>;
    commonName?: Value<string>;
    serialNumber?: Value<string>;
    locality?: Value<string>;
    title?: Value<string>;
    surname?: Value<string>;
    givenName?: Value<string>;
    initials?: Value<string>;
    pseudonym?: Value<string>;
    generationQualifier?: Value<string>;
}