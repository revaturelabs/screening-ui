import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Tag } from '../entities/Tag';
import { UrlService } from '../../../../../gambit-client/services/urls/url.service';

const httpOptions = {
headers: new HttpHeaders({
        'Content-Type':  'application/json',
    })
};

@Injectable()
export class TagsService {
    tag: Tag;
    constructor(private http: HttpClient, private urlService: UrlService) { }
    getAllTags() {
      return this.http.get(this.urlService.question.getAllTags());
    }
    getTagByQuestion(questionId: number) {
        return this.http.get(this.urlService.question.getTagsByQuestionId(questionId));
    }
    createNewTag(newTagName: string) {
        const newTag: Tag = new Tag();
        newTag.tagName = newTagName;
    return this.http.post(this.urlService.question.createNewTag(), newTag, httpOptions);
  }
}
