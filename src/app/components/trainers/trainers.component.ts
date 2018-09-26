import { Component, OnInit, Inject, Input } from '@angular/core';
import { Subscription } from 'rxjs';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { TrainerService } from '../../../../gambit-client/services/trainer/trainer.service';
import { GambitTrainer } from '../../../../gambit-client/entities/GambitTrainer';
import { NgForm } from '@angular/forms/src/directives/ng_form';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserRole } from '../../../../gambit-client/entities/UserRole';


@Component({
  selector: 'app-trainers',
  templateUrl: './trainers.component.html',
  styleUrls: ['./trainers.component.css']
})

export class TrainersComponent implements OnInit {
  trainers: GambitTrainer[] = [];
  filteredTrainers: GambitTrainer[] = [];
  titles: Array<any>;
  userRoles: Array<UserRole>;
  model = new GambitTrainer();
  activeStatus: String;
  currEditTrainer: GambitTrainer;
  newTrainer: GambitTrainer;
  newRole: UserRole;
  newTitle: string;
  rForm: FormGroup;
  addForm: FormGroup;


  constructor(private trainerService: TrainerService,
    private modalService: NgbModal, private fb: FormBuilder, private route: Router) { }

  ngOnInit() {
    this.trainerService.fetchAll().subscribe((resp) => {
      this.trainers = resp;
      if (resp) {
        this.filteredTrainers = resp.filter(s => {
            if (s.role !== null) {
              return s.role.role !== 'INACTIVE';
            } else {
              console.log('Bad coding practice. Need Trainers with roles');
            }
          }
        );
      }
    });
    this.trainerService.fetchTitles().subscribe(res => this.titles = res);
    this.trainerService.fetchRoles().subscribe(res => {
      this.userRoles = (res.filter(role => role.role !== 'INACTIVE')); // filter out INACTIVE role
    });
    this.initFormControl();
  }

  /**
   * initialize form control for validations
   *
   * @memberof TrainersComponent
   */
  initFormControl() {
    this.addForm = this.fb.group({
      'firstName': ['', Validators.required],
      'lastName': ['', Validators.required],
      'email': ['', Validators.email],
      'password': ['', Validators.required],
      'title': ['', Validators.required],
      'role': ['', Validators.required],
    });
  }

  /**
   * adds a new trainer to the database
   * @param modal: modal from create trainer form
   */
  addTrainer(modal: NgForm) {
    this.newTrainer = modal.value;
    this.newTrainer.role = this.roleMapping(modal.value.role);
    this.trainerService.create(this.newTrainer).subscribe((resp) => {
      this.ngOnInit();
    });
  }

  open(content) {
    this.modalService.open(content);
  }

  /**
   * backup original fields, and open modal for editing
   * @param content: modal form
   * @param modalTrainer: trainer belong to this modal
   */
  editTrainer(content, modalTrainer: GambitTrainer) {
    this.currEditTrainer = modalTrainer;
    this.newRole = modalTrainer.role;
    this.newTitle = modalTrainer.title;
    this.rForm = this.fb.group({
      'firstName': [this.currEditTrainer.firstName, Validators.required],
      'lastName': [this.currEditTrainer.lastName, Validators.required],
      'email': [this.currEditTrainer.email, Validators.email],
      'title': [this.newTitle, Validators.required],
      'role': [this.newRole.role, Validators.required],
    });
    this.modalService.open(content, { size: 'lg' });
  }

  /**
   * Show modal for deactivating a trainer
   * @param content
   */
  showModal(content) {
    this.modalService.open(content);
  }

  /**
   * Method to deactivate trainer. Set the role to INACTIVE.
   * Then call a put in http to update on the database.
   * see the inactivate then wait before refreshing the list.
   * @param trainer
   */
  deactivateTrainer(trainer: GambitTrainer) {
    trainer.role.role = 'INACTIVE';
    this.trainerService.makeInactive(trainer).subscribe((resp) => {
      setTimeout(() => { this.ngOnInit(); }, 1000);
    });
  }

  /**
   * Role was changed, update with new value
   * @param newRole: Role string
   */
  roleChange(newRole) {
    this.newRole = newRole;
  }

  /**
   * If title is empty, change back to original title
   * else update with new title
   * @param newTitle: title string
   */
  titleChange(newTitle) {
    if (newTitle === '') {
      this.newTitle = this.currEditTrainer.title;
    } else {
      this.newTitle = newTitle;
    }
  }

  newRoleChange(newRole) {
    this.model.role = newRole;
  }

  newTitleChange(newTitle) {
    this.model.title = newTitle;
  }

  /**
   * Changes param passed for Active/Inactive Buttons
   * @param status: status value
   */
  buttonChange(status: String) {
    this.activeStatus = status;
  }

  /**
   * This helpper function mapps a role string into the correct UserRole object
   * @param role
   */
  roleMapping(role: string): UserRole {
    for (let index = 0; index < this.userRoles.length; index++) {
      if (role === this.userRoles[index].role) {
        return this.userRoles[index];
      }
    }
  }

  /**
   * update the fields in currently edited trainer
   * and send update request
   * @param modal: modal value with all the fields
   */
  updateTrainer(modal: NgForm) {
    const updateTrainer: GambitTrainer = modal.value;
    updateTrainer.userId = this.currEditTrainer.userId;
    updateTrainer.role = this.roleMapping(modal.value.role);
    this.trainerService.update(updateTrainer).subscribe((resp) => {
      this.currEditTrainer = updateTrainer;
      this.ngOnInit();
    });

  }
  /**
   * get the cause for modal dismissal
   *
   * @private
   * @param {*} reason
   * @returns {string}
   * @memberof TrainersComponent
   */
  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }
  /**
   * clean up subscriptions
   *
   * @memberof TrainersComponent
   */

  /**
   * set current trainer to clicked  trainer and navigates to trainer profile page
   *
   * @param {any} trainer
   * @memberof TrainersComponent
   */
  goToProfile(trainer) {
    this.trainerService.changeCurrentTrainer(trainer);
    this.route.navigate(['Caliber/settings/trainer-profile']);
  }
}
