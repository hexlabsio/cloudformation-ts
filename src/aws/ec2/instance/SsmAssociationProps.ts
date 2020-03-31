import { Value } from '../../../kloudformation/Value';
import { AssociationParameterProps } from './AssociationParameterProps';

export function ssmAssociationProps(ssmAssociationPropsProps: SsmAssociationProps): SsmAssociationProps { return (ssmAssociationPropsProps) }

export interface SsmAssociationProps {
    documentName: Value<string>;
    associationParameters?: AssociationParameterProps[];
}