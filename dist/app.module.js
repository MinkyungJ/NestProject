"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const typeorm_1 = require("@nestjs/typeorm");
const config_1 = require("@nestjs/config");
const user_module_1 = require("./tweet_user/user.module");
const user_entity_1 = require("./tweet_user/entities/user.entity");
const login_module_1 = require("./login/login.module");
const tweet_module_1 = require("./tweet_post/tweet.module");
const tweet_entity_1 = require("./tweet_post/entities/tweet.entity");
const tweetLike_entity_1 = require("./tweet_post/entities/tweetLike.entity");
const tweetBookmark_entity_1 = require("./tweet_post/entities/tweetBookmark.entity");
const tweet_comment_entity_1 = require("./tweet_comment/entities/tweet_comment.entity");
const tweet_comment_module_1 = require("./tweet_comment/tweet_comment.module");
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({
                isGlobal: true,
                envFilePath: '.env',
            }),
            typeorm_1.TypeOrmModule.forRoot({
                type: 'mysql',
                host: process.env.HOST,
                port: parseInt(process.env.PORT),
                username: process.env.DB_USER,
                password: process.env.DB_PW,
                database: process.env.DB_DATABASE,
                entities: [user_entity_1.User, tweet_entity_1.Tweet, tweetLike_entity_1.Like, tweetBookmark_entity_1.Bookmark, tweet_comment_entity_1.TweetComment],
                synchronize: true,
            }),
            user_module_1.UserModule,
            login_module_1.LoginModule,
            tweet_module_1.TweetPostModule,
            tweet_comment_module_1.TweetCommentModule
        ],
        controllers: [app_controller_1.AppController],
        providers: [],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map