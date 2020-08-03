import { AssociationParameterProps } from './AssociationParameterProps';
import { Value } from '../../../kloudformation/Value';

export interface SsmAssociationProps {
  associationParameters?: AssociationParameterProps[]
  documentName: Value<string>
}