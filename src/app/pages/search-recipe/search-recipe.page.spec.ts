import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SearchRecipePage } from './search-recipe.page';

describe('SearchRecipePage', () => {
  let component: SearchRecipePage;
  let fixture: ComponentFixture<SearchRecipePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(SearchRecipePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
