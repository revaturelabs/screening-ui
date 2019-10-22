import { Injectable } from "@angular/core";

import { BehaviorSubject, Observable } from "rxjs";

import { Routes } from "@angular/router";

import { routes } from "../app.routes";

import { AppComponent } from "../app.component";
import { CandidatesScreeningListComponent } from "../components/candidates-screening-list/candidates-screening-list.component";
import { ScreeningComponent } from "../components/screening/screening.component";
import { IntroductionComponent } from "../components/introduction/introduction.component";
import { QuestionsTableComponent } from "../components/questions-table/questions-table.component";
import { FinalReportComponent } from "../components/final-report/final-report.component";
import { PassFailComponent } from "../components/pass-fail/pass-fail.component";
import { SettingsComponent } from "../components/settings/settings.component";
import { ScreeningConfigComponent } from "../components/screening-config/screening-config.component";
import { QuestionComponent } from "../components/question/question.component";

@Injectable()
export class MockRoutes {
    private all: BehaviorSubject<Routes>;
  private allWithData: BehaviorSubject<Routes>;
  private allWithTitles: BehaviorSubject<Routes>;
  private allNavRoutes: BehaviorSubject<Routes>;
  private allTopNav: BehaviorSubject<Routes>;

  private rootNode: string;

  /**
   * Delegates bootstrapping to the initialize function
   */
  constructor() {
    this.rootNode = '/';
    this.initialize();
  }

  /**
   * returns a BehaviorObservable of all
   * defined Caliber component child routes
   *
   * @return Observable<Routes>
   */
  public getAllRoutes(): Observable<Routes> {
    return this.all.asObservable();
  }

  /**
   * returns a BehaviorObservable of all
   * defined routes with "data" property
   *
   * @return Observable<Routes>
   */
  public getRoutesWithData(): Observable<Routes> {
    return this.allWithData.asObservable();
  }

  /**
   * Returns a BehaviorObservable of all
   * defined routes with a "data.title" property
   *
   * @return Observable<Routes>
   */
  public getRoutesWithTitles(): Observable<Routes> {
    return this.allWithTitles.asObservable();
  }

  /**
   * Returns a BehaviorObservable of all
   * defined routes with a "data.title" property
   * AND a "data.position" property
   *
   * @return Observable<Routes>
   */
  public getNavRoutes(): Observable<Routes> {
    return this.allTopNav.asObservable();
  }

  /**
   * Returns a BehaviorObservable of all
   * defined routes with the following properties:
   * - data
   * - data.title
   * - data.position === 'top'
   *
   * @return Observable<Routes>
   */
  public getTopNavRoutes(): Observable<Routes> {
    return this.allTopNav.asObservable();
  }

  /**
   * Retrieves all defined children routes of the
   * AppComponent and pushed them on the "all" subject
   */
  private fetchAll(): void {
    let roots =[
        {
          path: '',
          component: CandidatesScreeningListComponent,
        },
        {
          path: 'screening',
          component: ScreeningComponent,
          // canActivate: [RoleGuard],
          // data: {
          //   roles: [
          //     roles.screenerRole, roles.vpRole
          //   ]
          // },
          children: [
            {
              path: 'intro',
              component: IntroductionComponent,
            },
            {
              path: 'questions',
              component: QuestionsTableComponent,
            },
            {
              path: 'finalReport',
              component: FinalReportComponent,
            },
            {
              path: 'passFail',
              component: PassFailComponent
            }
          ]
        },
        {
          path: 'settings',
          component: SettingsComponent,
          // canActivate: [RoleGuard],
          // data: {
          //   roles: [roles.panelRole, roles.qcRole, roles.stagingRole, roles.trainerRole, roles.vpRole]
          // },
          children: [
            {
              path: 'main',
              component: ScreeningConfigComponent
            },
            {
              path: 'bucket',
              component: QuestionComponent
            }
          ]
        },
        {
          path: 'home',
          component: CandidatesScreeningListComponent,
        },
        {
          path: '**',
          pathMatch: 'full',
          redirectTo: '/home'
        }
      ];
    const root = roots.find((route) => root.component === AppComponent);
    const nodes = root.children;
    nodes.forEach( (node) => {
      node.path = [ this.rootNode, node.path].join('/');
    });
    this.all.next( nodes );
  }

  /**
   * filters out all defined routes with a "data"
   * property and pushes them on the "allWithData" subject
   */
  private fetchWithData( defRoutes: Routes): void {
    this.allWithData.next( defRoutes.filter( (route) => route.hasOwnProperty('data') ) );
  }

  /**
   * filters out all defined routes with a "data.title"
   * property and pushes them on the "allWithTitles" subject
   */
  private fetchWithTitles( defRoutes: Routes): void {
    this.allWithTitles.next(defRoutes.filter( (route) => route.data.hasOwnProperty('title') ) );
  }

  /**
   * filters out all defined routes with a "data.position"
   * property and pushes them on the "allNavRoutes" subject
   */
  private fetchNavRoutes(defRoutes: Routes): void {
    this.allNavRoutes.next(defRoutes.filter( (route) => route.data.hasOwnProperty('position') ) );
  }

  /**
   * filters out all defined routes with a "data.position"
   * property set to "top" and pushes them on the "allTopNav" subject
   */
  private fetchTopNavRoutes(defRoutes: Routes): void {
    this.allTopNav.next((defRoutes.filter( (route) => route.data.position === 'top') ) );
  }

  /**
   * bootstraps the data behind the service by delegating
   * to other initialize functions
   */
  private initialize(): void {
    this.initializeSubjects();
    this.initializeSubscriptions();

  /*
   * begin daisy chain of subscriptions
   */
    this.fetchAll();
  }

  /**
   * Initializes Behavior subjects
   */
  private initializeSubjects(): void {
    this.all = new BehaviorSubject([]);
    this.allWithData = new BehaviorSubject([]);
    this.allWithTitles = new BehaviorSubject([]);
    this.allNavRoutes = new BehaviorSubject([]);
    this.allTopNav = new BehaviorSubject([]);
  }

  /**
   * Sets up a daisy-chain for subscriptions to
   * call the "fetch.." functions to populate each
   * subject with it's view of the routes array
   */
  private initializeSubscriptions(): void {
    this.all.subscribe((defRoutes) => this.fetchWithData(defRoutes));
    this.allWithData.subscribe((defRoutes) => this.fetchWithTitles(defRoutes));
    this.allWithTitles.subscribe((defRoutes) => this.fetchNavRoutes(defRoutes));

    /*
    * this subscription is the point where we may want to expand with multiple
    * actions take place at some point like if we want side nav routes
    * or footer nav routes
    */
    this.allNavRoutes.subscribe((defRoutes) => {
      this.fetchTopNavRoutes(defRoutes);
      // fetch side nav
      // fetch footer nav
      // fetch some other nav
    });
  }
}