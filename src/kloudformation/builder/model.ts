export interface Specification {
  PropertyTypes: { [key: string]: PropertyInfo };
  ResourceTypes: { [key: string]: PropertyInfo };
  ResourceSpecificationVersion: string;
}

export interface PropertyInfo extends Property {
  Properties?: { [key: string]: Property };
  Attributes?: { [key: string]: Attribute };
  AdditionalProperties?: boolean;
}

export interface Typed {
  Type?: string;
  PrimitiveType?: string;
  PrimitiveItemType?: string;
  DuplicatesAllowed?: boolean;
  ItemType?: string;
  Required?: boolean;
}

export interface Property extends Typed {
  Documentation: string;
  UpdateType: string;
}

export interface Attribute extends Typed{
  DataSourceArn?: string;
}
