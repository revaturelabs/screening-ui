import { GambitSkillService } from './gambit-skill.service';
import { UrlService } from '../urls/url.service';
import { defer } from 'rxjs';
import { Bucket } from '../../entities/Bucket';

export function asyncData<T>(data: T) {
  return defer(() => Promise.resolve(data));
}

/**
   * Test for methods on the gambit-skill service.
   *
   * @author Antonio Marrero Bonilla | 1803-USF-MAR26 | Wezley Singleton
   *
   * @author Byron Hall | 1803-USF-MAR26 | Wezley Singleton
   */

describe('GambitSkillService', () => {
  let httpClientSpyOnGet: {get: jasmine.Spy};
  let httpClientSpyOnPost: { post: jasmine.Spy };
  let httpClientSpyOnPut: {put: jasmine.Spy };
  let httpClientSpyOnDelete: {delete: jasmine.Spy};
  let gambitService: GambitSkillService;

  const skillsArray: Bucket[] = [new Bucket(), new Bucket()];
  skillsArray[0].isActive = true;
  skillsArray[0].bucketId = 1;
  skillsArray[0].bucketDescription = 'JSP';

  skillsArray[1].isActive = false;
  skillsArray[1].bucketId = 2;
  skillsArray[1].bucketDescription = 'servlet';

  /**
   * See if findall makes an http request
   *
   * Function tested: findall()
   */
  it('findAll should return all Buckets', () => {
    httpClientSpyOnGet = jasmine.createSpyObj('http', ['get']);
    gambitService = new GambitSkillService(<any> httpClientSpyOnGet, new UrlService);
    httpClientSpyOnGet.get.and.returnValue(asyncData(skillsArray));
    gambitService.findAll().subscribe(
      skills => expect(skills).toEqual(skillsArray)
    );
  });

  /**
   * See if findallActive makes an http request
   *
   * Function tested: findallActive()
   */
  it('findAllActive should return all active Buckets', () => {
    httpClientSpyOnGet = jasmine.createSpyObj('http', ['get']);
    gambitService = new GambitSkillService(<any> httpClientSpyOnGet, new UrlService);
    httpClientSpyOnGet.get.and.returnValue(asyncData(skillsArray));
    gambitService.findAllActive().subscribe(
      skills => expect(skills).toContain(skillsArray[1])
    );
  });

  /**
   * See if findById makes an http request
   *
   * Function tested: findById()
   */
  it('findById should return a Bucket of the same id', () => {
    httpClientSpyOnGet = jasmine.createSpyObj('http', ['get']);
    gambitService = new GambitSkillService(<any> httpClientSpyOnGet, new UrlService);
    httpClientSpyOnGet.get.and.returnValue(asyncData(skillsArray[0]));
    gambitService.findById(1).subscribe(
      skill => expect(skill).toEqual(skillsArray[0])
    );
  });

  /**
   * See if findByName makes an http request
   *
   * Function tested: findByName()
   */
  it('findByName should return a Bucket with the same name', () => {
    httpClientSpyOnGet = jasmine.createSpyObj('http', ['get']);
    gambitService = new GambitSkillService(<any> httpClientSpyOnGet, new UrlService);
    httpClientSpyOnGet.get.and.returnValue(asyncData(skillsArray[0]));
    gambitService.findByName('JSP').subscribe(
      skill => expect(skill).toEqual(skillsArray[0])
    );
  });

  /**
   * See if create makes an http request
   *
   * Function tested: create()
   */
  it('should create a Bucket', () => {
    httpClientSpyOnPost = jasmine.createSpyObj('http', ['post']);
    gambitService = new GambitSkillService(<any> httpClientSpyOnPost, new UrlService);
    httpClientSpyOnPost.post.and.returnValue(asyncData(skillsArray[0]));
    gambitService.create(skillsArray[0]).subscribe(
      skill => expect(skill).toEqual(skillsArray[0])
    );
  });

  /**
   * See if update makes an http request
   *
   * Function tested: update()
   */
  it('should update a Bucket', () => {
    httpClientSpyOnPut = jasmine.createSpyObj('http', ['put']);
    gambitService = new GambitSkillService(<any> httpClientSpyOnPut, new UrlService);
    httpClientSpyOnPut.put.and.returnValue(asyncData(skillsArray[0]));
    gambitService.update(skillsArray[0]).subscribe(
      skill => expect(skill).toEqual(skillsArray[0])
    );
  });

  /**
   * See if delete makes an http request
   *
   * Function tested: delete()
   */
  it('should delete a Bucket', () => {
    httpClientSpyOnDelete = jasmine.createSpyObj('http', ['delete']);
    gambitService = new GambitSkillService(<any> httpClientSpyOnDelete, new UrlService);
    httpClientSpyOnDelete.delete.and.returnValue(asyncData(true));
    gambitService.delete(skillsArray[0]).subscribe(
      response => expect(response).toBeTruthy()
    );
  });
});
