import { Value } from '../../../kloudformation/Value';

export function addHeaderActionProps(addHeaderActionPropsProps: AddHeaderActionProps): AddHeaderActionProps { return (addHeaderActionPropsProps) }

export interface AddHeaderActionProps {
    headerValue: Value<string>;
    headerName: Value<string>;
}