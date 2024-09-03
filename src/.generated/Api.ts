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
  content: content.Api<unknown>['content']
  prices: prices.Api<unknown>['api']
  supplies: supplies.Api<unknown>['api']
  marketplace: marketplace.Api<unknown>['api']
  statistics: statistics.Api<unknown>['api']
  analytics: analytics.Api<unknown>['api']
  promotion: promotion.Api<unknown>['adv']
  recommendations: recommendations.Api<unknown>['api']
  feedbacksQuestions: feedbacksQuestions.Api<unknown>['api']
  tariffs: tariffs.Api<unknown>['api']
  buyersChat: buyersChat.Api<unknown>['api']
  returns: returns.Api<unknown>['api']
  documents: documents.Api<unknown>['api']
  wbd: wbd.Api<unknown>['api']
  constructor(token: string) {
    const apiConfig: content.ApiConfig = {
      baseApiParams: {
        headers: {
          'Authorization': token
        },
      },
      baseUrl: 'https://supplies-api.wildberries.ru'
    }
    this.content = (new content.Api(apiConfig)).content;
    this.prices = (new prices.Api(apiConfig)).api;
    this.supplies = (new supplies.Api(apiConfig)).api;
    this.marketplace = (new marketplace.Api(apiConfig)).api;
    this.statistics = (new statistics.Api(apiConfig)).api;
    this.analytics = (new analytics.Api(apiConfig)).api;
    this.promotion = (new promotion.Api(apiConfig)).adv;
    this.recommendations = (new recommendations.Api(apiConfig)).api;
    this.feedbacksQuestions = (new feedbacksQuestions.Api(apiConfig)).api;
    this.tariffs = (new tariffs.Api(apiConfig)).api;
    this.buyersChat = (new buyersChat.Api(apiConfig)).api;
    this.returns = (new returns.Api(apiConfig)).api;
    this.documents = (new documents.Api(apiConfig)).api;
    this.wbd = (new wbd.Api(apiConfig)).api;
  }
}