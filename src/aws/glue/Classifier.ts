import { XMLClassifierProps } from './classifier/XMLClassifierProps';
import { JsonClassifierProps } from './classifier/JsonClassifierProps';
import { CsvClassifierProps } from './classifier/CsvClassifierProps';
import { GrokClassifierProps } from './classifier/GrokClassifierProps';
import { KloudResource } from '../../kloudformation/KloudResource';

export type ClassifierAttributes = {  }
export function classifier(classifierProps: Classifier): Classifier & { attributes: ClassifierAttributes } { return ({ ...classifierProps, _logicalType: 'AWS::Glue::Classifier', attributes: {  } }) }

export interface Classifier extends KloudResource {
    xMLClassifier?: XMLClassifierProps;
    jsonClassifier?: JsonClassifierProps;
    csvClassifier?: CsvClassifierProps;
    grokClassifier?: GrokClassifierProps;
}