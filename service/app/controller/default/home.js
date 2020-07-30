'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const result = await this.app.mysql.get('blog_content', {});
    this.ctx.body = result;
  }
  async getArticleList() {
    const sql = 'SELECT article.id as id,' +
    'article.title as title,' +
    'article.introduce as introduce,' +
    'FROM_UNIXTIME(UNIX_TIMESTAMP(article.create_time), "%Y-%m-%d %H:%i:%s") as create_time,' +
    'article.view_count as view_count ,' +
    '.type.type_name as type_name ' +
    'FROM article LEFT JOIN type ON article.type_id = type.Id';
    const results = await this.app.mysql.query(sql);
    this.ctx.body = {
      data: results,
    };
  }
  async getArticleById() {
    const id = this.ctx.query.id;
    const sql = 'SELECT article.id as id,' +
    'article.title as title,' +
    'article.introduce as introduce,' +
    'article.article_cointent as article_cointent,' +
    'FROM_UNIXTIME(UNIX_TIMESTAMP(article.create_time), "%Y-%m-%d %H:%i:%s") as create_time,' +
    'article.view_count as view_count ,' +
    '.type.type_name as type_name ' +
    'FROM article LEFT JOIN type ON article.type_id = type.Id';
    'WHERE article.id =' + id;
    const results = await this.app.mysql.query(sql);
    this.ctx.body = {
      data: results,
    };
  }
  async getTypeInfo() {
    const results = await this.app.mysql.select('type');
    this.ctx.body = { data: results };
  }
  async getListById() {
    const id = this.ctx.query.id;
    const sql = 'SELECT article.id as id,' +
    'article.title as title,' +
    'article.introduce as introduce,' +
    'article.article_cointent as article_cointent,' +
    'FROM_UNIXTIME(UNIX_TIMESTAMP(article.create_time), "%Y-%m-%d %H:%i:%s") as create_time,' +
    'article.view_count as view_count ,' +
    '.type.type_name as type_name ' +
    'FROM article LEFT JOIN type ON article.type_id = type.Id';
    'WHERE type_id =' + id;
    const results = await this.app.mysql.query(sql);
    this.ctx.body = {
      data: results,
    };
  }
}

module.exports = HomeController;
