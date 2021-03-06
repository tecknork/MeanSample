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
var core_1 = require('@angular/core');
var Observable_1 = require('rxjs/Observable');
var io = require('socket.io-client');
var http_1 = require('@angular/http');
require('rxjs/add/operator/map');
var ChatService = (function () {
    function ChatService(_http) {
        this._http = _http;
        // this.socket = io(this.url);
        this.socket = io(this.url);
        this.socket.on('connect', function () {
            console.log("socketId" + this.socket);
        });
        this.getSokcetID().subscribe(function (id) {
            console.log(id);
            // this.messages.push(message);
        });
    }
    ChatService.prototype.setUsername = function (name) {
        // this.username= name;
    };
    ChatService.prototype.getUsername = function () {
        return this.username;
    };
    ChatService.prototype.setServername = function (server) {
        this.servername = server;
        console.log('starts join ' + this.servername);
        // this.joinroom(this.servername); 
        this.joinroom(this.servername);
        // result.subscribe(x => {
        //         console.log(x);
        // });
    };
    ChatService.prototype.getServername = function () {
        return this.servername;
    };
    ChatService.prototype.sendMessage = function (message) {
        this.socket.emit('add-message', { msg: message, server: this.servername });
    };
    ChatService.prototype.getSokcetID = function () {
        var _this = this;
        var observable = new Observable_1.Observable(function (observer) {
            // console.log(this.socket.socket.id);
            _this.socket.on('clientId', function (data) {
                //  console.log(data); // 'G5p5...'
                observer.next(data);
            });
            return function () {
                //this.socket.disconnect();
            };
        });
        return observable;
    };
    ChatService.prototype.getMessage = function () {
        var _this = this;
        var observable = new Observable_1.Observable(function (observer) {
            // console.log(this.socket.socket.id);
            _this.socket.on('message', function (data) {
                observer.next(data);
            });
            return function () {
                _this.socket.disconnect();
            };
        });
        return observable;
    };
    ChatService.prototype.joinroom = function (room) {
        // var headers = new Headers();
        // var object = {"rooms":room};
        // console.log('Json' + JSON.stringify(object));
        // headers.append('Content-Type', 'application/json');
        // return this._http.post('/chats/join', object, {headers: headers})
        //     .map(res => res.json());
        // //this.socket = io(this.url);
        this.socket.emit('join', room);
    };
    ChatService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], ChatService);
    return ChatService;
}());
exports.ChatService = ChatService;
//# sourceMappingURL=chat.service.js.map