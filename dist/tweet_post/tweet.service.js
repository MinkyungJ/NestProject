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
exports.TweetPostService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const basicTweet_dto_1 = require("./dto/basicTweet.dto");
const tweet_entity_1 = require("./entities/tweet.entity");
const class_transformer_1 = require("class-transformer");
const editTweet_dto_1 = require("./dto/editTweet.dto");
const bookmarkTweet_dto_1 = require("./dto/bookmarkTweet.dto");
const tweetLike_entity_1 = require("./entities/tweetLike.entity");
const tweetBookmark_entity_1 = require("./entities/tweetBookmark.entity");
const detailTweet_dto_1 = require("./dto/detailTweet.dto");
let TweetPostService = class TweetPostService {
    constructor(tweetRepository, BookmarkRepository, LikeRepository) {
        this.tweetRepository = tweetRepository;
        this.BookmarkRepository = BookmarkRepository;
        this.LikeRepository = LikeRepository;
    }
    async createTweet(tweetData, userId) {
        try {
            const data = Object.assign({}, tweetData);
            data.userId = userId;
            return await this.tweetRepository.save(data);
        }
        catch (e) {
            console.log(e);
        }
    }
    async getAllTweet() {
        const isUser = await this.tweetRepository.find();
        return (0, class_transformer_1.plainToClass)(basicTweet_dto_1.BasicTweetDto, isUser);
    }
    async getOneTweet(userId) {
        const isUser = await this.tweetRepository.find({
            where: { userId: userId },
        });
        return (0, class_transformer_1.plainToClass)(detailTweet_dto_1.DetailTweetDto, isUser);
    }
    async editTweet(tweetId, data) {
        const isUser = await this.tweetRepository.update({ id: tweetId }, data);
        return (0, class_transformer_1.plainToClass)(editTweet_dto_1.EditTweetDto, isUser);
    }
    async deleteTweet(tweetId) {
        return await this.tweetRepository.delete(tweetId);
    }
    async checkBookmark(tweetid, userid) {
        return await this.BookmarkRepository.findOne({
            where: { userId: userid, tweetId: tweetid },
        });
    }
    async addBookmark(tweetid, userid) {
        return await this.BookmarkRepository.save({
            tweetId: tweetid,
            userId: userid,
        });
    }
    async deleteBookmark(tweetid, userid) {
        const findBookmark = await this.BookmarkRepository.findOne({
            where: { userId: userid, tweetId: tweetid },
        });
        return await this.BookmarkRepository.remove(findBookmark);
    }
    async getBookmark(userid) {
        return await this.BookmarkRepository.find({
            where: { userId: userid },
        });
    }
    async checkTweetId(bookmarks) {
        const tweetIds = bookmarks.map((bookmark) => bookmark.tweetId);
        return tweetIds;
    }
    async checkTweets(tweetIds) {
        const tweets = await this.tweetRepository.find({
            where: { id: (0, typeorm_2.In)(tweetIds) },
        });
        return (0, class_transformer_1.plainToClass)(bookmarkTweet_dto_1.BookmarkTweetDto, tweets);
    }
    async checkLike(tweetId, userId) {
        return await this.LikeRepository.findOne({
            where: { tweetId: tweetId, userId: userId },
        });
    }
    async createLike(tweetId, userId) {
        return await this.LikeRepository.save({
            tweetId: tweetId,
            userId: userId,
        });
    }
    async deleteLike(tweetId, userId) {
        const findLike = await this.LikeRepository.findOne({
            where: { tweetId: tweetId, userId: userId },
        });
        await this.LikeRepository.remove(findLike);
    }
    async countLikes(tweetId) {
        const countTweet = await this.LikeRepository.find({
            where: { tweetId: tweetId },
        });
        return countTweet.length;
    }
    async updateLikes(tweetId, countLikes) {
        const findTweet = await this.tweetRepository.findOne({
            where: { id: tweetId },
        });
        try {
            const like = Object.assign({}, findTweet);
            like.likes = countLikes;
            return await this.tweetRepository.save(like);
        }
        catch (e) {
            console.log(e);
        }
    }
};
TweetPostService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(tweet_entity_1.Tweet)),
    __param(1, (0, typeorm_1.InjectRepository)(tweetBookmark_entity_1.Bookmark)),
    __param(2, (0, typeorm_1.InjectRepository)(tweetLike_entity_1.Like)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository])
], TweetPostService);
exports.TweetPostService = TweetPostService;
//# sourceMappingURL=tweet.service.js.map