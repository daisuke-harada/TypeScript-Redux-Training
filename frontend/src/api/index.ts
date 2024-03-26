import applyCaseMiddleware from 'axios-case-converter';
import axios from 'axios';

// リクエストやレスポンスのヘッダーをケース変換のプロセスから除外する
const options = {
  ignoreHeaders: true,
};

export { applyCaseMiddleware, axios, options };
