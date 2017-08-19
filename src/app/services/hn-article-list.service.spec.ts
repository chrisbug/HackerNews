import { TestBed, inject } from '@angular/core/testing';

import { HnArticleListService } from './hn-article-list.service';

describe('HnArticleListService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HnArticleListService]
    });
  });

  it('should be created', inject([HnArticleListService], (service: HnArticleListService) => {
    expect(service).toBeTruthy();
  }));
});
