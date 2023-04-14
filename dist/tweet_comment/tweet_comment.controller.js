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
exports.TweetCommentController = void 0;
const common_1 = require("@nestjs/common");
const decorators_1 = require("@nestjs/common/decorators");
const login_services_1 = require("../login/login.services");
const createComment_dto_1 = require("./dto/createComment.dto");
const editComment_dto_1 = require("./dto/editComment.dto");
const tweet_comment_service_1 = require("./tweet_comment.service");
let TweetCommentController = class TweetCommentController {
    constructor(tweetCommentService, loginService) {
        this.tweetCommentService = tweetCommentService;
        this.loginService = loginService;
    }
    createComment(cookie, tweetId, tweetCommentData) {
        const info = this.loginService.parseToken(cookie);
        const userId = Object.values(info)[0];
        this.tweetCommentService.createComment(tweetCommentData, +userId, +tweetId);
        return { message: '댓글이 생성되었습니다.' };
    }
    async getMyComment(userId) {
        return await this.tweetCommentService.getMyComment(+userId);
    }
    async getOneComment(tweetId) {
        return await this.tweetCommentService.getOneComment(+tweetId);
    }
    async editComment(tweetId, updateData) {
        await this.tweetCommentService.editComment(+tweetId, updateData);
        return { message: '댓글이 수정되었습니다.' };
    }
    async deleteComment(tweetId) {
        await this.tweetCommentService.deleteComment(+tweetId);
        return { message: '댓글이 삭제되었습니다.' };
    }
};
__decorate([
    (0, decorators_1.Post)('/:tweetId'),
    __param(0, (0, decorators_1.Headers)('cookie')),
    __param(1, (0, decorators_1.Param)('tweetId')),
    __param(2, (0, decorators_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, createComment_dto_1.CreateCommentDto]),
    __metadata("design:returntype", void 0)
], TweetCommentController.prototype, "createComment", null);
__decorate([
    (0, decorators_1.Get)('/:userId'),
    __param(0, (0, decorators_1.Param)('userId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], TweetCommentController.prototype, "getMyComment", null);
__decorate([
    (0, decorators_1.Get)('/:tweetId'),
    __param(0, (0, decorators_1.Param)('tweetId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], TweetCommentController.prototype, "getOneComment", null);
__decorate([
    (0, decorators_1.Put)('/:tweetId'),
    __param(0, (0, decorators_1.Param)('tweetId')),
    __param(1, (0, decorators_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, editComment_dto_1.EditCommentDto]),
    __metadata("design:returntype", Promise)
], TweetCommentController.prototype, "editComment", null);
__decorate([
    (0, decorators_1.Delete)('/:tweetId'),
    __param(0, (0, decorators_1.Param)('tweetId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], TweetCommentController.prototype, "deleteComment", null);
TweetCommentController = __decorate([
    (0, common_1.Controller)('tweetcomment'),
    __metadata("design:paramtypes", [tweet_comment_service_1.TweetCommentService,
        login_services_1.LoginService])
], TweetCommentController);
exports.TweetCommentController = TweetCommentController;
//# sourceMappingURL=tweet_comment.controller.js.map