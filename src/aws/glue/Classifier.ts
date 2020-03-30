import { XMLClassifierProps } from './classifier/XMLClassifierProps';
import { JsonClassifierProps } from './classifier/JsonClassifierProps';
import { CsvClassifierProps } from './classifier/CsvClassifierProps';
import { GrokClassifierProps } from './classifier/GrokClassifierProps';
import { KloudResource } from '../../kloudformation/KloudResource';

export function classifier(classifierProps: Classifier & { logicalName?: string }): Classifier { return ({ ...classifierProps, _logicalType: 'AWS::Glue::Classifier' }) as unknown as Classifier }

export interface Classifier extends KloudResource {
    xMLClassifier?: XMLClassifierProps;
    jsonClassifier?: JsonClassifierProps;
    csvClassifier?: CsvClassifierProps;
    grokClassifier?: GrokClassifierProps;
}