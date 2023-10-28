
export interface CloudFormationTemplate<C extends string = string> {
  Conditions?: Record<C, any>;
  Description?: string;
  Parameters: {
    [parameter: string]: {
      Type: string;
      Default?: string;
      AllowedValues? : string[];
      Description? : string;
    };
  };
  Resources: {
    [logicalName: string]: {
      DeletionPolicy?: "Delete" | "Retain" | "Snapshot"
      DependsOn?: string[];
      Type: string;
      Condition?: C;
      Properties?: any;
    };
  };
  Transform?: string[];
  Outputs?: {
    [logicalId: string]: {
      Description?: string;
      Value: any;
      Export?: { Name: string };
    };
  };
}