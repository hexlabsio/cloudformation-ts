import { Value } from '../../../kloudformation/Value';

export function methodResponseProps(methodResponsePropsProps: MethodResponseProps): MethodResponseProps { return (methodResponsePropsProps) }

export interface MethodResponseProps {
    statusCode: Value<string>;
    responseModels?: { [key: string]: Value<string> };
    responseParameters?: { [key: string]: Value<boolean> };
}