/*!
 * App Translation Factory Service
 *
 * Copyright(c) Exequiel Ceasar Navarrete <esnavarrete1@up.edu.ph>
 * Licensed under MIT
 */

import { Http } from '@angular/http';
import { TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { environment } from '../environments/environment';

export function TranslationFactoryLoader(http: Http): TranslateLoader {
  const translationConfig = environment.sarai_map_config.translations;

  return new TranslateHttpLoader(http, translationConfig.static.prefix, translationConfig.static.ext);
};


