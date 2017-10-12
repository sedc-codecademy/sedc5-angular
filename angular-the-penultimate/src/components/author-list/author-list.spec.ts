import { TestBed, async, fakeAsync, flushMicrotasks, ComponentFixture } from '@angular/core/testing';
import { AuthorListComponent } from './author-list';
import { AuthorListService } from './author-list-service';
import { AuthorListItemComponent } from '../author-list-item';
import { Author } from "../../models";

class MockAuthorListService {
  getAllAuthors(): Promise<Author[]> {
    return Promise.resolve([]);
  }

  getAuthorsByName(nameFragment: string): Author[] {
    return [];
  }
}

describe('AuthorListComponent', () => {

  let fixture: ComponentFixture<AuthorListComponent>;
  let service: any;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AuthorListComponent,
        AuthorListItemComponent
      ],
      imports: [],
      providers: [
        { provide: AuthorListService, useValue: jasmine.createSpyObj(["getAllAuthors"]) }
      ]
    }).compileComponents();
    fixture = TestBed.createComponent(AuthorListComponent);
    service = TestBed.get(AuthorListService);

  }));

  it('should create the author list', async(() => {
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  }));

  it('should initialize the author list', fakeAsync(() => {
    service.getAllAuthors.and.returnValue(Promise.resolve([]));

    console.log("before init");
    fixture.detectChanges();
    const app = fixture.componentInstance;
    flushMicrotasks();
    console.log("after init");
    expect(app.authors).toEqual([]);
    expect(app.total).toEqual("Total authors: 0");
    expect(service.getAllAuthors).toHaveBeenCalled();
    console.log("after expects");
  }));

  it('should initialize the author list with data', fakeAsync(() => {
    service.getAllAuthors.and.returnValue(Promise.resolve([
      {
        "id": 1,
        "name": "Arthur C. Clarke"
      },
      {
        "id": 2,
        "name": "Robert A. Heinlein"
      },
      {
        "id": 3,
        "name": "Isaak Asimov"
      }
    ]));

    console.log("before init");
    fixture.detectChanges();
    const app = fixture.componentInstance;
    flushMicrotasks();
    console.log("after init");
    expect(app.authors).toEqual([
      {
        "id": 1,
        "name": "Arthur C. Clarke"
      },
      {
        "id": 2,
        "name": "Robert A. Heinlein"
      },
      {
        "id": 3,
        "name": "Isaak Asimov"
      }
    ]);
    expect(app.total).toEqual("Total authors: 3");
    expect(service.getAllAuthors).toHaveBeenCalled();
    console.log("after expects");
  }));

});
