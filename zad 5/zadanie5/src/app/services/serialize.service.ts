import { Injectable } from '@angular/core';
import { Attribute } from '../XmlModel/Attribute';

@Injectable()
export class SerializeService {
  public xml: string;

  objectToXml(obj): string {
    this.xml = '';

    this.xml += `<${obj['type']}>`;
    for (const prop in obj) {
      if (!obj.hasOwnProperty(prop)) {
        continue;
      }

      if (obj[prop] === undefined) {
        continue;
      }

      if (obj[prop] instanceof Object) {
        this.finalNodeSerialize(obj[prop]);
      }

    }
    this.xml += `</${obj['type']}>`;
    return this.xml;
  }

  finalNodeSerialize(obj): void {
    const attrs = this.checkAttributes(obj);
    this.xml += obj['type'] ? `\n<${obj['type']}${attrs}>` : '';

    for (const innerProp in obj) {
      if (!(obj[innerProp] instanceof Attribute)) {
        if (obj[innerProp] instanceof Object) {
          this.finalNodeSerialize(obj[innerProp]);
          continue;
        }

        if (innerProp !== 'value') {
          this.xml += innerProp !== 'type' ? `<${innerProp}>${obj[innerProp]}</${innerProp}>` : '';
        } else {
          this.xml += obj[innerProp];
        }
      }
    }

    this.xml += obj['type'] ? `</${obj['type']}>` : '';
  }

  checkAttributes(obj): string {
    let attr = '';
    for (const innerProp in obj) {
      if (obj[innerProp] instanceof Attribute) {
        attr += ` ${obj[innerProp]['type']}="${obj[innerProp]['value']}"`;
      }
    }
    return attr;
  }

}
