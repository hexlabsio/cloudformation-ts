import { Value } from '../../../kloudformation/Value';

export function outputFileUriValueProps(outputFileUriValuePropsProps: OutputFileUriValueProps): OutputFileUriValueProps { return (outputFileUriValuePropsProps) as unknown as OutputFileUriValueProps }

export interface OutputFileUriValueProps {
    fileName?: Value<string>;
}