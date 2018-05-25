import { Injectable } from '@angular/core';
import { DefinicjaDzialu } from '../XmlModel/DefinicjaDzialu';
import { Tworca } from '../XmlModel/Tworca';
import { Attribute } from '../XmlModel/Attribute';
import {Ksiazka} from "../XmlModel/Ksiazka";

@Injectable()
export class SerializeService {
  public xml: string;

  objectToXml(obj) {
    this.xml = '';

    for (const prop in obj) {
      if (!obj.hasOwnProperty(prop)) {
        continue;
      }

      if (obj[prop] === undefined) {
        continue;
      }

      if ((obj[prop] instanceof DefinicjaDzialu) || ((obj[prop] instanceof Tworca)) || ((obj[prop] instanceof Ksiazka))) {
        this.finalNodeSerialize(obj[prop]);
        continue;
      }

      if (prop !== 'type') {
        this.xml += '\n<' + obj['type'] + '>';

        if (typeof obj[prop] === 'object') {
          this.xml += this.objectToXml(new Object(obj[prop]));
        } else {
          this.xml += obj[prop];
        }

        this.xml += '\n</' + obj['type'] + '>';
      }
    }

    return this.xml;
  }

  finalNodeSerialize(obj) {
    this.xml += `\n<${obj['type']}`;
    const attrs = this.checkAttributes(obj);
    this.xml += attrs + '>';

    for (const innerProp in obj) {
      if(!(obj[innerProp] instanceof Attribute)) {
        if (obj[innerProp] instanceof Object) {
          this.finalNodeSerialize(obj[innerProp]);
          continue;
        }

        if(innerProp !== 'value') {
          this.xml += innerProp !== 'type' ? `<${innerProp}>${obj[innerProp]}</${innerProp}>` : '';
        } else {
          this.xml += obj[innerProp];
        }
      }
    }

    this.xml += `</${obj['type']}>`;
  }

  checkAttributes(obj) {
    let attr = '';
    for (const innerProp in obj) {
      if (obj[innerProp] instanceof Attribute) {
        attr += ` ${obj[innerProp]['type']}="${obj[innerProp]['value']}"`;
      }
    }
    return attr;
  }

}
