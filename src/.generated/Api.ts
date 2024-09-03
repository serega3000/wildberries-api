import * as content from './api/content';
import * as prices from './api/prices';
import * as supplies from './api/supplies';
import * as marketplace from './api/marketplace';
import * as statistics from './api/statistics';
import * as analytics from './api/analytics';
import * as promotion from './api/promotion';
import * as recommendations from './api/recommendations';
import * as feedbacksQuestions from './api/feedbacks-questions';
import * as tariffs from './api/tariffs';
import * as buyersChat from './api/buyers-chat';
import * as returns from './api/returns';
import * as documents from './api/documents';
import * as wbd from './api/wbd';
export class Api {
  readonly apiConfig: content.ApiConfig
  constructor(token: string, config?: content.ApiConfig) {
    this.apiConfig = {
      baseApiParams: {
        headers: {
          'Authorization': token
        },
      },
      baseUrl: 'https://supplies-api.wildberries.ru',
      ...config,
    }
  }
  get content() {
    return new content.Api(this.apiConfig).content
  }
  get prices() {
    return new prices.Api(this.apiConfig).api
  }
  get supplies() {
    return new supplies.Api(this.apiConfig).api
  }
  get marketplace() {
    return new marketplace.Api(this.apiConfig).api
  }
  get statistics() {
    return new statistics.Api(this.apiConfig).api
  }
  get analytics() {
    return new analytics.Api(this.apiConfig).api
  }
  get promotion() {
    return new promotion.Api(this.apiConfig).adv
  }
  get recommendations() {
    return new recommendations.Api(this.apiConfig).api
  }
  get feedbacksQuestions() {
    return new feedbacksQuestions.Api(this.apiConfig).api
  }
  get tariffs() {
    return new tariffs.Api(this.apiConfig).api
  }
  get buyersChat() {
    return new buyersChat.Api(this.apiConfig).api
  }
  get returns() {
    return new returns.Api(this.apiConfig).api
  }
  get documents() {
    return new documents.Api(this.apiConfig).api
  }
  get wbd() {
    return new wbd.Api(this.apiConfig).api
  }
}