"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TweetPostController = void 0;
const common_1 = require("@nestjs/common");
const decorators_1 = require("@nestjs/common/decorators");
const tweet_service_1 = require("./tweet.service");
const createTweet_dto_1 = require("./dto/createTweet.dto");
const editTweet_dto_1 = require("./dto/editTweet.dto");
const login_services_1 = require("../login/login.services");
let TweetPostController = class TweetPostController {
    constructor(tweetService, loginService) {
        this.tweetService = tweetService;
        this.loginService = loginService;
    }
    createTweet(cookie, tweetData) {
        const info = this.loginService.parseToken(cookie);
        const userId = Object.values(info)[0];
        this.tweetService.createTweet(tweetData, +userId);
        return { message: '트윗이 생성되었습니다.' };
    }
    async getAllTweet() {
        return await this.tweetService.getAllTweet();
    }
    async getOneTweet(cookie) {
        const info = this.loginService.parseToken(cookie);
        const userId = Object.values(info)[0];
        return await this.tweetService.getOneTweet(+userId);
    }
    async editTweet(tweetId, updateData) {
        await this.tweetService.editTweet(+tweetId, updateData);
        return { message: '트윗이 수정되었습니다.' };
    }
    async deleteTweet(tweetId) {
        await this.tweetService.deleteTweet(+tweetId);
        return { message: '트윗이 삭제되었습니다.' };
    }
    async getBookmark(cookie) {
        const info = this.loginService.parseToken(cookie);
        const userId = Object.values(info)[0];
        const myBookmark = await this.tweetService.getBookmark(+userId);
        const ismyBookmark = Object.values(myBookmark);
        const tweetIds = await this.tweetService.checkTweetId(ismyBookmark);
        const tweets = await this.tweetService.checkTweets(tweetIds);
        return tweets;
    }
    async addBookmark(cookie, tweetid) {
        const info = this.loginService.parseToken(cookie);
        const userId = Object.values(info)[0];
        const isBookmark = await this.tweetService.checkBookmark(tweetid, +userId);
        if (isBookmark == null) {
            await this.tweetService.addBookmark(tweetid, +userId);
            return { message: '북마크가 추가 되었습니다.' };
        }
        await this.tweetService.deleteBookmark(tweetid, +userId);
        return { message: '북마크가 취소 되었습니다.' };
    }
    async updateLike(cookie, tweetid) {
        const info = this.loginService.parseToken(cookie);
        const userId = Object.values(info)[0];
        const isLike = await this.tweetService.checkLike(tweetid, +userId);
        if (isLike == null) {
            await this.tweetService.createLike(tweetid, +userId);
            const countLikes = await this.tweetService.countLikes(tweetid);
            await this.tweetService.updateLikes(tweetid, countLikes);
            return { message: '트윗의 좋아요를 등록하였습니다.' };
        }
        else if (isLike) {
            await this.tweetService.deleteLike(tweetid, +userId);
            const countLikes = await this.tweetService.countLikes(tweetid);
            await this.tweetService.updateLikes(tweetid, countLikes);
            return { message: '트윗의 좋아요를 해제하였습니다.' };
        }
    }
};
__decorate([
    (0, decorators_1.Post)(),
    __param(0, (0, decorators_1.Headers)('cookie')),
    __param(1, (0, decorators_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, createTweet_dto_1.CreateTweetDto]),
    __metadata("design:returntype", void 0)
], TweetPostController.prototype, "createTweet", null);
__decorate([
    (0, decorators_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], TweetPostController.prototype, "getAllTweet", null);
__decorate([
    (0, decorators_1.Get)('/detail'),
    __param(0, (0, decorators_1.Headers)('cookie')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], TweetPostController.prototype, "getOneTweet", null);
__decorate([
    (0, decorators_1.Put)('/:tweetId'),
    __param(0, (0, decorators_1.Param)('tweetId')),
    __param(1, (0, decorators_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, editTweet_dto_1.EditTweetDto]),
    __metadata("design:returntype", Promise)
], TweetPostController.prototype, "editTweet", null);
__decorate([
    (0, decorators_1.Delete)('/:tweetId'),
    __param(0, (0, decorators_1.Param)('tweetId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], TweetPostController.prototype, "deleteTweet", null);
__decorate([
    (0, decorators_1.Get)('/bookmark'),
    __param(0, (0, decorators_1.Headers)('cookie')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], TweetPostController.prototype, "getBookmark", null);
__decorate([
    (0, decorators_1.Put)('bookmark/:id'),
    __param(0, (0, decorators_1.Headers)('cookie')),
    __param(1, (0, decorators_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Number]),
    __metadata("design:returntype", Promise)
], TweetPostController.prototype, "addBookmark", null);
__decorate([
    (0, decorators_1.Put)('like/:tweetId'),
    __param(0, (0, decorators_1.Headers)('cookie')),
    __param(1, (0, decorators_1.Param)('tweetId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Number]),
    __metadata("design:returntype", Promise)
], TweetPostController.prototype, "updateLike", null);
TweetPostController = __decorate([
    (0, common_1.Controller)('tweetpost'),
    __metadata("design:paramtypes", [tweet_service_1.TweetPostService,
        login_services_1.LoginService])
], TweetPostController);
exports.TweetPostController = TweetPostController;
//# sourceMappingURL=tweet.controller.js.map