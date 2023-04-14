"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TweetCommentModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const login_module_1 = require("../login/login.module");
const tweet_entity_1 = require("../tweet_post/entities/tweet.entity");
const tweet_comment_entity_1 = require("./entities/tweet_comment.entity");
const tweet_comment_controller_1 = require("./tweet_comment.controller");
const tweet_comment_service_1 = require("./tweet_comment.service");
let TweetCommentModule = class TweetCommentModule {
};
TweetCommentModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([tweet_comment_entity_1.TweetComment, tweet_entity_1.Tweet]), login_module_1.LoginModule],
        controllers: [tweet_comment_controller_1.TweetCommentController],
        providers: [typeorm_1.TypeOrmModule, tweet_comment_service_1.TweetCommentService],
        exports: [tweet_comment_service_1.TweetCommentService],
    })
], TweetCommentModule);
exports.TweetCommentModule = TweetCommentModule;
//# sourceMappingURL=tweet_comment.module.js.map