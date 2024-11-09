import * as commonmark from "commonmark";
import axios from "axios";

export default class DocsCache {
  private docs: { [url: string]: Documentation } = {};
  async get(url: string): Promise<Documentation> {
    if(url) {
      if (Object.keys(this.docs).includes(url)) {
        return this.docs[url];
      }
      const doc = await DocsCache.discover(url);
      if(doc) this.docs[url] = doc;
      return doc || {description: ''} as Documentation;
    } return {description: ''} as Documentation;
  }
  
  private static async discover(url: string): Promise<Documentation | undefined> {
    try {
      const fileName = url.substring(url.lastIndexOf('/') + 1).slice(0,-5);
      const githubUri = `https://raw.githubusercontent.com/awsdocs/aws-cloudformation-user-guide/master/doc_source/${fileName}.md`
      const content = await axios.get(githubUri);
      return Documentation.build(content.data);
    } catch(e) {
      return undefined;
    }
  }
}

export interface Properties {
  [key: string]: {
    Required: string;
    Type: string;
    Minimum: string;
    Maximum: string;
    Pattern: string;
    'Update requires': string;
    Description: string;
    'Allowed values': string;
  }
}

export class Documentation {
  content: string;
  description: string;
  properties: Properties;
  
  private constructor(content: string) {
    this.content = content;
  }
  
  static build(content: string): Documentation {
    const docs = new Documentation(content);
    const reader = new commonmark.Parser({smart: true});
    const parsed = reader.parse(content);
    const writer = new commonmark.HtmlRenderer();
    const html = writer.render(parsed);
    docs.properties = this.properties(html);
    docs.description = html.substring(html.indexOf('<p>') + 3, html.indexOf('</p>'))
    return docs;
  }
  
  private static properties(html: string): Properties {
    const location = html.indexOf('<h2>Properties');
    const end = html.indexOf('<h2', location + 1);
    const firstParagraph = html.indexOf('<p', location);
    const propertiesSection = end !== -1 ? html.substring(firstParagraph, end) : html.substring(firstParagraph);
    let leftover = propertiesSection;
    const propertiesSections: string[] = [];
    while(leftover.includes('<p>')) {
      const start = leftover.indexOf('<p>');
      const end = leftover.indexOf('</p>');
      propertiesSections.push(leftover.substring(start, end));
      leftover = leftover.substring(end + 3);
    }
    const props = propertiesSections.reduce((prev, current) => {
      const name = current.substring(current.indexOf('<code>') + 6, current.indexOf('</code>'));
      const description = current.substring(current.indexOf('<code>'), current.indexOf('<em>'));
      let rest = current.substring(current.indexOf('<em>'));
      const parts: any = {};
      while(rest.includes('<em>')) {
        const start = rest.indexOf('<em>');
        const end = rest.indexOf('</em>');
        const next = rest.includes('<em>', end+4) ? rest.indexOf('<em>', end+4) : rest.length;
        parts[rest.substring(start+4, end)] = rest.substring(end+7,next);
        rest = rest.substring(end+4);
      }
      return {...prev, [name]: {...parts, Description: description}}
    }, {} as Properties);
    return props;
  }
}
