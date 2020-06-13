import { action, observable } from "mobx";

export class ScoreModel {
    @observable
    upvote: number;

    @observable
    downvote: number;

    @observable
    isVoted: boolean = false;

    constructor(upvote: number, downvote: number) {
        this.upvote = upvote;
        this.downvote = downvote;
    }

    @action
    upvoteScore() {
        if (!this.isVoted) {
            this.upvote += 1;
            this.isVoted = true;
        }
    }

    @action
    downvoteScore() {
        if (!this.isVoted) {
            this.downvote += 1;
            this.isVoted = true;
        }
    }
}
