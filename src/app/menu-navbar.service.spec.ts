import { TestBed } from '@angular/core/testing';

import { MenuNavbarService } from './menu-navbar.service';

describe('MenuNavbarService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MenuNavbarService = TestBed.get(MenuNavbarService);
    expect(service).toBeTruthy();
  });
});
