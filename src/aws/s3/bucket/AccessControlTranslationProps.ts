import { Value } from '../../../kloudformation/Value';

export function accessControlTranslationProps(accessControlTranslationPropsProps: AccessControlTranslationProps): AccessControlTranslationProps { return (accessControlTranslationPropsProps) as unknown as AccessControlTranslationProps }

export interface AccessControlTranslationProps {
    owner: Value<string>;
}