import { Injectable } from '@angular/core';
import { DefinicjaDzialu } from '../XmlModel/DefinicjaDzialu';

@Injectable()
export class SerializeService {
  objectToXml(obj) {
    let xml = '';

    for (const prop in obj) {
      if (!obj.hasOwnProperty(prop)) {
        continue;
      }

      if (obj[prop] === undefined) {
        continue;
      }

      if (obj[prop] instanceof DefinicjaDzialu) {
        xml += `\n<${obj[prop]['type']}>`;

        for (const innerProp in obj[prop]) {
          xml += innerProp !== 'type' ? `<${innerProp}>${obj[prop][innerProp]}</${innerProp}>` : '';
        }

        xml += `</${obj[prop]['type']}>`;
        continue;
      }

      if (prop !== 'type') {
        xml += '\n<' + obj['type'] + '>';

        if (typeof obj[prop] === 'object') {
          xml += this.objectToXml(new Object(obj[prop]));
        } else {
          xml += obj[prop];
        }

        xml += '</' + obj['type'] + '>';
      }
    }

    return xml;
  }
}


