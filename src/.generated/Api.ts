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
  content: content.Api<unknown>;
  prices: prices.Api<unknown>;
  supplies: supplies.Api<unknown>;
  marketplace: marketplace.Api<unknown>;
  statistics: statistics.Api<unknown>;
  analytics: analytics.Api<unknown>;
  promotion: promotion.Api<unknown>;
  recommendations: recommendations.Api<unknown>;
  feedbacksQuestions: feedbacksQuestions.Api<unknown>;
  tariffs: tariffs.Api<unknown>;
  buyersChat: buyersChat.Api<unknown>;
  returns: returns.Api<unknown>;
  documents: documents.Api<unknown>;
  wbd: wbd.Api<unknown>;
  constructor(token: string) {
    const apiConfig: content.ApiConfig = {
      baseApiParams: {
        headers: {
          'Authorization': token
        },
      },
      baseUrl: 'https://supplies-api.wildberries.ru'
    }
    this.content = new content.Api(apiConfig);
    this.prices = new prices.Api(apiConfig);
    this.supplies = new supplies.Api(apiConfig);
    this.marketplace = new marketplace.Api(apiConfig);
    this.statistics = new statistics.Api(apiConfig);
    this.analytics = new analytics.Api(apiConfig);
    this.promotion = new promotion.Api(apiConfig);
    this.recommendations = new recommendations.Api(apiConfig);
    this.feedbacksQuestions = new feedbacksQuestions.Api(apiConfig);
    this.tariffs = new tariffs.Api(apiConfig);
    this.buyersChat = new buyersChat.Api(apiConfig);
    this.returns = new returns.Api(apiConfig);
    this.documents = new documents.Api(apiConfig);
    this.wbd = new wbd.Api(apiConfig);
  }
}