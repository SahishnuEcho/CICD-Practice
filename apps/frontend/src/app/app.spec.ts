import { TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { App } from './app';

describe('App', () => {
  let httpMock: HttpTestingController;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [App],
      providers: [provideHttpClient(), provideHttpClientTesting()],
    }).compileComponents();

    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => httpMock.verify());

  it('should create the app', () => {
    const fixture = TestBed.createComponent(App);
    httpMock.expectOne('/api/hello');
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('should render the message from the backend', async () => {
    const fixture = TestBed.createComponent(App);
    httpMock
      .expectOne('/api/hello')
      .flush({ message: 'Hello from the NestJS backend!', timestamp: '' });
    await fixture.whenStable();
    fixture.detectChanges();

    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('CI/CD Practice');
    expect(compiled.querySelector('.message')?.textContent).toContain(
      'Hello from the NestJS backend!',
    );
  });
});
