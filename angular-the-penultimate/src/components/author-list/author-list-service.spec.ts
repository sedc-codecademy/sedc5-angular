import { TestBed, async, fakeAsync, flushMicrotasks, ComponentFixture } from '@angular/core/testing';

import { AuthorListService } from './author-list-service';
import { Author } from "../../models";

import { DataService } from "../../services/data-service";

describe('AuthorListService', () => {
    let service: AuthorListService;
    let dataService: any;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            providers: [
                AuthorListService,
                { provide: DataService, useValue: jasmine.createSpyObj(["getAllAuthors"]) }
            ]
        }).compileComponents();
        service = TestBed.get(AuthorListService);
        dataService = TestBed.get(DataService);
    }));

    it("expect getAllAuthors to be calling the service method", async () => {
        // 1. Arrange
        dataService.getAllAuthors.and.returnValue(Promise.resolve([]));
        // 2. Act
        const actual = await service.getAllAuthors();
        // 3. Assert
        expect(actual).toEqual([]);
        expect(dataService.getAllAuthors).toHaveBeenCalled();
    });

    it("expect getAllAuthors to be calling the service method and returning data", async () => {
        // 1. Arrange
        const authors = [{id: 1, name: "author-name"}];
        dataService.getAllAuthors.and.returnValue(Promise.resolve(authors));
        // 2. Act
        const actual = await service.getAllAuthors();
        // 3. Assert
        expect(actual).toEqual(authors);
        expect(dataService.getAllAuthors).toHaveBeenCalled();
    });
});
