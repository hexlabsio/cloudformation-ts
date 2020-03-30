import { Value } from '../../../kloudformation/Value';

export function inputSourceRequestProps(inputSourceRequestPropsProps: InputSourceRequestProps): InputSourceRequestProps { return (inputSourceRequestPropsProps) as unknown as InputSourceRequestProps }

export interface InputSourceRequestProps {
    username?: Value<string>;
    passwordParam?: Value<string>;
    url?: Value<string>;
}