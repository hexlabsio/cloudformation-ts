import { TableResourceProps } from './TableResourceProps';
import { DatabaseResourceProps } from './DatabaseResourceProps';

export interface ResourceProps {
  tableResource?: TableResourceProps
  databaseResource?: DatabaseResourceProps
}