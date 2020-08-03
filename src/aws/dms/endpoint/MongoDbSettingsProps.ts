import { Value } from '../../../kloudformation/Value';

export interface MongoDbSettingsProps {
  authSource?: Value<string>
  authMechanism?: Value<string>
  username?: Value<string>
  docsToInvestigate?: Value<string>
  serverName?: Value<string>
  port?: Value<number>
  extractDocId?: Value<string>
  databaseName?: Value<string>
  authType?: Value<string>
  password?: Value<string>
  nestingLevel?: Value<string>
}